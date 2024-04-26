const express = require('express')
const cors = require('cors');
const app = express()
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/Login');
const Login = require('./models/Login');
app.use(cors());


const dbUrl = 'mongodb+srv://Prakashkolluru:PrakashKolluru@poker-data.axtxnb5.mongodb.net/?retryWrites=true&w=majority&appName=Poker-data'
app.use(express.json()); 


mongoose.connect(dbUrl)
    .then(() => {
        app.listen(3000, () => console.log("Server running on http://localhost:3000"));
    })
    .catch((err) => console.log("Error connecting to MongoDB:", err));



    app.post('/login', async (req, res) => {
        const { username, password } = req.body;
        console.log(username, password);
    
        try {
            const user = await User.findOne({ username: username });
            console.log("User found:", user);
            
            if (!user) {
                console.log("User not found");
                return res.status(404).send({ message: "Account doesn't exist" });
            }
            
            const isMatch = await bcrypt.compare(password, user.Password);
            if (!isMatch) {
                console.log("Password does not match");
                return res.status(401).send({ message: "Incorrect password" });
            }
    
            res.status(200).send({ message: "Login successful!" });
        } catch (error) {
            console.log("Error during login:", error);
            res.status(500).send({ message: "Server error", error: error });
        }
    });
    

app.post('/register', async (req, res) => {
    console.log("entered");

    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username: username });
        if (user) {
            return res.status(409).send({ message: "User already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            username: username,
            Password: hashedPassword
        });

        await newUser.save();
        res.status(201).send({ message: "Created a user!" }); 
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).send({ message: "Error while creating user", error: error.message });
    }

});


app.post('/evaluate', async (req, res) => {
    try {
        console.log("hihi")
        const response = await axios.post('http://localhost:5000/evaluate', req.body);
       
        console.log('Winner:', response.data.winner);
        res.json(response.data);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).send('Internal Server Error');
    }
});
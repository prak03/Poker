from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  

@app.route('/evaluate', methods=['POST'])
def evaluate_poker_hand():
    data = request.get_json()  
    result = {'winner': 'Player 1'}  
    return jsonify(result)

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000, debug=True)

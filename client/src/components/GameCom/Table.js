// src/components/Table.js
import React, { useEffect, useState } from 'react';
import poker from "../../assets/pokertable1.jpeg";
import { deckService } from '../../services/deckService';
import { drawCards } from "../../services/drawcard";
import CardDisplay from '../GameCom/cardDisplay';
import axios from 'axios';


import { useNavigate } from 'react-router-dom';


function Table() {
  const navigate = useNavigate();
  const [deckId, setDeckId] = useState(null);
  const [frontCards, setFrontCards] = useState([]);
  const [backCards, setBackCards] = useState({});
  const [playerCards, setPlayerCards] = useState([]);
  const [winner, setWinner] = useState(null)


  useEffect(() => {
    const fetchDeckId = async () => {
      const deck_ID = await deckService();
      setDeckId(deck_ID);
    };
    fetchDeckId();
  }, []);
  const handleDrawCards = async () => {
    const drawnFrontCards = await drawCards(3, deckId);
    console.log("Initial draw:", drawnFrontCards);
    setFrontCards(drawnFrontCards);
    setBackCards([{}, {}]); 
    setPlayerCards(new Array(5).fill([null, null]));  
};



const flipPlayerCard = async () => {
  if (!deckId) return; // Early exit if no deck ID

  // Draw 5 new cards (one for each player)
  const newCards = await drawCards(5, deckId);
  
  // Map over each player's current cards and update the first null card found
  const updatedPlayerCards = playerCards.map((cards, index) => {
    const newCard = newCards[index];
    if (cards[0] === null) { 
      return [newCard, cards[1]]; 
    } else if (cards[1] === null) { 
      return [cards[0], newCard];
    }
    return cards;
  });

  setPlayerCards(updatedPlayerCards);

  if (backCards.length === 1 && Object.keys(backCards[0]).length === 0) {
    try {
        const requestData = {
            frontCards: frontCards,
            playerCards: playerCards
        };

        const response = axios.post('http://127.0.0.1:5000/evaluate', requestData, {
          headers: {
              'Content-Type': 'application/json'
          }
      })
      .then(response => {
          console.log('Winner:', response.data.winner);
          setWinner(response.data.winner)
      })
      .catch(error => {
          console.error('Error:', error.response ? error.response.data : error.message);
      });
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
    }
  }
};


  


  const flipCard = async () => {
    await flipPlayerCard(); 
    const [flippingCard] = await drawCards(1, deckId);
    setFrontCards(prev => [...prev, flippingCard]);

    // Update backCards as an array
    setBackCards(prev => {
        if (prev.length > 0) {
            return prev.slice(0, -1);  // Remove the last element from the array
        }
        return prev;
    });

};



  

  return (
    <div>
      <div className='flex justify-center items-center h-screen'>
        <div style={{ backgroundImage: `url(${poker})` }} className='bg-no-repeat bg-contain bg-center w-7/12 h-full flex justify-center items-center rounded-lg relative'>
          <div className='flex justify-center items-center'>
            <CardDisplay cards={frontCards} />
            <CardDisplay cards={backCards} />
          </div>
          <div className='absolute' style={{ top: '30%', left: '35%', transform: 'translate(-50%, -50%) rotate(330deg)' }}>
            <CardDisplay cards={playerCards[0]} />
          </div>
          <div className='absolute' style={{ top: '55%', left: '22%', transform: 'translate(-50%, -50%) rotate(75deg)' }}>
            <CardDisplay cards={playerCards[1]} />
          </div>
          <div className='absolute' style={{ top: '55%', right: '10%', transform: 'translate(-50%, -50%) rotate(105deg)' }}>
            <CardDisplay cards={playerCards[2]} />
          </div>
          <div className='absolute' style={{ bottom: '20%', left: '50%', transform: 'translate(-50%, -50%) rotate(180deg)' }}>
            <CardDisplay cards={playerCards[3]} />
          </div>
          <div className='absolute' style={{ top: '30%', left: '65%', transform: 'translate(-50%, -50%) rotate(30deg)' }}>
            <CardDisplay cards={playerCards[4]} />
          </div>
        </div>
        <div className='pl-20'>
          <button onClick={handleDrawCards}>Call</button>
          <button onClick={flipCard} disabled={!deckId || Object.keys(backCards).length === 0}>Flip</button>
          
        </div>
      </div>

      {winner !== null && (
      <p>Winner: {winner}</p>
    )}

    </div>
  );
}
  

export default Table;

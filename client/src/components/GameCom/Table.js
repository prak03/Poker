// src/components/Table.js
import React, { useState } from 'react';
import poker from "../../assets/pokertable1.jpeg";
import { drawCards } from "../../services/drawcard";
import CardDisplay from '../GameCom/cardDisplay';

function Table() {
  const [frontCards, setFrontCards] = useState([]);
  const [backcards, setBackcards] = useState([]);

  const handleDrawCards = async () => {
    const drawnFrontCards = await drawCards(3); // Adjust the number of cards as needed
    setFrontCards(drawnFrontCards);
    setBackcards({1:2,2:2})
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <p style={{ backgroundImage: `url(${poker})` }} className='bg-no-repeat bg-contain bg-center w-7/12 h-full flex justify-center items-center rounded-lg '>
      <CardDisplay cards={frontCards} />
      <CardDisplay cards={backcards}/>
      </p>
      <div className='pl-20'>
        <button onClick={handleDrawCards}>Call</button>
        
      </div>
    </div>
  );
}

export default Table;

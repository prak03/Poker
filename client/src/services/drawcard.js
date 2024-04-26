import axios from 'axios';

const BASE_URL = 'https://deckofcardsapi.com/api/deck';

console.log("yoyomama")

// Function to create a new deck and draw cards
export const drawCards = async (count,deckID) => {
  try {
    console.log("ayyayayyayay",deckID)
    const drawResponse = await axios.get(`${BASE_URL}/${deckID}/draw/?count=${count}`);
    

    return drawResponse.data.cards;
  } catch (error) {
    console.error('Error drawing cards:', error);
    return [];
  }
};


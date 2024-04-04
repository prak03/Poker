import axios from 'axios';

const BASE_URL = 'https://deckofcardsapi.com/api/deck';

console.log("yoyomama")

// Function to create a new deck and draw cards
export const drawCards = async (count) => {
  try {
    // Create a new deck
    const newDeckResponse = await axios.get(`${BASE_URL}/new/shuffle/`);
    console.log(newDeckResponse)
    const deckId = newDeckResponse.data.deck_id;
    console.log(deckId)

    // Draw cards from the deck
    const drawResponse = await axios.get(`${BASE_URL}/${deckId}/draw/?count=${count}`);
    

    return drawResponse.data.cards;
  } catch (error) {
    console.error('Error drawing cards:', error);
    return [];
  }
};


import axios from 'axios';

const BASE_URL = 'https://deckofcardsapi.com/api/deck';

export const deckService = async () => {
  try {
    // Create a new deck
    const newDeckResponse = await axios.get(`${BASE_URL}/new/shuffle/`);
    console.log(newDeckResponse)
    const deckId = newDeckResponse.data.deck_id;
    console.log(deckId)

    return deckId
  } catch (error) {
    console.error('Error drawing cards:', error);
    return [];
  }
};


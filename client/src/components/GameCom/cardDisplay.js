function CardDisplay({ cards }) {
  const backOfCardUrl = "https://deckofcardsapi.com/static/img/back.png";

  // Safeguard to handle non-array inputs and ensure cards is always an array
  const safeCards = Array.isArray(cards) ? cards : [];

  return (
      <div className="flex gap-2">
          {safeCards.map((card, index) => (
              // Check if card is not null and has the necessary properties to render a card
              card && card.image ? (
                  <img key={card.code || index} src={card.image} alt={`${card.value} of ${card.suit}`} className="h-16" />
              ) : (
                  // Render the back of a card for null or improperly structured card objects
                  <img key={index} src={backOfCardUrl} alt="Card back" className="h-16" />
              )
          ))}
      </div>
  );
}

export default CardDisplay;

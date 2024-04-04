function CardDisplay({ cards }) {
  const backOfCardUrl = "https://deckofcardsapi.com/static/img/back.png";

  return (
    <div className="flex gap-2">
      <div className="flex gap-2">
        {Array.isArray(cards) &&
          cards.map((card) => (
            <img key={card.code} src={card.image} alt={`${card.value} of ${card.suit}`} className="h-16" />
          ))}
      </div>
      <div className="flex gap-2">
        {!Array.isArray(cards) &&
          Array.from({ length: Object.keys(cards).length }).map((_, index) => (
            <img key={index} src={backOfCardUrl} alt="Card back" className="h-16" />
          ))}
      </div>
    </div>
  );
}

export default CardDisplay;

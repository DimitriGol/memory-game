export default function SingleCard({ card, choiceHandler, flipped}) {
  
  const handleClick = () => {
    choiceHandler(card)
  }
  
  return(
    <div className='card' onClick={handleClick}>
        <img
          className={flipped ? "flipped" : "card-img"}
          src={card.src} 
          alt="card-img"
        />
      {/* </div> */}
    </div>
  )
}
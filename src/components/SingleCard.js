export default function SingleCard({ card, choiceHandler, flipped, disabled}) {
  
  const handleClick = () => {
    if (!disabled){
      choiceHandler(card);
    }
  }
  
  return(
    <div className='card'>
      
      <div className={flipped ? "flipped" : ""}>
        {/* Front Image */}
        <img
          className="front" 
          src={card.src} 
          alt="card-img"
        />
        {/* Back Image */}
        <img 
          className='back' 
          src="/img/back.png" 
          alt="back" 
          onClick={handleClick}
        />

      </div>
      
    </div>
  )
}
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
          src={process.env.PUBLIC_URL + card.src} 
          alt="card-img"
        />
        {/* Back Image */}
        <img 
          className='back' 
          src={process.env.PUBLIC_URL + "/img/back.png"}
          alt="back" 
          onClick={handleClick}
        />

      </div>
      
    </div>
  )
}
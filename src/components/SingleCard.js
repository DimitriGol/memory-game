export default function SingleCard({ card, choiceHandler}) {
  
  const handleClick = () => {
    choiceHandler(card)
  }
  
  return(
    <div className='card' onClick={handleClick}>
      <img 
        className='card-img' 
        src={card.src} 
        alt="card-img"
      />
    </div>
  )
}
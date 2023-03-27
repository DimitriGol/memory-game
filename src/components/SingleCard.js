export default function SingleCard( {card} ) {
  return(
    <div className='card'>
      <img clasName='card-img' src={card.src} alt="card-img"/>
    </div>
  )
}
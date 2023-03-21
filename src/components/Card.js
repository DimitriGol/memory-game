function Card({card}) {
    return (
        <div className='card' key={card.id}>
            <div>
                <img className='card-img' src={card.src} alt="card img" />
            </div>
        </div>
    );
}

export default Card
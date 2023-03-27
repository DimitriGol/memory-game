import './App.css';
import SingleCard from './components/SingleCard'; //Card component
// import Cards from './components/Cards'; //Cards component
import { useState } from 'react';


const cardImagesArray = [
  {"src": "/img/binary.png"},
  {"src": "img/chatgpt.png"},
  {"src": "img/error.jpg"},
  {"src": "img/github.png"},
  {"src": "img/mips.jpg"},
  {"src": "img/stackoverflow.png"},
  {"src": "img/tree.png"},
  {"src": "img/tutorial.png"}
]

function App() {
  //use state for cards 
  const [cards, setCards] = useState([...cardImagesArray, ...cardImagesArray]); //sets initial game to empty array
  const [turns, setTurns] = useState(0); //sets the number of turns to be 0

  // shuffles the cards
  const shuffleCards= () => {
    const shuffledCards = [...cardImagesArray, ...cardImagesArray]
      .sort(() => Math.random() - 0.5) //random function used to shuffle cards
      .map((card) => ({...card, id: Math.random()}))

    // set state for cards
    setCards(shuffledCards)
    setTurns(0)
  }

  return (
    <div className="App">

      <div className='Title'>
        <h1 className='title-text'>Comp-Sci Memory Game</h1>
        <p>By Dimitri Golyshev</p>
        <button onClick={shuffleCards} className='new-game'>New Game</button>
      </div>


      <div className="container">
            { cards.map(card =>(
              <SingleCard key={card.id} card={card}/>
            )) }
        </div>

    </div>
  );
}

export default App;

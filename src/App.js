import './App.css';
import SingleCard from './components/SingleCard'; //Card component
// import Cards from './components/Cards'; //Cards component
import { useState } from 'react';
import { useEffect } from 'react';


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
  const [cards, setCards] = useState([...cardImagesArray, ...cardImagesArray].sort(() => Math.random() - 0.5)); //sets initial game to empty array
  const [turns, setTurns] = useState(0); //sets the number of turns to be 0
  //state for card choices
  const [firstChoice, setFirstChoice] = useState(null);
  const [secondChoice, setSecondChoice] = useState(null);

  // shuffles the cards
  const shuffleCards= () => {
    const shuffledCards = [...cardImagesArray, ...cardImagesArray]
    .sort(() => Math.random() - 0.5) //random function used to shuffle cards
    .map((card) => ({...card, id: Math.random()})) //each card has random id
    
    // set state for cards
    setCards(shuffledCards)
    setTurns(0)
  }

  // handles choice
  const choiceHandler = (card) => {
    firstChoice ? setSecondChoice(card) : setFirstChoice(card);
  }

  //Compare cards based on choices from user input
  useEffect(() => {
    if (firstChoice && secondChoice) { //runs if both choices are selected
      
      if (firstChoice.src === secondChoice.src){ //if the src's of both choices are the same
        console.log("Its a match!");
        resetTurn();
      }
      else{
        console.log("Doesn't match!");
        resetTurn();
      }
    }

  }, [firstChoice, secondChoice])

  //resets a turn 
  const resetTurn = () => {
    setFirstChoice(null);
    setSecondChoice(null);
    setTurns(prevTurns => prevTurns+1);
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
              <SingleCard 
                key={card.id} 
                card={card}
                choiceHandler={choiceHandler}
              />
            )) }
        </div>

    </div>
  );
}

export default App;

import './App.css';
import SingleCard from './components/SingleCard'; //Card component
import { useState } from 'react';
import { useEffect } from 'react';


const cardImagesArray = [
  {"src": "/img/binary.png", matched: false},
  {"src": "img/chatgpt.png", matched: false},
  {"src": "img/error.png", matched: false},
  {"src": "img/github.png", matched: false},
  {"src": "img/mips.png", matched: false},
  {"src": "img/stackoverflow.png", matched: false},
  {"src": "img/tree.png", matched: false},
  {"src": "img/tutorial.png", matched: false}
]

function App() {
  //use state for cards 
  const [cards, setCards] = useState([]); //sets initial game to empty array
  const [turns, setTurns] = useState(0); //sets the number of turns to be 0
  //state for card choices
  const [firstChoice, setFirstChoice] = useState(null);
  const [secondChoice, setSecondChoice] = useState(null);
  //state for disabled
  const [disabled, setDisabled] = useState(false);
  const [completed, setCompleted] = useState(false);

  // shuffles the cards
  const shuffleCards= () => {
    const shuffledCards = [...cardImagesArray, ...cardImagesArray]
    .sort(() => Math.random() - 0.5) //random function used to shuffle cards
    .map((card) => ({...card, id: Math.random()})) //each card has random id
    
    // set state for cards
    setFirstChoice(null); //resets the number of choices made after each shuffle
    setSecondChoice(null);
    setCards(shuffledCards); 
    setTurns(0); //resets the number of turns to 0 after each game
    setCompleted(false); //reset completed case
  }

  // handles choice
  const choiceHandler = (card) => {
    firstChoice ? setSecondChoice(card) : setFirstChoice(card);
  }

  //Compare cards based on choices from user input
  useEffect(() => {
    if (firstChoice && secondChoice) { //runs if both choices are selected
      
      setDisabled(true); //all other cards are true once two choices are made
      
      
      if (firstChoice.src === secondChoice.src){ //if the src's of both choices are the same
        if (firstChoice.id !== secondChoice.id){
          //new card array
          setCards(prevCards => {
            return prevCards.map(card => {
              //if the card passed in is equal to either card, set card's matched property to true
              if (card.src === firstChoice.src){
                return {...card, matched: true};
              }
              else{
                return card;
              }
            })
          })
        }
          resetTurn();
        }
        else{
          setTimeout(() => resetTurn(), 1000);
        }
    }
    //alerts the user when the game is completed
    if (!completed){
      const completedGame = cards.every(card => card.matched === true);
      if (completedGame){ //only trigger alert when game is completed and not during initial render
        setCompleted(true);
      }
    }
    }, [firstChoice, secondChoice, cards, completed])
    
  //resets a turn 
  const resetTurn = () => {
    setFirstChoice(null);
    setSecondChoice(null);
    setTurns(prevTurns => prevTurns+1); //increments the turns by 1 each reset
    setDisabled(false); //disabled is false after the turn is done
  }

  //starts a game immediately at a refresh 
  useEffect(() => {
    shuffleCards();
  }, [])

  return (
    <div className="App">

      <div className='Title'>
        <h1 className='title-text'>Comp-Sci Memory Game</h1>
        <p>By Dimitri Golyshev</p>
        <button onClick={shuffleCards} className='new-game'>New Game</button>
        <p>{turns}</p>
      </div>

        {completed && (
        <div className="completed-message">
          <h2>Game Completed!</h2>
        </div>
        )}

      <div className="container">
        { cards.map(card =>(
          <SingleCard 
            key={card.id}
            card={card}
            choiceHandler={choiceHandler}
            flipped={card.matched || card === firstChoice || card === secondChoice}
            disabled={disabled}
          />
        )) }
      </div>



    </div>
  );
}

export default App;

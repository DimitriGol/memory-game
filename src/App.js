import './App.css';
import { useState } from 'react';

//Array of all the card images
const cardImagesArray = [
  { "src": "img/binary.png"},
  { "src": "img/chatgpt.png"},
  { "src": "img/error.jpg"},
  { "src": "img/github.png"},
  { "src": "img/mips.jpg"},
  { "src": "img/stackoverflow.png"},
  { "src": "img/tree.png"},
  { "src": "img/tutorial.png"}
]

function App() {
  //use state for cards 
  const [cards, setCards] = useState([]);

  //shuffles the cards
  const shufleCards= () => {
    const shuffledCards = [...cardImagesArray, ...cardImagesArray]
      .sort(() => Math.random() - 0.5) //random function used to shuffle cards
      .map((card) => ({...card, id: Math.random() - 0.5}))

    //set state for cards
    setCards(shuffledCards)
  }
  console.log(cards);
  
  return (
    <div className="App">
      <div className='Title'>
        <h1 className='title-text'>Comp-Sci Memory Game</h1>
        <p>By Dimitri Golyshev</p>
        <button className='new-game'>New Game</button>
      </div>
      <div className='container'>
        {/*cards will be displayed in here */}
      </div>
    </div>
  );
}

export default App;

import './App.css';

//Array of all the card images
const cardImages = [
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
  return (
    <div className="App">
      <div className='Title'>
        <h1 className='title-text'>Comp-Sci Memory Game</h1>
        <p>By Dimitri Golyshev</p>
        <button className='new-game'>New Game</button>
      </div>
      <div className='container'>
        /* cards will be displayed in here */
      </div>
    </div>
  );
}

export default App;

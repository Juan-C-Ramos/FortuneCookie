import { useState } from 'react';
import './App.css';
import arrPhrases from './utils/pharases.json';
import getRandom from './js/getRandom.js';
import Pharase from'./components/Phrase.jsx';
import BottonPhrase from './components/BottonPhrase.jsx';

function App() {

  const [phrase, setPharase] = useState(getRandom(arrPhrases));
  const [fondo, setFondo] = useState(getRandom([1,2,3,4]));
  
  const objStyles = {
    backgroundImage: `url(../public/backgrounds/fondo${fondo}.jpg)`
  };
  
  return (
    <div className='app' style={objStyles}>
      <h1>Galletas de la suerte</h1>
      
      <Pharase phrase ={phrase}></Pharase>
      <BottonPhrase setPharase = {setPharase} setFondo = {setFondo}
      ></BottonPhrase>
     </div>
    

  )
}

export default App

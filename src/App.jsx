import { useState } from 'react';
import './App.css';
import arrPhrases from './utils/pharases.json';
import getRandom from './js/getRandom.js';
import Pharase from'./components/Phrase.jsx';
import BottonPhrase from './components/BottonPhrase.jsx';
import arrBackgrounds from "./utils/backgrounds.json" 
function App() {

  const [phrase, setPharase] = useState(getRandom(arrPhrases));
  const [img, setImg] = useState(getRandom(arrBackgrounds));
  const app = "app";
  
 /* const objStyles = {
    backgroundImage: `url(../public/assets/fondo${img}.jpg)`
  };
  */
  return (
    <div className={img + " " + app} /*style={objStyles}*/>
      <h1>Galletas de la suerte</h1>
      
      <Pharase phrase ={phrase}></Pharase>
      <BottonPhrase setPharase = {setPharase} setImg = {setImg} img = {img}></BottonPhrase>
     </div>
  )
}

export default App

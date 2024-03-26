import arrPhrase from "../utils/pharases.json"
import getRandom from "../js/getRandom.js"

const BottonPhrase = ({setPharase, setFondo}) => {

  const handleClick = () => {
    setFondo(getRandom([1,2,3,4]));
    const leftCookie = document.getElementsByClassName("left");
    const rigthCookie = document.getElementsByClassName("rigth");
    const textAnimate = document.getElementsByClassName("text");

    textAnimate[0].classList.toggle("animationText");
    leftCookie[0].classList.toggle("animationLeft");
    rigthCookie[0].classList.toggle("animationRight");

    setTimeout(() => {
      setPharase(getRandom(arrPhrase));
      console.log("2.5 seg esperando")
    }, 2500);

    setTimeout(() => {
        leftCookie[0].classList.toggle("animationLeft");
        rigthCookie[0].classList.toggle("animationRight");
        textAnimate[0].classList.toggle("animationText");
        console.log("5 Segundo esperado")
    }, 5000);
  }

  return <button className="buttonRandom" onClick={handleClick}>
    Probar suerte    
  </button>
}

export default BottonPhrase
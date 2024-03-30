import arrPhrase from "../utils/pharases.json"
import getRandom from "../js/getRandom.js"
import arrBackgrounds from "../utils/backgrounds.json"

const BottonPhrase = ({setPharase, setImg, img}) => {

  const handleClick = () => {
    const appBgr=document.getElementsByClassName("app")

    appBgr[0].classList.toggle(img);
    setImg(getRandom(arrBackgrounds));
    appBgr[0].classList.toggle(img);    
    
    const leftCookie = document.getElementsByClassName("left");
    const rigthCookie = document.getElementsByClassName("rigth");
    const textAnimate = document.getElementsByClassName("text");

    textAnimate[0].classList.toggle("animationText");
    leftCookie[0].classList.toggle("animationLeft");
    rigthCookie[0].classList.toggle("animationRight");

    setTimeout(() => {
      setPharase(getRandom(arrPhrase));
      console.log("2.5 seg esperando")
    }, 1250);

    setTimeout(() => {
        leftCookie[0].classList.toggle("animationLeft");
        rigthCookie[0].classList.toggle("animationRight");
        textAnimate[0].classList.toggle("animationText");
        console.log("5 Segundo esperado")
    }, 2500);
  }

  return <button className="buttonRandom" onClick={handleClick}>
    Probar suerte    
  </button>
}

export default BottonPhrase

import { useCallback, useEffect, useState } from "react";
import './worddisplay.css'

let timeout;
let interval;

export default function GameNumberDisplay({words15Array, hideWordDisplayAndShowWordButtons}) {
  //console.log("wordsdisplayArray", words15Array)
  const [n, setN] = useState(0);
  const [hidden, setHidden] = useState(false);
  
  const rotateWords = useCallback(() => {
    setN((prevN) => {
      let nextN = prevN + 1;
      
      if (nextN >= words15Array.length) {
        nextN = 0;
        //randomNumberArray = []
        // clearInterval(interval);
        // clearTimeout(timeout);
        hideWordDisplayAndShowWordButtons()
      }
      return nextN;
    });
    setTimeout(() => {
      setHidden(true);
    }, 20);
  }, []);

  useEffect(() => {
    //console.log("randomNumberArray in Number display Component", words15Array)
    interval = setInterval(() => {
      setHidden(false);
      rotateWords();
      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }, 25);

    setTimeout(() => {
      setHidden(true);
    }, 20);
  }, [rotateWords]);

  return (
    <>
      <h1>Remember these 15 words:</h1>
      <div className="worddisplay__random-word-display">{!hidden && words15Array[n]}</div>
    </>
  )
}

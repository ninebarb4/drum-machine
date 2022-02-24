import React, { useEffect } from 'react';


export default function KeypadKey(props) {
    //am I adding event lsitener for each keypadKey compononent?


    const handleKeydown = (event) => {
        if(event.keyCode === props.bankElement.keyCode){
            console.log("you clicked key:", event.keyCode);
            props.playAudio(props.bankElement.keyTrigger);
            props.setSoundText(props.bankElement.id);
        }
        
    }

   useEffect (() => {
        document.addEventListener('keydown', handleKeydown)
        //do I need to add event listener clean ups?
    }, []);

  return (
    <button className="drum-pad" id={props.bankElement.id} onClick={() => props.playAudio(props.bankElement.keyTrigger)}>{props.bankElement.keyTrigger}
                <audio src={props.bankElement.url} className="clip" id={props.bankElement.keyTrigger}></audio>
    </button>
    )
}




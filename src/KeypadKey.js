import React from 'react';

export default function KeypadKey(props) {
  return (
    <button className="drum-pad" id={props.bankElement.id} onClick={() => props.playAudio(props.bankElement.keyTrigger)}>{props.bankElement.keyTrigger}
                <audio src={props.bankElement.url} className="clip" id={props.bankElement.keyTrigger}></audio>
    </button>
    )
}




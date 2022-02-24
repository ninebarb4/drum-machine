import React from 'react';
import './appWrapper.css';
import DrumPad from './DrumPad';


export default function DrumMachine(props) {
    return (
        <div id="drum-machine">
            <DrumPad setSoundText={props.setSoundText} playAudio={props.playAudio}/>
            <div id="display">
                {props.soundText}
            </div>
        </div>
    )
}



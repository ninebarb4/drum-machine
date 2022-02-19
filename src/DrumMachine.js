import React from 'react';
import './appWrapper.css';
import DrumPad from './DrumPad';


export default function DrumMachine(props) {
    return (
        <div id="drum-machine">
            <DrumPad playAudio={props.playAudio}/>
            <div id="display">
            </div>
        </div>
    )
}



import React from 'react';
import './appWrapper.css';
import DrumPad from './DrumPad';


export default function DrumMachine() {
    return (
        <div id="drum-machine">
            <DrumPad />
            <div id="display">
            </div>
        </div>
    )
}



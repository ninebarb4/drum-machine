import React from 'react';
import './appWrapper.css';
import DrumPad from './DrumPad';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import BankSwitch from './BankSwitch';


export default function DrumMachine(props) {
    return (
        <div id="drum-machine">
            <DrumPad setSoundText={props.setSoundText} playAudio={props.playAudio}/>
            <div id="display">
                {props.soundText}
            </div>
            <div>
                <BankSwitch />
            </div>
        </div>
    )
}



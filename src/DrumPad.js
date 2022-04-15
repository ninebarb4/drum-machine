import React, { useState } from 'react';
import KeypadKey from './KeypadKey';
import './drumPad.css';


export default function DrumPad(props) {
  //loop over selected sound bank and map a keyPadKey component
  return (
  <div id="drum-pad-wrapper">
    {props.bank.map(bankElement => {
          return <KeypadKey setSoundText={props.setSoundText} setbank={props.setBank} bankElement={bankElement} playAudio={props.playAudio}/>
        })}
    </div>
    )
}



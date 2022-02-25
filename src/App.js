//import './App.css';
import React, { useState } from 'react';
import DrumMachine from './DrumMachine';
import ReactFCCtest from 'react-fcctest';

function App() {

  const [soundText, setSoundText] = useState(" ");

  //function takes in the key (id of audio element which is set to keytrigger property from the array of objects)
  //and also the text of the sound (this is the id property from the array of objects) 
  const playAudio = (key, text) => {
    
    const audioElement = document.getElementById(key);
    //first we reset time of audio clip to zero so you can repeat click and continuously and restart the clip
    audioElement.currentTime = 0;
    audioElement.play();
    //also update the display text
    setSoundText(text);

  }

  return (
    <div>
      <ReactFCCtest />
      <DrumMachine setSoundText={setSoundText} soundText={soundText} playAudio={playAudio}/>
    </div>
  );
}

export default App;

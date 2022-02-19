//import './App.css';
import DrumMachine from './DrumMachine';
import ReactFCCtest from 'react-fcctest';

function App() {

  const playAudio = (key) => {
    console.log("you clicked me");
    console.log("key is:", key);
    const audioElement = document.getElementById(key);
    console.log("audioElement is:", audioElement);
    //audioElement.currentTime = 0;
    audioElement.play();

  }

  return (
    <div>
      <ReactFCCtest />
      <DrumMachine playAudio={playAudio}/>
    </div>
  );
}

export default App;

//import './App.css';
import DrumMachine from './DrumMachine';
import ReactFCCtest from 'react-fcctest';

function App() {

  const playAudio = (key) => {
    console.log("you clicked me")

  }
  return (
    <div>
      <ReactFCCtest />
      <DrumMachine playAudio={playAudio}/>
    </div>
  );
}

export default App;

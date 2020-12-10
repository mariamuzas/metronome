import IntervalSelector from "../components/IntervalSelector.js"
import SoundSelector from "../components/SoundSelector.js"
import {useState, useEffect} from 'react';
import '../App.css';

function MetronomeContainer({sounds}) {

    const[intervalId, setIntervalId] = useState(0);
    const[sound, setSound] = useState();
    const[bpm, setBpm] = useState(40);
    const[isPlaying, setIsPlaying] = useState(false);

    
    useEffect( () => {
        if (!isPlaying) return;
        stop();
        start();
    },[bpm, sound])

    function playSound() {
        const snd = new Audio(sound);  
        snd.play();
        flashText();
    };
    
    function start() {
        setIntervalId(setInterval(playSound, 60000/bpm));
        setIsPlaying(true);
    };
    
    function stop() {
        clearInterval(intervalId);
        setIsPlaying(false);
    };

    function handleSoundChange(event){
        setSound(event.target.value);
    };

    function handleIntervalChange(event){
        setBpm(event.target.value);
    };

    function handleStartStop() {
       isPlaying ? stop(): start()
    };
    
    function flashText() {
        if (sound ) {
            var oElem = document.getElementById('bpmColour');
            oElem.style.backgroundColor = oElem.style.backgroundColor == 'navy' ? '#ADEFD1FF' : 'navy';
            oElem.style.color = oElem.style.color == 'silver' ? 'navy' : 'silver';
        }
    };

    return(
        <>
            <p id='bpmColour'>{bpm}bpm</p>
            <div>
            <IntervalSelector handleIntervalChange={handleIntervalChange} />
            <br/>
            <button onClick={handleStartStop}>{isPlaying && sound ? "Stop" : "Start"}</button>
            <br/>
            <SoundSelector sounds={sounds} handleSoundChange={handleSoundChange}/>
            </div>
        </>
    );
    
};
export default MetronomeContainer;
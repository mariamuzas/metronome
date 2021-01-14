import '../App.css';

function SoundSelector(props) {

    return(
        <>
        <select onChange= {props.handleSoundChange}>
            <option selected disabled> Select sound... </option>
            {props.sounds.map(sound => {
                return <option kew = {sound.name} value={sound.url}> {sound.name} </option>
            })}
        </select>
        </>
    );
};
export default SoundSelector;
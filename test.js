const audioContext = new AudioContext();

const audio = new Audio("./audio/marques.mp3");
const track = audioContext.createMediaElementSource(audio);

track.connect(audioContext.destination);

const playButton = document.getElementById("play");
console.log(audioContext);

playButton.addEventListener("click", ()=>{
    if(audioContext.state === "suspended"){
        audioContext.resume();
    }

    if(playButton.dataset.playing === "false"){
        audio.play();
        playButton.dataset.playing = "true";
    }
    else if (playButton.dataset.playing === "true") {
        audio.pause();
        playButton.dataset.playing = "false";
    }
    console.log(audioContext)
    console.log(playButton);
}, false,);

audio.addEventListener("ended", ()=> {
    playButton.dataset.playing = "false";
}, false);

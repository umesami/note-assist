const audioContext = new AudioContext();

const audio = new Audio("./audio/marques.mp3");
const track = audioContext.createMediaElementSource(audio);


let mediaRecorder;
let audioChunks = [];
let isRecording = false;

//DOM elements and adding action listeners to buttons
const startButton = document.getElementById("start-btn")
const stopButton = document.getElementById("stop-btn")

//Div to display transcribed data
const transcriptionDiv = document.getElementById("transcription")

//backend url to send audio chunks to the backend
const backendURL = ""

async function checkMicrophonePermission(){
    try {
        const permissionStatus = await navigator.permissions.query({name: "microphone"})

        if(permissionStatus.state === "denied"){
            transcriptionDiv.textContent = "Microphone access denied. Please enable it in your browser settings"
        }
        else{
            transcriptionDiv.textContent = "Microphone permissions already granted"
        }
    } catch (error) {
        console.error("Error checking microphone permissions", error)
    }
}

startButton.addEventListener("click", async () => {
    try{
        const stream = await navigator.mediaDevices.getUserMedia({audio : true})
        transcriptionDiv.textContent = "Recording started.."
        isRecording = true;

        mediaRecorder = new MediaRecorder(stream)

        mediaRecorder.ondataavailable = (event) => {
            if(isRecording){
                audioChunks.push(event.data)
                sendAudioToBackend(event.data)
            }
        }

        mediaRecorder.start(1000)
        startButton.disabled = true;
        stopButton.disabled = false;

    }catch (error){
        console.error("Error accessing microphone:", error);
        transcriptionDiv.textContent = "Failed to access microphone"
    }
})


function sendAudioToBackend(audioChunks){
    
}
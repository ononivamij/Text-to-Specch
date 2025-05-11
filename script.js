// create a function
function textToAudio(){

    let message = document.querySelector(".text").value;
    let speech = new SpeechSynthesisUtterance();

    speech.lang = "en-US";
    speech.text = message;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    speechSynthesis.speak(speech);

}
let speech = new SpeechSynthesisUtterance();

let voices = [];

let btn = document.querySelector(".btn");
let textInput = document.querySelector("#textInput");
let voiceSelect = document.querySelector('#selectBar');


window.speechSynthesis.onvoiceschanged = ()=>{
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    
    voices.forEach((voice ,i)=> 
        (voiceSelect.options[i] = new Option(voice.name, i))
        
    );
};

voiceSelect.addEventListener('change',()=>{
    speech.voice = voices[voiceSelect.value]
})



btn.addEventListener("click",()=>{
   
    speech.text = textInput.value;
    window.speechSynthesis.speak(speech);
})
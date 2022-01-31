const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

//
const greetings = [
    'Im good sweetheart',
    'Awesome! How about you?',
    'leave me alone',
    'just shut up and mind your business',
    'what was that?'
]

const identity = [
    'Why do you care?',
    'I dont know',
    'Same as yours',
    'Im a computer, I dont have a name you dumbass'
]

const rude = [
    'This is how I am, deal with it',
    'I learned it from you',
    'This is how I am, what are you going to do about it?'
]

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function() {
    console.log('voice is acivated, you can speak to microphone');
};

recognition.onresult = function(event) {
    //console.log(event);
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
};

//add listener to the btn

btn.addEventListener('click', () => {
    recognition.start();
});

function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();

    speech.text = 'I dont know what to say';

    if(message.includes('how are you')){
        const finalText1 = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText1;
    }

    if(message.includes('name')){
        const finalText2 = identity[Math.floor(Math.random() * identity.length)];
        speech.text = finalText2;
    }

    if(message.includes('mean')){
        const finalText3 = rude[Math.floor(Math.random() * rude.length)];
        speech.text = finalText3;
    }
    //speech.text = message;
    
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}
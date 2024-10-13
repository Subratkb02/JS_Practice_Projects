const texts = document.querySelector('.texts');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

let p = document.createElement('p');

recognition.addEventListener('result', (e) => {
    texts.appendChild(p);
    const text = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');
    p.innerText = text;
    if(e.result[0].isFinal){
        if(text.includes('hello')){
            p = document.createElement('p');
            p.innerText = 'Hi';
            texts.appendChild(p);
        }
        if(text.includes('how are you')){
            p = document.createElement('p');
            p.innerText = 'I am good, thanks for asking';
            texts.appendChild(p);
        }
        if(text.includes('what is your name')){
            p = document.createElement('p');
            p.innerText = 'I am a speech recognition program';
            texts.appendChild(p);
        }
        p = document.createElement('p');
    }
});

recognition.addEventListener('end', () => {
    recognition.start();
})

recognition.start

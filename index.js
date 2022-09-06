const textarea = document.getElementById('textarea');
const written = document.querySelector('.written');
const remaining = document.querySelector('.remaining');
const button = document.querySelector('.btn');
const messageContainer = document.querySelector('.message-container');
const container = document.querySelector('.container');
const write = document.querySelector('.write');
const body = document.querySelector('body');
let textareaval = textarea.value;

textarea.addEventListener('keyup', ()=>{
    countTheCharacters();
    
})
countTheCharacters();

function countTheCharacters(){
    written.textContent = `Written: ${textarea.value.length}`;
    remaining.textContent = `Remainig: ${textarea.getAttribute('maxLength') - textarea.value.length}`
}


button.addEventListener('click', ()=>{
    const message = document.createElement('p');
    message.classList.add('para');
    message.textContent = textarea.value;
    if(!textarea.value){
        alert('No message. Kindly write your message.')
    }
    else{
        messageContainer.appendChild(message);
        
        container.classList.add('hide');
        messageContainer.classList.remove('blur');

    }
   

    
    setBackToDefault();
    });

write.addEventListener('click', ()=>{
    messageContainer.classList.add('blur');
    container.classList.remove('hide');
})

function localStorage(){
    localStorage.setItem('messages', JSON.stringify(messages));
}

function setBackToDefault(){
    textarea.value = '';
    written.textContent = 'Written: 0';
    remaining.textContent = 'Remaining: 100';
}

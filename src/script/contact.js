const nameInput = document.getElementById('name')
const mail = document.getElementById('mail')
const phone = document.getElementById('phone')
const textArea = document.getElementById('textArea')
const buttonSend = document.getElementById('buttonSend')

buttonSend.addEventListener('click', receiveData)
function receiveData(){
    console.log(nameInput.value);
    console.log(mail.value);
    console.log(phone.value);
    console.log(textArea.value);
    console.log(buttonSend.value);
}
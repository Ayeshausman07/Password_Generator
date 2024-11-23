
const passwordField = document.getElementById('password')
const passwordLength = 12
const copiedMessage = document.getElementById('copiedMessage')

const capAlphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const smallAlphabets = 'abcdefghijklmnopqrstuvwxyz'
const numbers = '0123456789'
const specialChar = '[]{}@!$%^&*()-_?'

var addAll = capAlphabets + smallAlphabets + numbers + specialChar

function createPassword(){
    let password = ""
    password += capAlphabets[Math.floor(Math.random() * capAlphabets.length)]
    password += smallAlphabets[Math.floor(Math.random() * smallAlphabets.length)]
    password += numbers[Math.floor(Math.random() * numbers.length)]
    password += specialChar[Math.floor(Math.random() * specialChar.length)]

    while(password.length < passwordLength){
        password += addAll[Math.floor(Math.random() * addAll.length)]
    }
    passwordField.value = password
    copiedMessage.style.display = 'none' // Hide message when generating a new password
}

function copyPassword(){
    passwordField.select()
    document.execCommand('copy')
    copiedMessage.style.display = 'block' // Show the copied message
    setTimeout(() => {
        copiedMessage.style.display = 'none'; // Hide after 2 seconds
    }, 2000);
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('date').textContent = new Date().getFullYear();
});

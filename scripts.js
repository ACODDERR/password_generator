const generateButton = document.getElementById('generate');
const copyButton = document.getElementById('copy');
const passwordField = document.getElementById('password');
const lengthField = document.getElementById('length');
const includeLetters = document.getElementById('includeLetters');
const includeNumbers = document.getElementById('includeNumbers');
const includeSpecial = document.getElementById('includeSpecial');

const charset = {
    letters: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers: '0123456789',
    special: '!@#$%^&*()_+'
};

generateButton.addEventListener('click', generatePassword);
copyButton.addEventListener('click', copyToClipboard);

function generatePassword() {
    const passwordLength = parseInt(lengthField.value);

    if (passwordLength < 4 || passwordLength > 30) {
        alert('Password length must be between 4 and 30 characters.');
        return;
    }

    let characters = '';
    if (includeLetters.checked) characters += charset.letters;
    if (includeNumbers.checked) characters += charset.numbers;
    if (includeSpecial.checked) characters += charset.special;

    if (characters === '') {
        alert('Please select at least one option.');
        return;
    }

    let password = '';
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters.charAt(randomIndex);
    }

    passwordField.value = password;
}

function copyToClipboard() {
    const passwordTextArea = document.getElementById('password');

    if (passwordTextArea.value === '') {
        alert('Nothing to copy.');
        return;
    }

    passwordTextArea.select();
    document.execCommand('copy');
    alert('Password copied to clipboard!');
}

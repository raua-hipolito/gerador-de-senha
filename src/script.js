const sliderElement = document.querySelector('#slider');
const buttonElement = document.querySelector('#button');

const sizePassword = document.querySelector('#valor');
const passWord = document.querySelector('#password');

const containerPassword = document.querySelector('#container-password');

const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@';
let novaSenha = '';

sizePassword.innerHTML = sliderElement.value;

sliderElement.addEventListener('input', (event) => {
  sizePassword.innerHTML = event.target.value;
});

function generatePassword() {
  let pass = '';

  for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
    pass += charset.charAt(Math.floor(Math.random() * n));
  }
  containerPassword.classList.remove('hide');
  passWord.innerHTML = pass;
  novaSenha = pass;
}
generatePassword();

function copyPassword() {
  alert('Senha copiada com sucesso!');
  navigator.clipboard.writeText(novaSenha);
}
copyPassword();

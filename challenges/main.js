const phoneNumber = document.querySelector('[data-phone-number]');
const numericKeys = document.querySelectorAll('[data-numeric-key]');

console.log(numericKeys);

numericKeys.forEach((key) => {
  key.addEventListener('click', () => {
    addCharToPhoneNumber(key.value);
  })
})

function addCharToPhoneNumber(character) {
  phoneNumber.value = phoneNumber.value + character;
}

import './styles.css'

const contentInput = document.querySelector('#content-input')
const content = document.querySelector('#content')
content.innerHTML = contentInput.value
contentInput.addEventListener("input", function(e) {
  content.innerHTML = e.target.value;
});
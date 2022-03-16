import './styles.css'

const contentInput = document.querySelector('#content-input')
const content = document.querySelector('#content')
content.innerHTML = contentInput.value
contentInput.addEventListener("input", function(e) {
  content.innerHTML = e.target.value;
});

const root = document.querySelector(':root')
root.style.setProperty('--bottom-bar-height', '90px')

const collapseBtn = document.querySelector('#collapse-btn')
const bottomBar = document.querySelector('#bottom-bar')
collapseBtn.addEventListener("click", () => {
  root.style.setProperty('--bottom-bar-height', root.style.getPropertyValue('--bottom-bar-height') === '90px' ? '20px' : '90px')
})
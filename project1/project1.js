const toggle = document.querySelector('.toggle');
const body = document.querySelector('body');

toggle.addEventListener('click',() => toggle.classList.toggle("active"));

toggle.addEventListener('click',()=> {
    document.body.classList.toggle("darkMode");
})

const toggle = document.getElementById('toogle');
const slideBar = document.querySelector('.slidebar');
const swipe = document.querySelector('.swipe');
const slidebarHeader = document.querySelector('.slidebarHeader'); 
const content2 = document.querySelector('.content2'); 
const content = document.querySelector('.content');

toggle.addEventListener('click',()=> toggle.classList.toggle('on'));
toggle.addEventListener('click',()=> content.classList.toggle('dark'));




swipe.addEventListener('click',()=>{
    slideBar.classList.toggle('hide');
    slidebarHeader.classList.toggle('change');
    content2.classList.toggle('space');
   
    

if(slideBar.classList.contains('hide')){
    
    document.getElementById('text').placeholder= "";
    
}    
else{
    document.getElementById('text').placeholder= "Search...";
}

})


swipe.addEventListener('click',()=> swipe.classList.toggle('shift'))
    

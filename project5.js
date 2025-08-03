// const redBtn = document.querySelectorAll('.redBtn');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn2B = document.querySelector('#btn2B');
const inputBox = document.querySelector('#inputBox');
const inputBoxB = document.querySelector('#inputBoxB');
const questionBar = document.querySelectorAll('.questionBar');
const ansBlock = document.querySelectorAll('.ans');
const select1 = document.querySelector('.select1');
const languagesA = document.querySelector('.languagesA');
const languageB = document.querySelector('.languageB');
const languageC = document.querySelector('.languageC');
const select2 = document.querySelector('.select2');
const languages = document.querySelector('.languages');
const language1 = document.querySelector('.language1');
const language2 = document.querySelector('.language2');







var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });




  
btn1.addEventListener('mousedown',()=>{
    btn1.classList.add("clicked");
  });
  
  btn1.addEventListener('mouseup',()=>{
    btn1.classList.remove("clicked");
  });


  btn2.addEventListener('mousedown',()=>{
    btn2.classList.add("clicked");
  });
  
  btn2.addEventListener('mouseup',()=>{
    btn2.classList.remove("clicked");
  });


  btn2B.addEventListener('mousedown',()=>{
    btn2B.classList.add("clicked");
  });
  
  btn2B.addEventListener('mouseup',()=>{
    btn2B.classList.remove("clicked");
  });
  
  










  btn2.addEventListener('click',()=>{
    console.log(inputBox.value);
    inputBox.value= "";
})

btn2B.addEventListener('click',()=>{
    console.log(inputBoxB.value);
    inputBoxB.value= "";
})





questionBar.forEach((questionBar,index)=>{
  const ans = ansBlock[index];
  const addIcon = questionBar.querySelector('.ri-add-large-line');
  const textAns1 = ans.querySelector('.textAns1');
  const textAns2 = ans.querySelector('.textAns2');
  
  
  questionBar.addEventListener('click',()=>{
    addIcon.classList.toggle("hide1")
       ans.classList.toggle("hide2")
       textAns1.classList.toggle("hide3")
       textAns2.classList.toggle("hide4")
  })
})


select2.addEventListener('click',()=>{
  languages.classList.toggle('active')
})

language1.addEventListener('click',()=>{
  languages.classList.toggle('active')
})

language2.addEventListener('click',()=>{
  languages.classList.toggle('active')
})




language2.addEventListener('mouseenter',()=>{
  language1.classList.remove('active');
})

language2.addEventListener('mouseleave',()=>{
  language1.classList.add('active');
})







select1.addEventListener('click',()=>{
  languagesA.classList.toggle('active')
})

languageB.addEventListener('click',()=>{
  languagesA.classList.toggle('active')
})

languageC.addEventListener('click',()=>{
  languagesA.classList.toggle('active')
})




languageC.addEventListener('mouseenter',()=>{
  languageB.classList.remove('active');
})

languageC.addEventListener('mouseleave',()=>{
  languageB.classList.add('active');
})
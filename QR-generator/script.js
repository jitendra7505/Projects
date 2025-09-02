let inputBar = document.querySelector('.inputBar');
let qrImg = document.getElementById('qrImg');
const generBtn = document.querySelector('.generBtn');


 function callQr() {
    
    qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputBar.value;
    
}

generBtn.addEventListener('click',()=>{
    if(inputBar.value.trim() === "")
    {
        alert("Enter any text!")
    }
    else{
        callQr()
    }
})





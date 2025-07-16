
const buttons = document.querySelectorAll('.button');
let String = "";
         

buttons.forEach(buttons => {
    buttons.addEventListener('click',(e)=>{
        
    const check = e.target.innerHTML;
    const display = document.querySelector('#display');        
        
    
    if(check === '=')
        {
           String = eval(String);
           document.querySelector('#display').value = String;
        }

        else if(check == 'AC'){
            String = '';
            document.querySelector('#display').value = String;

        }
        else if(check == 'C'){
            // display.value = display.value.slice(0,-1);
            String = String.slice(0,-1);
            display.value = String;

        }

        else if(String == '' && check == '+' || String == '' && check == '-' || String == '' && check == '*' || String == '' && check == '/' || String == '' && check == '%')
        {
            alert("Invalid formate!");
        }
                 
        else {

            String += check;    
            document.querySelector('#display').value = String;
        }
    })
    
    
    
});




    
    
    







const buttons = document.querySelectorAll('.button')
const seatLeft = document.getElementById('seat-left')
let seatAvailable = 40;
seatLeft.innerText= seatAvailable
let check = 0;

for (const button of buttons){
    button.addEventListener('click',function(){
        if(check >= 4){
            alert('you cant select more than 4 seats')
            
        }


        if(check === 4){
            disableAllButtons()
        }
        button.style.background = '#1DD100'
        button.style.color = 'white'
        check++
        seatAvailable--
        seatLeft.innerText = seatAvailable
       
        
        
        
        
     
    })
}




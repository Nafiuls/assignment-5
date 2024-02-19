
const phoneNumber = document.getElementById('phone-number')
phoneNumber.addEventListener('keyup',function(){
    const number = phoneNumber.value
    const submitButton = document.getElementById('submit-button')
    if(number !== ''){
    submitButton.removeAttribute('disabled')    
    }
    else{
        submitButton.setAttribute('disabled',true)
        
    }
})


const nextButton = document.getElementById('submit-button').addEventListener('click',function(){
    const boss = document.getElementById('boss')
    const modal = document.getElementById('modal')
    boss.classList.add('hidden')
    modal.classList.remove('hidden')
})

const continueButton = document.getElementById('continue')
continueButton.addEventListener('click',function(){
    const boss = document.getElementById('boss')
    const modal = document.getElementById('modal')
    boss.classList.remove('hidden')
    modal.classList.add('hidden')
    location.reload();

})



   


    

    



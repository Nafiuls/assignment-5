


const buttons = document.querySelectorAll('.button')
const seatLeft = document.getElementById('seat-left')
let seatAvailable = 40;
seatLeft.innerText = seatAvailable
let check = 0;
// selected seats
const seats = document.getElementById('selected-seats');
let selectedSeats = 0
seats.innerText = selectedSeats
// adding elements
const addP = document.getElementById('add-p')
const addClass = document.getElementById('add-class')
const addPrice = document.getElementById('add-price')
const couponSection = document.getElementById('coupon-section')
const perTicket = 550
let ticketNumbers = 0
let totalPrice = 0
let discount = 0
let grandTotal = 0
const total = document.getElementById('total')
let discountedTotal = document.getElementById('grand-total')





for (const button of buttons) {
    button.addEventListener('click', function () {
        button.setAttribute('disabled',true)
      
        if (check >= 4) {
            alert('you cant select more than 4 seats')

        }


        if (check === 4) {
            disableAllButtons()
        }
        button.style.background = '#1DD100'
        button.style.color = 'white'
        check++
        seatAvailable--
        seatLeft.innerText = seatAvailable
        seats.classList.remove('hidden')

        selectedSeats++
        seats.innerText = selectedSeats

        const p1 = document.createElement('p')
        const p2 = document.createElement('p')
        const p3 = document.createElement('p')
        p1.innerText = button.innerText
        p2.innerText = 'Economy'
        p3.innerText = '550'
        addP.appendChild(p1)
        addClass.appendChild(p2)
        addPrice.appendChild(p3)
        ticketNumbers++
        totalPrice = perTicket*ticketNumbers
        total.innerText = totalPrice
       
    
        


    })
}

// discount related and coupon related

const couponInput = document.getElementById('coupon-input')
const couponButton = document.getElementById('apply-button')

couponButton.addEventListener('click',function(){
    let input = couponInput.value.toUpperCase()
    if(check === 4){
        couponButton.removeAttribute('disabled')
        if(input === "NEW15"){
            discount = totalPrice * 15 / 100
            grandTotal = totalPrice - discount
            couponInput.classList.add('hidden')
            couponButton.classList.add('hidden')
            couponSection.innerText = 'Congratulations You got an 15% discount'
            discountedTotal.innerText = grandTotal
        }
        
        else {if(input === "COUPLE20"){
            discount = totalPrice * 20 / 100
            grandTotal = totalPrice - discount
            couponInput.classList.add('hidden')
            couponButton.classList.add('hidden')
            couponSection.innerText = 'Congratulations You got an 20% discount'
            discountedTotal.innerText
             = grandTotal
        }
     
        else{
            alert('invalid coupon')
        }
        }
        
          
      
    }
    else{
        couponButton.removeAttribute('disabled',true)
        alert('You have to buy 4 tickets to use this Coupon')
    }
})











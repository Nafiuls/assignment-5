


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
const perTicket = 550


for (const button of buttons) {
    button.addEventListener('click', function () {
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
        p3.innerText = perTicket
        addP.appendChild(p1)
        addClass.appendChild(p2)
        addPrice.appendChild(p3)
       
        


    })
}








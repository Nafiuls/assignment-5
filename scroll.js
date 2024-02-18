const scrollButton = document.getElementById('scroll')

scrollButton.addEventListener('click',function(){
    const scrollTarget = document.getElementById('ticket-section')
    scrollTarget.scrollIntoView('ticket-section')
})


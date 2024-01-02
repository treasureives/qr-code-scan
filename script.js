'use strict';
const closeBtn = document.querySelector('span')
const qrGenerator = document.querySelector('.qr-code')
const container = document.querySelector('.container')

closeBtn.addEventListener('click', function(){
    container.classList.add('hidden')
})

qrGenerator.addEventListener('click', function(event){
    event.preventDefault();

    if (container.classList.contains('hidden')) {
        container.classList.remove('hidden')
    }
})
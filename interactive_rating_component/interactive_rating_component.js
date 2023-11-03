const btns = document.querySelectorAll(".btn");
const submit = document.querySelector('.submit');
const container = document.querySelector(".container");
const thank_you = document.querySelector(".thank-you");
const valuespan = document.querySelector('.value');
let value = 0



btns.forEach(function (rating){
    rating.addEventListener('click', function (ratingNumber) {
        let ratingValue = ratingNumber.currentTarget.classList

        if (ratingValue.contains('one')){
            value = 1
        } else if (ratingValue.contains('two')){
            value = 2
        } else if (ratingValue.contains('three')) {
            value = 3
        } else if (ratingValue.contains('four')) {
            value = 4
        } else if (ratingValue.contains('five')) {
            value = 5
        }
        valuespan.textContent = value   
    })
})

btns.forEach(function (cores){
    cores.addEventListener('click', function(corClicada){
        btns.forEach(function(cores) {
          cores.style.backgroundColor = 'hsla(216, 12%, 54%, 0.226)'
          cores.style.color = 'hsl(216, 12%, 54%)'
        })
        corClicada.currentTarget.style.backgroundColor = 'hsl(25, 97%, 53%)'
        corClicada.currentTarget.style.color = 'white'
    })
})

submit.addEventListener('click', function(){
        container.style.display = 'none';
        thank_you.style.display = 'block';
})
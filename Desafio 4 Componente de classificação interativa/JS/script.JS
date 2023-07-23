var containerMain = document.querySelector('.container');
var boxThank = document.querySelector('.thank-you')
var submit = document.querySelector('.btn-submit')
var rates = document.querySelectorAll('button.btn')
var Rating = document.querySelector('span#vote')

submit.addEventListener("click", clicar)

function clicar(){
    containerMain.classList.remove("container")
    containerMain.style.display = "none"

    boxThank.classList.add("box")
    boxThank.style.display = "flex"
}

rates.forEach((rate) => {
    rate.addEventListener("click", clicar2)
    function clicar2(){
        Rating.innerHTML = rate.innerHTML;
    }
})
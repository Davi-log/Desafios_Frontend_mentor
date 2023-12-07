const btn = document.querySelectorAll('button');


function callback(){
    close.classList.toggle('.hidden-close');
}

btn.forEach((btns) => {
    btns.addEventListener('click', callback);
})
const puriFunc = document.querySelector('.jsPuriFunc');

function init() {
    if (localStorage.getItem('name')) {
        puriFunc.classList.remove('hide');
    }
}

init();

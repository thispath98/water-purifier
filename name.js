const PuriName = document.querySelector('.jsPuriName'),
    input = document.querySelector('.jsInput'),
    clear = document.querySelector('.jsClear'),
    displayedName = document.querySelector('.jsNameDisplayer');

function registerName(event) {
    const name = input.value;
    if (!name) {
        event.preventDefault();
    } else {
        localStorage.setItem('name', name);
        input.classList.add('hide');
        displayedName.classList.remove('hide');
        clear.classList.remove('hide');
    }
}

function clearName() {
    localStorage.removeItem('name');
    location.reload();
}

function showName() {
    input.classList.add('hide');
    displayedName.classList.remove('hide');
    clear.classList.remove('hide');
    displayedName.innerHTML = localStorage.getItem('name') + ' 정수기';
}

function init() {
    const LSName = localStorage.getItem('name');
    if (LSName) {
        showName();
    }
}

PuriName.addEventListener('submit', registerName);
clear.addEventListener('click', clearName);

init();

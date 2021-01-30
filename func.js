const puriFunc = document.querySelector('.jsPuriFunc');

function handleClick(event) {
    event.preventDefault();
    const btnList = puriFunc.querySelectorAll('button');
    const btn = event.target;

    const waterTemp = {
        냉수: 'cold',
    };
    if (waterTemp[btn.innerHTML] == '냉수') {
    }
    console.log(waterTemp['냉수']);

    btnList.forEach((element) => {
        if (element.classList.contains('Activated')) {
            console.log('gi');
        }
    });

    if (btn.innerHTML === '냉수' || btn.innerHTML === '정수') {
        btn.classList.add('coldActivated');
    } else if (btn.innerHTML === '미온수' || btn.innerHTML === '온수') {
        btn.classList.add('hotActivated');
    }
}

function init() {
    if (localStorage.getItem('name')) {
        puriFunc.classList.remove('hide');
    }
}

puriFunc.addEventListener('click', handleClick);

init();

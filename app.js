/* Player 1 buttons, constants */
const p0 = {
    score: 0,
    button: document.querySelector('#p1button0'),
    display: document.querySelector('#p1Display')
}

const p1 = {
    score: 0,
    button: document.querySelector('#p1button1'),
    display: document.querySelector('#p1Display')
}
const p2 = {
    score: 0,
    button: document.querySelector('#p1button2'),
    display: document.querySelector('#p1Display')
}
const p3 = {
    score: 0,
    button: document.querySelector('#p1button3'),
    display: document.querySelector('#p1Display')
}
const p4 = {
    score: 0,
    button: document.querySelector('#p1button4'),
    display: document.querySelector('#p1Display')
}
const p5 = {
    score: 0,
    button: document.querySelector('#p1button5'),
    display: document.querySelector('#p1Display')
}
const p6 = {
    score: 0,
    button: document.querySelector('#p1button6'),
    display: document.querySelector('#p1Display')
}
const p7 = {
    score: 0,
    button: document.querySelector('#p1button7'),
    display: document.querySelector('#p1Display')
}
const p8 = {
    score: 0,
    button: document.querySelector('#p1button8'),
    display: document.querySelector('#p1Display')
}

const p9 = {
    score: 0,
    button: document.querySelector('#p1button9'),
    display: document.querySelector('#p1Display')
}

const p10 = {
    score: 0,
    button: document.querySelector('#p1button10'),
    display: document.querySelector('#p1Display')
}

/* Player 2 constants */
const p2_0 = {
    score: 0,
    button: document.querySelector('#p2button0'),
    display: document.querySelector('#p2Display')
}
const p2_1 = {
    score: 0,
    button: document.querySelector('#p2button1'),
    display: document.querySelector('#p2Display')
}
const p2_2 = {
    score: 0,
    button: document.querySelector('#p2button2'),
    display: document.querySelector('#p2Display')
}
const p2_3 = {
    score: 0,
    button: document.querySelector('#p2button3'),
    display: document.querySelector('#p2Display')
}
const p2_4 = {
    score: 0,
    button: document.querySelector('#p2button4'),
    display: document.querySelector('#p2Display')
}
const p2_5 = {
    score: 0,
    button: document.querySelector('#p2button5'),
    display: document.querySelector('#p2Display')
}
const p2_6 = {
    score: 0,
    button: document.querySelector('#p2button6'),
    display: document.querySelector('#p2Display')
}
const p2_7 = {
    score: 0,
    button: document.querySelector('#p2button7'),
    display: document.querySelector('#p2Display')
}
const p2_8 = {
    score: 0,
    button: document.querySelector('#p2button8'),
    display: document.querySelector('#p2Display')
}

const p2_9 = {
    score: 0,
    button: document.querySelector('#p2button9'),
    display: document.querySelector('#p2Display')
}

const p2_10 = {
    score: 0,
    button: document.querySelector('#p2button10'),
    display: document.querySelector('#p2Display')
}


/* Player 1 events */ 

p0.button.addEventListener('click', function () {
    p0.score = 0;
    p0.display.classList.add('has-text-info');
    p0.display.textContent = p0.score;})

p1.button.addEventListener('click', function () {
    p1.score = 1;
    p1.display.classList.add('has-text-info');
    p1.display.textContent = p1.score;})

p2.button.addEventListener('click', function () {
    p2.score = 2;
    p2.display.classList.add('has-text-info');
    p2.display.textContent = p2.score;})

p3.button.addEventListener('click', function () {
    p3.score = 3;
    p3.display.classList.add('has-text-info');
    p3.display.textContent = p3.score;})

p4.button.addEventListener('click', function () {
    p4.score = 4;
    p4.display.classList.add('has-text-info');
    p4.display.textContent = p4.score;})

p5.button.addEventListener('click', function () {
    p5.score = 5;
    p5.display.classList.add('has-text-info');
    p5.display.textContent = p5.score;})

p6.button.addEventListener('click', function () {
    p6.score = 6;
    p6.display.classList.add('has-text-info');
    p6.display.textContent = p6.score;})

p7.button.addEventListener('click', function () {
    p7.score = 7;
    p7.display.classList.add('has-text-info');
    p7.display.textContent = p7.score;})

p8.button.addEventListener('click', function () {
    p8.score = 8;
    p8.display.classList.add('has-text-info');
    p8.display.textContent = p8.score;})

p9.button.addEventListener('click', function () {
    p9.score = 9;
    p9.display.classList.add('has-text-info');
    p9.display.textContent = p9.score;})

p10.button.addEventListener('click', function () {
    p10.score = 10;
    p10.display.classList.add('has-text-info');
    p10.display.textContent = p10.score;})
    
/* Player 2 Events*/
p2_0.button.addEventListener('click', function () {
    p2_0.score = 0;
    p2_0.display.classList.add('has-text-danger');
    p2_0.display.textContent = p2_0.score;})

p2_1.button.addEventListener('click', function () {
    p2_1.score = 1;
    p2_1.display.classList.add('has-text-danger');
    p2_1.display.textContent = p2_1.score;})

p2_2.button.addEventListener('click', function () {
    p2_2.score = 2;
    p2_2.display.classList.add('has-text-danger');
    p2_2.display.textContent = p2_2.score;})

p2_3.button.addEventListener('click', function () {
    p2_3.score = 3;
    p2_3.display.classList.add('has-text-danger');
    p2_3.display.textContent = p2_3.score;})

p2_4.button.addEventListener('click', function () {
    p2_4.score = 4;
    p2_4.display.classList.add('has-text-danger');
    p2_4.display.textContent = p2_4.score;})

p2_5.button.addEventListener('click', function () {
    p2_5.score = 5;
    p2_5.display.classList.add('has-text-danger');
    p2_5.display.textContent = p2_5.score;})

p2_6.button.addEventListener('click', function () {
    p2_6.score = 6;
    p2_6.display.classList.add('has-text-danger');
    p2_6.display.textContent = p2_6.score;})

p2_7.button.addEventListener('click', function () {
    p2_7.score = 7;
    p2_7.display.classList.add('has-text-danger');
    p2_7.display.textContent = p2_7.score;})

p2_8.button.addEventListener('click', function () {
    p2_8.score = 8;
    p2_8.display.classList.add('has-text-danger');
    p2_8.display.textContent = p2_8.score;})

p2_9.button.addEventListener('click', function () {
    p2_9.score = 9;
    p2_9.display.classList.add('has-text-danger');
    p2_9.display.textContent = p2_9.score;})

p2_10.button.addEventListener('click', function () {
    p2_10.score = 10;
    p2_10.display.classList.add('has-text-danger');
    p2_10.display.textContent = p2_10.score;})

/* Reset Button*/    
const resetButton = document.querySelector('#reset');

resetButton.addEventListener('click', reset)

function reset() {
        p1.score = 0;
        p2_1.score = 0;
        p1.display.classList.remove('has-text-info');
        p2_1.display.classList.remove('has-text-danger');
        p1.display.textContent = p1.score;
        p2_1.display.textContent = p2_1.score;
    }

/* P1 End Turn
const p1endturnButton = document.querySelector('#P1EndTurn');

p1endturnButton.addEventListener('click', p1end)

function p1end() {
    if(p1.score > 0){
        p1.score = 0;
        p2_1.score = 3;
        p2_1.display.classList.add('has-text-danger');
        p1.display.textContent = p1.score;
        p2_1.display.textContent = p2_1.score;
    }
}*/    


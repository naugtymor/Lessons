
// Task 1 ============================================
/* Создайте блок div-1. Добавьте на него событие touchstart. Выведите в out-1 слово  touch если событие сработает. */

document.querySelector('.div-1').addEventListener('touchstart', t1);

function t1() {
    document.querySelector('.out-1').innerHTML += "touch ";
}

// ваше событие здесь!!!

// Task 2 ============================================
/* Создайте блок div-2. Добавьте на него событие touchstart. Выведите в out-2 число срабатываний события. */

document.querySelector('.div-2').addEventListener('touchstart', t2);
let out2 = document.querySelector('.out-2');
let a = 1;

function t2() {
    out2.innerHTML = a;
    a++;

}

// ваше событие здесь!!!


// Task 3 ============================================
/*  Создайте блок div-3_1 и div-3_2. Добавьте на них событие touchstart. Выведите в out-3 номер блока 1 или 2 на котором сработало событие. */

document.querySelector('.div-3_1').addEventListener('touchstart', t3);
document.querySelector('.div-3_2').addEventListener('touchstart', t3);
let out3 = document.querySelector('.out-3');


function t3() {
    out3.innerHTML = this.textContent;

}

// ваше событие здесь!!!


// Task 4 ============================================
/*  Создайте блок div-4. И кнопку b-4. При нажатии кнопки - добавляйте событие ontouchstart на блок div-4. При событии происходит вывод текста touch в out-4.  */

let out4 = document.querySelector('.out-4');

function t4() {
    document.querySelector('.div-4').ontouchstart = () => {
        out4.innerHTML = document.querySelector('.div-4').textContent;
    }
}

document.querySelector('.b-4').addEventListener('touchstart', t4);

// ваше событие здесь!!!

// Task 5 ============================================
/*  Дана кнопка b-5. При ее нажатии очищайте событие ontouchstart на блоке div-4. */

function t5() {
    document.querySelector('.out-4').innerHTML = '';
}

document.querySelector('.b-5').addEventListener('touchstart', t5);

// ваше событие здесь!!!

// Task 6 ============================================
/*  Добавьте событие ontouchend на div-4. При его срабатывании выведите в out-6 слово touchend. */

document.querySelector('.div-4').addEventListener('touchend', t6);

function t6() {
    document.querySelector('.out-6').innerHTML = 'touchend';
}

// ваше событие здесь!!!


// Task 7 ============================================
/*  Дан блок div-7. Добавьте событие touch, при срабатывании которого окрашивайте блок в красный цвет. */

document.querySelector('.div-7').addEventListener('touchend', t7);

function t7() {
    this.style.background = 'red';

}

// ваше событие здесь!!!

// Task 8 ============================================
/*  Дан блок div-8. Добавьте на него событие touch, которое при срабатывании окрашивает блок случаным цветом из массива a8=[red, green, blue, orange, pink, yellow] */

let a8 = ['red', 'green', 'blue', 'orange', 'pink', 'yellow'];
document.querySelector('.div-8').addEventListener('touchstart', t8);

function rand(min, max) {
    return Math.random() * (max - min) + min;
}

function t8() {
    this.style.background = a8[Math.round(rand(0, a8.length))];
}

// ваше событие здесь!!!


// Task 9 ============================================
/* Дан блок div-9. Добавьте событие ontouch. Выводите количество одновременных касаний в out-9. */

document.querySelector('.div-9').addEventListener('touchstart', t9);

function t9(event) {
    document.querySelector('.out-9').innerHTML = event.touches.length;
}

// ваше событие здесь!!!


// Task 10 ============================================
/*  Дан блок div-10. Добавьте на него событие touchmove. При срабатывании события - увеличивайте его ширину на 1. */

document.querySelector('.div-10').addEventListener('touchmove', t10);
let w10 = 75;
function t10() {
    this.style.width = w10 + 'px';
    w10++;
}

// ваше событие здесь!!!

// Task 11 ============================================
/*  Дан блок div-11. Добавьте на него событие touch. При срабатывании выводите радиус события radiusX, radiusY. */

document.querySelector('.div-11').addEventListener('touchstart', t11);

function t11(event) {
    document.querySelector('.out-11').innerHTML = 'X: ' + event.changedTouches[0].clientX + ' ' + 'Y: ' + event.changedTouches[0].clientY;

}

// ваше событие здесь!!!

// Task 12 ============================================
/*  Мини проект. Ознакомьтесь с версткой в задании 12.
<p>Изучите html код внутри div-12-wrapper.</p>
<p>1. Добавьте на кнопку nex событие click, touch так, чтобы при событии запускалась функция nextFunction и активным становилось изображение следующее за выделенным классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>2. Добавьте на кнопку prev событие click, touch так, чтобы при событии запускалась функция prevFunction и активным становилось изображение до выделенного классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>3. Учтите краевые эффекты - когда мы доходим до конца или начала, то нажатие кнопки должно приводить к перемещению рамки в начало или конец изображений.</p>
<p>4. Добавьте кнопку reset (функция resetFunction), нажатие которой сбрасывает активное изображение на нулевое. </p>
<p>5. Добавьте во все действия следующее - в изображении img-12-max заменяется src на активную. Т.е. произошло событие - заменилась главная картинка.</p>
*/

const images = document.querySelectorAll('.img-12-min');
let count = 0; // переменная, которая указывает на номер активного изображения в images

const next = document.querySelectorAll('.next');
next.onclick = nextFunction;

const prev = document.querySelectorAll('.prev');
prev.onclick = prevFunction;

document.querySelector('.next').addEventListener('touchstart', nextFunction);
document.querySelector('.prev').addEventListener('touchstart', prevFunction);
document.querySelector('.reset').addEventListener('touchstart', resetFunction);

let maxImg = document.querySelector('.img-12-max');

// console.log(element)

function nextFunction() {
    if (count + 1 == images.length) {
        count = 0;
    } else {
        count++;
    }

    for (let i = 0; i < images.length; i++) {
        images[i].classList.remove('active-img');
        images[count].classList.add('active-img');
        maxImg.src = images[count].src;
    }
}

function prevFunction() {
    if (count == 0) {
        count = images.length - 1;
    } else {
        count--;
    }

    for (let i = 0; i < images.length; i++) {
        images[i].classList.remove('active-img');
        images[count].classList.add('active-img');
        maxImg.src = images[count].src;
    }

}

function resetFunction() {
    images[count].classList.remove('active-img');
    count = 0;
    images[count].classList.add('active-img');
    maxImg.src = images[count].src;
}


// ваше событие здесь!!!

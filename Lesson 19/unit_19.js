
// Task 1 ============================================
/* Добавьте на блок .div-1 событие клик и по клику запуск функции t1. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-1.  */

function t1() {
    document.querySelector('.out-1').innerHTML = document.querySelector('.div-1').textContent;
}

document.querySelector('.div-1').onclick = t1;

// ваше событие здесь!!!

// Task 2 ============================================
/*  Добавьте на блок .div-2 событие клик и по клику запуск функции t2. Функция должна возвращать true или false в зависимости от того, нажата ли клавиша alt или нет в момент клика. Также, выводите на экран результат. Вывод осуществляется в out-2. */

function t2(event) {
    // console.log(event
    // console.log(event.altKey);

    if (event.altKey == true) {
        document.querySelector('.out-2').innerHTML = true;
        return true;
    }
    else {
        document.querySelector('.out-2').innerHTML = false;
        return false;
    }
}

document.querySelector('.div-2').onclick = () => {
    console.log(t2(event))
}

// ваше событие здесь!!!


// Task 3 ============================================
/*  Добавьте на блок .div-3 событие клик. При клике - увеличивайте ширину блока на 5px. Каждый клик - увеличение ширины на 5px. 10 кликов - на 50px. Ширину выводите в out-3. */

let w3 = 75;

function t3() {
    w3 = w3 + 5;
    document.querySelector('.div-3').style.width = w3 + 'px';
    document.querySelector('.out-3').innerHTML = w3;
}

document.querySelector('.div-3').onclick = t3;

// ваше событие здесь!!!


// Task 4 ============================================
/*  Добавьте на блок .div-4 событие двойной клик и по двойному клику запуск функции t4. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-4. */

function t4() {
    let a = document.querySelector('.div-4').textContent;
    document.querySelector('.out-4').innerHTML = a;
    return a;
}

document.querySelector('.div-4').ondblclick = () => {
    console.log(t4())
}
// ваше событие здесь!!!

// Task 5 ============================================
/*  Дан блок .div-5.active. Добавьте на него событие двойной клик, по которому удалется класс active если он есть и добавляется если такого класса нет. */

let div5 = document.querySelector('.div-5');
// console.log(div5.className)

function t5() {
    this.classList.toggle('active');
}

document.querySelector('.div-5').ondblclick = t5;

// ваше событие здесь!!!

// Task 6 ============================================
/*  Дан блок .div-6 и список .ul-6. При двойном клике на блоке скрывайте .ul-6 еcли он показан и показывайте если скрыт. Скрытие и показ делайте через добавление - удаление класса .hide */

function t6() {
    document.querySelector('.ul-6').classList.toggle('hide');
}

document.querySelector('.div-6').ondblclick = t6;

// ваше событие здесь!!!


// Task 7 ============================================
/*  Дан блок .div-7. При клике правой кнопкой мыши на блоке добавляйте ему класс .active. При повторном клике - удаляйте. */

function t7() {
    document.querySelector('.div-7').classList.toggle('active');

}

document.querySelector('.div-7').oncontextmenu = t7;


// ваше событие здесь!!!

// Task 8 ============================================
/*  Дано checkbox .ch-8. Повесьте на него событие onchange при котором на документе отключается клик правой кнопкой мыши если checkbox выбран и отключает если не выбран. */

let ch8 = document.querySelector('.ch-8');

function t8() {
    if (ch8.checked) {
        document.oncontextmenu = () => {
            return false;
        }
    }
    else {
        document.oncontextmenu = () => {
            return true;
        }
    }
}

document.querySelector('.ch-8').onchange = t8;

// ваше событие здесь!!!


// Task 9 ============================================
/*  Дан блок .div-9. Внутри блока - изображение 1.png. При клике правой кнопкой мыши  - меняйте изображение на 2.png. Надеюсь вы догадаетесь изменить только src изображения? */


function t9() {

    document.querySelector(".div-9 img").src = "img/2.png";
}

document.querySelector('.div-9').oncontextmenu = t9;

// ваше событие здесь!!!


// Task 10 ============================================
/*  Дан блок .div-10. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. */

function t10() {
    document.querySelector(".div-10 img").src = "img/2.png";
    console.log(1)
}

document.querySelector('.div-10').onmouseenter = t10;

// ваше событие здесь!!!

// Task 11 ============================================
/*  Дан блок .div-11. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. При уведении мыши - mouseleave - возвращайте исходное изображение. */

function t11() {
    document.querySelector(".div-11 img").src = "img/2.png";

    document.querySelector('.div-11').onmouseleave = () => {
        document.querySelector(".div-11 img").src = "img/1.png";

    }
}

document.querySelector('.div-11').onmouseenter = t11;

// ваше событие здесь!!!

// Task 12 ============================================
/*  Дан блок .div-12. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. */

document.querySelector('.div-12').onmousedown = () => {
    document.querySelector('.div-12').classList.add('active');
}


// ваше событие здесь!!!


// Task 13 ============================================
/*  Дан блок .div-13. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. Добавьте ему событие mouseup - при отпускании мыши - удаляйте класс active. */

document.querySelector('.div-13').onmousedown = () => {
    document.querySelector('.div-13').classList.add('active');
}

document.querySelector('.div-13').onmouseup = () => {
    document.querySelector('.div-13').classList.remove('active');
}

// ваше событие здесь!!!


// Task 14 ============================================
/*  Дан блок .div-14. При нажатии кнопки b-14 добавляйте к нему событие onclick - которое, при клике добавляем блоку div-14 класс active. */

function t14() {
    document.querySelector('.div-14').onclick = () => {
        document.querySelector('.div-14').classList.add('active');
    }
    console.log(1)
}

document.querySelector('.b-14').onclick = t14;


// Task 15 ============================================
/*  Дан блок .div-15. Добавьте на него событие move. При каждом движении мыши увеличивайте число внутри на 1. */
let a = 1;

function t15() {
    a++;
    document.querySelector('.div-15').textContent = a;
}

document.querySelector('.div-15').onmousemove = t15;

// ваше событие здесь!!!


// Task 16 ============================================
/*  Дан блок .div-16. Добавьте на него событие move. При каждом движении мыши увеличивайте ширину блока на 1px. */

let b = 75;

function t16() {
    b++;
    document.querySelector('.div-16').style.width = b + 'px';
}

document.querySelector('.div-16').onmousemove = t16;

// ваше событие здесь!!!

// Task 17 ============================================
/*  Дано две кнопки - b-17_on и b-17_off. Напишите фукнции t17On и t17Off которые включают и отключают событие move в задании 16. */

function t17On() {
    document.querySelector('.div-16').onmousemove = () => {

        t16();
        return true;
    }
}

function t17Off() {
    document.querySelector('.div-16').onmousemove = () => {
        return false;
    }
}

document.querySelector('.b-17_on').onclick = t17On;
document.querySelector('.b-17_off').onclick = t17Off;

// ваше событие здесь!!!
// ваше событие здесь!!!

// Task 18 ============================================
/*  Дан блок div-18. Напишите фукнцию t18 которая выводит в данный блок его ширину при событии onmouseenter. */

function t18() {
    document.querySelector('.div-18').textContent = document.querySelector('.div-18').offsetWidth;
    document.querySelector('.div-18').onmouseleave = () => {
        document.querySelector('.div-18').textContent = "task 18"
    }
}

document.querySelector('.div-18').onmouseenter = t18;

// ваше событие здесь!!!

// Task 19 ============================================
/*  Дан блок div-19. Напишите фукнцию t19 которая выводит в данный блок его классы при событии onmouseout. */

function t19() {
    document.querySelector('.div-19').textContent = document.querySelector('.div-19').classList;
}

document.querySelector('.div-19').onmouseout = t19;

// ваше событие здесь!!!


// Task 20 ============================================
/*  Дан элемент progress. Напишите фукнцию t20 которая увеличивает его value на 1 при каждом событии mousemove внутри progress. */

let c = 10;

function t20() {
    c++;
    document.querySelector('progress').value = c;
}

document.querySelector('progress').onmousemove = t20;

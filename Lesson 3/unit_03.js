// Task 1
// При нажатии кнопки b-1 срабатывает функция f1. Функция должна прочитать содержимое i-1 и сравнить его с числом 4 (сравнение ==). Результат сравнения - true или false выведите в out-1.

let input1 = document.querySelector('.i-1');
let button1 = document.querySelector('.b-1');
let out1 = document.querySelector('.out-1');

function f1() {
    let a = +input1.value;
    if (a == 4) {
        out1.innerHTML = true;
    }
    else {
        out1.innerHTML = false;
    }
}

document.querySelector('.b-1').onclick = f1;


// Task 2
// Даны две переменные a21 и a22. При нажатии кнопки b-2, запускается функция f2. Функция должна сравнить переменные с помощью if else и вывести в out-2 число, которое больше. Вариант равенства переменных не рассматриваем.

let out2 = document.querySelector('.out-2');
let a21 = 45;
let a22 = 32;

function f2() {
    if (a21 > a22) {
        out2.innerHTML = a21;
    }
    else {
        out2.innerHTML = a22;
    }
}

document.querySelector('.b-2').onclick = f2;


// Task 3
// Даны 2 input - i-31 и i-32, оба - input[type=number]. При нажатии кнопки b-3 срабатывает функция f3. Функция должна вычитать содержимое i-31 и i-32 в переменные и сравнить их, вывести в  out-3 большее число.
//     Проведите самостоятельный тест работы, введите пары чисел 4 и 9, 9 и 22, 5 и 111.

let out3 = document.querySelector('.out-3');

function f3() {

    let a = +document.querySelector('.i-31').value;
    let b = +document.querySelector('.i-32').value;

    if (a > b) {
        out3.innerHTML = a;
    }
    else {
        out3.innerHTML = b;
    }
}

document.querySelector('.b-3').onclick = f3;


// Task 4. Создайте на странице input[type=number] с классом i-4, куда пользователь может ввести год своего рождения. Есть кнопка b-4 которая запускает функцию f4. Функция должна вывести в  .out-4 число 1 если пользователю больше или равно 18 лет, и 0 если меньше.

let input4 = document.querySelector('.i-4');
let out4 = document.querySelector('.out-4');

function f4() {
    let a = 2022 - +input4.value;
    console.log(a)
    if (a >= 18) {
        out4.innerHTML = 1;
    }
    else {
        out4.innerHTML = 0
    }
}

document.querySelector('.b-4').onclick = f4;

// Task 5. Создайте на странице input[type=number] с классом i-5, куда пользователь может ввести число. Есть кнопка b-5 которая запускает функцию f5. Функция должна вывести в  .out-5 символ m если число меньше нуля, 0 если число равно нулю и 1 если больше.

let out5 = document.querySelector('.out-5');
let input5 = document.querySelector('.i-5');


function f5() {
    let a = +input5.value;

    if (a > 0) {
        out5.innerHTML = 1;
    }
    else if (a < 0) {
        out5.innerHTML = 'm';
    }
    else if (a == 0) {
        out5.innerHTML = 0;
    }

}

document.querySelector('.b-5').onclick = f5;


// Task 6. Создайте на странице input[type=number] с классом i-6, куда пользователь может ввести число. Есть кнопка b-6 которая запускает функцию f6. Функция должна вывести в  .out-6  слово even если число четное и odd если нечетное. Для проверки четности используется целочисленный остаток от деления на 2 (оператор %). Если остаток равен нулю  - четное, нет - нечетное.

let input6 = document.querySelector('.i-6');
let out6 = document.querySelector('.out-6');

function f6() {
    let a = +input6.value;
    if (a % 2 == 0) {
        out6.innerHTML = 'even';
    }
    else {
        out6.innerHTML = 'odd';
    }

}

document.querySelector('.b-6').onclick = f6;

// Task 7.
// Даны 2 input - i-71 и i-72, оба - input[type=number]. При нажатии кнопки b-7 срабатывает функция f7. Функция должна число из i-71 возвести в степень i-72, вывести результат в  out-7. Для возведения в степень можно использовать **, или Math.pow.

let input7_1 = document.querySelector('.i-71');
let input7_2 = document.querySelector('.i-72');
let out7 = document.querySelector('.out-7');

function f7() {
    a = +input7_1.value;
    b = +input7_2.value;
    out7.innerHTML = Math.pow(a, b);
}

document.querySelector('.b-7').onclick = f7;

// Task 8.
// Дан select s-8, который содержит 3 значения: 1, 2, 3. Дана кнопка b-8. При ее  нажатии срабатывает функция f8. Функция должна получить выбранное в select число, потом с помощью switch case сравнить его поочередно с ‘1’, ‘2’, ‘3’. И если число выбрано - 1, то вывести в out-8 строку one, если 2 - two, если 3 - three.

let out8 = document.querySelector('.out-8');
let slct8 = document.querySelector('.s-8');

function f8() {
    let a = +slct8.value;
    switch (a) {
        case 1:
            out8.innerHTML = 'one';
            break
        case 2:
            out8.innerHTML = 'two';
            break
        case 3:
            out8.innerHTML = 'three';
    }

}

document.querySelector('.b-8').onclick = f8;

// Task 9
//     Создайте на странице input[type=number] с классом i-9, куда пользователь может ввести номер квартиры. Есть кнопка b-9 которая запускает функцию f9. Функция должна вывести в  .out-9 номер подъезда, в котором находится квартира.
//      если от 1 до 32 - то вывести цифру 1
//     если от 33 до 43 - то вывести 2
//     если от 44 до 64 - то 3.
//     В противном случае, вывести 0.

let input9 = document.querySelector('.i-9');
let out9 = document.querySelector('.out-9');

function f9() {
    let a = +input9.value;
    if (a >= 1 && a <= 32) {
        out9.innerHTML = 1;
    }
    else if (a >= 33 && a <= 43) {
        out9.innerHTML = 2;
    }
    else if (a >= 44 && a <= 64) {
        out9.innerHTML = 3;
    }
    else {
        out9.innerHTML = 0;
    }
}

document.querySelector('.b-9').onclick = f9;

// Task 10
// Дан select s-100. По нажатию кнопки, выведите value выбранного option в out-10.

let slct10 = document.querySelector('.s-100');
let out10 = document.querySelector('.out-10')

function f10() {
    console.log(slct10.value);
    switch (+slct10.value) {
        case 6:
            out10.innerHTML = slct10.value;
            break;
        case 7:
            out10.innerHTML = slct10.value;
            break;
        case 11:
            out10.innerHTML = slct10.value;
            break;
        case 9:
            out10.innerHTML = slct10.value;

    }
}

document.querySelector('.b-10').onclick = f10;

// Task 11
// Дан select s-110. По изменению состояния select (событие onchange) выведите value выбранного option в out-11.

let slct11 = document.querySelector('.s-110');
let out11 = document.querySelector('.out-11')

function f11() {

    switch (+slct11.value) {
        case 6:
            out11.innerHTML = slct11.value;
            break;
        case 7:
            out11.innerHTML = slct11.value;
            break;
        case 11:
            out11.innerHTML = slct11.value;
            break;
        case 9:
            out11.innerHTML = slct11.value;

    }

}

document.querySelector('.s-110').onchange = f11;

// Task 12
// Дан input i-120. По нажатию кнопки получите значение из input  в переменную, а затем выведите в out-12 typeof полученной переменной. Typeof позволяет определить тип данных. Обратите внимание, данная задача уже решена, нужно убрать комментарии и изучить работу.

let i120 = document.querySelector('.i-120');

function f12() {
    let v = i120.value;
    console.log(v)
    document.querySelector('.out-12').innerHTML = (typeof v);

}

document.querySelector('.b-12').onclick = f12;

// Task 13
// Дан input i-130. В отличие от предыдущего задания - input type number. По нажатию кнопки получите значение из input  в переменную, а затем выведите в out-13 typeof полученной переменной. Typeof позволяет определить тип данных. Если вы правильно все сделали - то удивительно, но тип данных будет string! Подумайте почему так?

let input13 = document.querySelector('.i-130');
let out13 = document.querySelector('.out-13')

function f13() {
    let a = input13.value;
    console.log(a)
    out13.innerHTML = (typeof a)

}

document.querySelector('.b-13').onclick = f13;


// Task 14
// Дан input i-141 и input-142, type=number.  Дан select s-143, который содержит две операции - +, -, *, / . Дана кнопка b-14, при нажатии на которую срабатывает функция f14. Функция выводит в out-14 результат операций выбранной в 3-м select к числам введенным в первом и втором input. Например выбрано 1 13 +, нужно вывести результат операции 1+13 т.е.  14.

let input14_1 = document.querySelector('.i-141');
let input14_2 = document.querySelector('.i-142');
let out14 = document.querySelector('.out-14');
let slct14 = document.querySelector('.s-143');

function f14() {

    let a = +input14_1.value;
    let b = +input14_2.value;

    switch (slct14.value) {
        case '+':
            out14.innerHTML = a + b;
            break;
        case '-':
            out14.innerHTML = a - b;
            break;
        case '*':
            out14.innerHTML = a * b;
            break;
        case '/':
            out14.innerHTML = a / b;
    }

}

document.querySelector('.b-14').onclick = f14;


// Task     15
// Дан select s-151 и s-152, каждый из которых содержит 1 и 0.  Дан select s-153, который содержит две операции - && и || . Дана кнопка b-15, при нажатии на которую срабатывает функция f15. Функция выводит в out-15 результат логических операций выбранных в 3 select к числам выбранным в первом и втором select. Например выбрано 1 1 &&, нужно вывести результат операции 1&&1 т.е. 1 или 0.

let slct15_1 = document.querySelector('.s-151');
let slct15_2 = document.querySelector('.s-152');
let slct15_3 = document.querySelector('.s-153');
let out15 = document.querySelector('.out-15');

function f15() {

    switch (slct15_3.value) {
        case '&&':
            out15.innerHTML = slct15_1.value + '&&' + slct15_2.value;
            break;
        case '||':
            out15.innerHTML = slct15_1.value + '||' + slct15_2.value;
    }
}

document.querySelector('.b-15').onclick = f15;
// Task 1
//Создайте массив ar1 содержащий строки, числа, булевы значения. Выведите его в .out-1. Вывод - по нажатию кнопки b-1

let out1 = document.querySelector('.out-1');
let arr1 = [1, 10, 'nikita', 10 > 9];

function f1() {
    out1.innerHTML = arr1; // да так можно выводить!!!!
}

document.querySelector('.b-1').onclick = f1;

// Task 2
//Создайте массив ar2 содержащий строки, числа, булевы значения. Выведите его в div.out-2. Используйте шаблон вывода из кода в JS. Вывод - по нажатию кнопки b-2

let arr2 = [22, 34, 'programming', 4 < 1]

function f2() {
    let out = '';
    for (let i = 0; i < arr2.length; i++) {
        out += arr2[i] + ' ';
    }
    document.querySelector('.out-2').innerHTML = out;
}

document.querySelector('.b-2').onclick = f2;

// Task 3
//Создайте массив ar3, заполните его любыми значениями. Выведите длину массива.
// Вывод - по нажатию кнопки b-3
// Вывод в out-3
// Тест допустим массив [1,2,3] вывод - 3

let arr3 = [1, 4, 56, 6, 4]; // переменную обьявляем здесь!!!!

function f3() {
    document.querySelector('.out-3').innerHTML = arr3.length;
}

document.querySelector('.b-3').onclick = f3;

// Task 4
//Создайте массив ar4. Выведите нулевой, третий, восьмой элемент массива в out-4 через пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-4
// Вывод в out-4
// Тест допустим массив [1,2,3,4,5,6,7,8,9,10] вывод: 1 4 9

let arr4 = [12, 22, 4, 5, 3, 2, 54, 53, 6];// переменную обьявляем эту здесь!!!!

function f4() {
    let out = document.querySelector('.out-4');
    out.innerHTML = arr4[0] + ' ' + arr4[3] + ' ' + arr4[8];
}

document.querySelector('.b-4').onclick = f4;

// Task 5
//Создайте массив ar5 длина которого больше 5. Выведите сумму нулевого, второго и третьего элементов массива (нуль, второй - и третий это индексы 0, 2, 3)
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-5
// Вывод в out-5
// Тест допустим массив [1,2,3,4,5,6,7,8,9,10] вывод: 8

let arr5 = [1, 2, 3, 4, 5, 6, 7, 8];

function f5() {
    let out = document.querySelector('.out-5');
    let sum = 0;

    sum += arr5[0];
    sum += arr5[2];
    sum += arr5[3];

    out.innerHTML = sum;
}

document.querySelector('.b-5').onclick = f5;

// Task 6
//Создайте массив ar6, который содержит ваше имя, знак зодиака, день рождения и месяц рождения. Выведите массив на страницу в div-6. Разделитель - пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-6
// Вывод в out-6

let arr6 = ['Nikita', 'scales', 30, 'september'];
let div6 = document.querySelector('.out-6');

function f6() {
    let out = '';
    for (let i = 0; i < arr6.length; i++) {
        out += arr6[i] + ' ';
    }
    div6.innerHTML = out;
}

document.querySelector('.b-6').onclick = f6;

// Task 7
// Добавьте в массив ar7  значения 'vietnam' с индексом 7 , 'turkey' с индексом 6, 'italy' с индексом 5. Добавление элементов сделайте в f7. Выведите массив на страницу в .out-7. Разделитель - пробел. Обращаю ваше внимание! Это программирование. Поэтому - никаких больших букв и тому подобного!!!!
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-7
// Вывод в out-7

let arr7 = ['china', 'india', 'brazil', 'japan', 'egypt'];
let out7 = document.querySelector('.out-7');

function f7() {
    arr7[7] = 'vietnam';
    arr7[6] = 'turkey';
    arr7[5] = 'italy';

    let out = '';
    for (let i = 0; i < arr7.length; i++) {
        out += arr7[i] + ' ';
    }
    out7.innerHTML = out;

}

document.querySelector('.b-7').onclick = f7;

// Task 8
// Добавьте в массив ar8 третий (индекс 3) элемент равный 3.14, 4 (индекс 4) элемент равный 17, 6 элемент (индекс 6) равный 5. Выведите массив в .out-8. Разделитель - дефис. В .out-8-1 выведите длину массива ar8.

// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-8
// Вывод в out-8

let arr8 = [];
let out8 = document.querySelector('.out-8');

function f8() {
    arr8[3] = 3.14;
    arr8[4] = 17;
    arr8[6] = 5;

    let out = '';
    for (let i = 0; i < arr8.length; i++) {
        out += arr8[i] + '-';
    }
    out8.innerHTML = out;
    document.querySelector('.out-8-1').innerHTML = arr8.length;
}
document.querySelector('.b-8').onclick = f8;

// Task 9
// Выведите последний элемент массива ar9. Вывод последнего элемента  - реализуйте по индексу. Чтобы рассчитать индекс последнего элемента - используйте на длину массива.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-9
// Вывод в out-9

let arr9 = [100, 200, 300, 400, 700, 121];
let out9 = document.querySelector('.out-9');

function f9() {
    out9.innerHTML = arr9[arr9.length - 1];
}

document.querySelector('.b-9').onclick = f9;

// Task 10
// Выведите сумму первого (индекс 1) и последнего массива ar10 в блок out-10. Индекс последнего элемента массива не указывайте напрямую, а вычисляйте через длину массива.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-10
// Вывод в out-10

let arr10 = [100, 200, 300, 400, 700, 121];
let out10 = document.querySelector('.out-10');

function f10() {
    sum = 0;
    sum = arr10[1] + arr10[arr10.length - 1];
    out10.innerHTML = sum;
}

document.querySelector('.b-10').onclick = f10;


// Task 11
// Напишите функцию, которая меняет местами второй (индекс 2) и четвертый (индекс 4) элемент массива ar11 и выводит его в out-11. Разделитель - пробел.

// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-11
// Вывод в out-11

let arr11 = [2, 3, 4, 5, 6, 7];
let out11 = document.querySelector('.out-11');

function f11() {
    let out = '';
    let temp = arr11[2];
    arr11[2] = arr11[4];
    arr11[4] = temp;

    for (let i = 0; i < arr11.length; i++) {
        out += arr11[i] + ' ';
    }
    out11.innerHTML = out;
}

document.querySelector('.b-11').onclick = f11;


// Task 12
// Напишите функцию f12, которая меняет местами нулевой и последний элемент массива ar12 и выводит его в out-12. Разделитель - пробел. Последний элемент вычислять через длину массива.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-12
// Вывод в out-12

let arr12 = ['test', 'west', 'list', 'class', 'best'];
let out12 = document.querySelector('.out-12');

function f12() {
    let out = '';
    let temp = arr12[0];
    arr12[0] = arr12[arr12.length - 1];
    arr12[arr12.length - 1] = temp;

    for (let i = 0; i < arr12.length; i++) {
        out += arr12[i] + ' ';
    }
    out12.innerHTML = out;
}

document.querySelector('.b-12').onclick = f12;

// Task 13
// Выведите массив ar13 в out-13 в формате индекс пробел значение пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-13
// Вывод в out-13
// Тест допустим массив [1,2,3] вывод:
//  0 1 1 2 2 3


let arr13 = ['test', 'west', 'list', 'class', 'best'];
let out13 = document.querySelector('.out-13');

function f13() {
    let out = '';

    for (let i = 0; i < arr13.length; i++) {
        out += i + ' ' + arr13[i] + ' ';
    }
    out13.innerHTML = out;
}

document.querySelector('.b-13').onclick = f13;


// Task 14
// Используя цикл выведите на страницу массив ar14 в обратном порядке. Разделитель - пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-14
// Вывод в out-14

let arr14 = [1, 2, 3, 'hello', 66];
let out14 = document.querySelector('.out-14');

function f14() {
    let out = '';

    for (let i = arr14.length - 1; i >= 0; i--) {
        out += arr14[i] + ' ';
    }
    out14.innerHTML = out;
}

document.querySelector('.b-14').onclick = f14;

// Task 15
// Используя цикл выведите на страницу элементы массива ar15, которые больше нуля. Разделитель - пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-15
// Вывод в out-15

let arr15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
let out15 = document.querySelector('.out-15');


function f15() {
    let out = '';

    for (let i = 0; i < arr15.length; i++) {
        if (arr15[i] > 0) {
            out += arr15[i] + ' ';
        }
    }
    out15.innerHTML = out;

}

document.querySelector('.b-15').onclick = f15;

// Task 16
// Выполните перебор массива arr16. Четные элементы добавьте в массив ar16_even, нечетные в ar16_odd. Добавление в массив - по индексу, а не +=!!!!!. Протестируйте задачу на повторный запуск! Выведите ar16_odd в div.out-16-odd, а ar16_even в div.out-16-even. Разделитель - пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-16
// Вывод в out-16

let arr16 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
let arr16_odd = [];
let arr16_even = [];
let out16_1 = document.querySelector('.out-16-odd');
let out16_2 = document.querySelector('.out-16-even');


function f16() {
    let k1 = 0;
    let k2 = 0;

    for (let i = 0; i < arr16.length; i++) {
        if (arr16[i] % 2 == 0) {
            arr16_even[k1] = arr16[i];
            k1++;
        }
        else {
            arr16_odd[k2] = arr16[i];
            k2++;
        }
    }

    for (let i = 0; i < arr16_odd.length; i++) {
        out16_1.innerHTML += arr16_odd[i] + ' ';
    }
    for (let i = 0; i < arr16_even.length; i++) {
        out16_2.innerHTML += arr16_even[i] + ' ';
    }
}

document.querySelector('.b-16').onclick = f16;

// Task 17
// Используя цикл выведите в .out-17 количество элементов ar17, значение которых больше 3. Для расчета используйте цикл и переменную счетчик.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-17
// Вывод в out-17

let arr17 = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];
let out17 = document.querySelector('.out-17');

function f17() {
    let val = 0;
    for (let i = 0; i < arr17.length; i++) {
        if (arr17[i] > 3) {
            val++;
        }
    }
    out17.innerHTML = val;
}

document.querySelector('.b-17').onclick = f17;


// Task 18
// Используя цикл выведите в .out-18 максимальный элемент массива ar18.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-18
// Вывод в out-18

let arr18 = [15, 24, 13, 78, 21, 115, 45, 67];
let out18 = document.querySelector('.out-18');


function f18() {
    let max = arr18[0];
    for (let i = 0; i < arr18.length; i++) {
        if (max < arr18[i]) {
            max = arr18[i];
        }
    }
    out18.innerHTML = max;

}

document.querySelector('.b-18').onclick = f18;


// Task 19
// Выведите в .out-19 индекс минимального элемента в массиве ar19
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-19
// Вывод в out-19

let arr19 = [15, 424, 1, 78, 241, 4, 45, 67];
let out19 = document.querySelector('.out-19');

function f19() {
    let min = arr19[0];
    for (let i = 0; i < arr19.length; i++) {
        if (min > arr19[i]) {
            min = arr19[i];
        }
    }
    out19.innerHTML = min;
}

document.querySelector('.b-19').onclick = f19;

// Task 20
// Выведите в .out-20 сумму элементов в массиве ar20
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-20
// Вывод в out-20

let arr20 = [4, 5, 6, 7, 8, 9, 10];
let out20 = document.querySelector('.out-20');


function f20() {
    sum = 0;
    for (let i = 0; i < arr20.length; i++) {
        sum += arr20[i];
    }
    out20.innerHTML = sum;
}

document.querySelector('.b-20').onclick = f20;
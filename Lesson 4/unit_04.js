// Task 1
// Создайте button.b-1 - при нажатии на него выводите alert с номером задачи. Номер задачи просто пропишите вручную.

function f1() {
    alert(1);
}

document.querySelector('.b-1').onclick = f1;


// Task 2
// Создайте input.b-2 type=button - при нажатии на него выводите alert с номером задачи. Номер задачи просто пропишите вручную.

function f2() {
    alert(2);
}

document.querySelector('.b-2').onclick = f2;


// Task 3
// Создайте p.p-3 - при нажатии на него выводите alert с номером задачи.

function f3() {
    alert(3);
}

document.querySelector('.p-3').onclick = f3;


// Task 4. Создайте input(checkbox).i-4 и button.b-4 - при нажатии на кнопку выводите true если checkbox выбран и false если не выбран. Вывод везде в задачах, где не указано другое, осуществляется в div.out-номер задачи. В данном случае div.out-4

let out4 = document.querySelector('.out-4');

function f4() {
    let check1 = document.querySelector('.i-4');
    if (check1.checked) {
        out4.innerHTML = "true";
    }
    else {
        out4.innerHTML = "false";
    }
}

document.querySelector('.b-4').onclick = f4;

// Task 5.
//Создайте input(checkbox).i-5 и button.b-5. Для checkbox добавьте value="task-5" - при нажатии на кнопку b-5 выводите value checkbox если checkbox выбран и false если не выбран. Вывод везде в задачах, где не указано другое, осуществляется в div.out-номер задачи. В данном случае div.out-5

let out5 = document.querySelector('.out-5');

function f5() {
    let check5 = document.querySelector('.i-5');
    console.log(check5.value)
    if (check5.checked) {
        out5.innerHTML = check5.value;
    }
    else {
        out5.innerHTML = 'не выбран';
    }

}

document.querySelector('.b-5').onclick = f5;


// Task 6. 
//Создайте input(hidden).i-6 и button.b-6 - при нажатии на кнопку выводите value из input в div.out-6

let out6 = document.querySelector('.out-6');
let input6 = document.querySelector('.i-6');

function f6() {
    out6.innerHTML = input6.value;
}

document.querySelector('.b-6').onclick = f6;

// Task 7.
// Создайте input(password).i-7 и button.b-7 - при нажатии на кнопку выводите в div.out-71 value прописанное в input. В .out-72 выводите 1 если длина пароля больше или равна 6 или 0 если меньше. Для подсчета количества символов в строке используйте length.

let out7_1 = document.querySelector('.out-71');
let out7_2 = document.querySelector('.out-72');
let inp7 = document.querySelector('.i-7');


function f7() {
    out7_1.innerHTML = document.querySelector('.i-7').value;

    let inp7 = document.querySelector('.i-7').value;
    console.log(inp7.length);
    if (inp7.length >= 6) {
        out7_2.innerHTML = 1;
    }
    else if (inp7.length < 6) {
        out7_2.innerHTML = 0;
    }

}

document.querySelector('.b-7').onclick = f7;

// Task 8.
// Создайте div.out-8 и кнопку .b-8. При нажатии кнопки создавайте внутри div.out-8 элемент input.i-81 и кнопку .b-81 (innerHTML). Добавьте на созданную кнопку событие клик и запуск функции f81. Функция должна в .out-81 выводить value созданного input.i-81.

let out8 = document.querySelector('.out-8')

function f8() {
    out8.innerHTML = '<div class = "form-control"><input class = "i-81"></input></div>';
    out8.innerHTML += '<button class = "b-81 button-primary">OK</button>';
    console.log(out8);

    function f81() {
        let a = document.querySelector('.out-81');
        a.innerHTML = document.querySelector('.i-81').value;
    }

    document.querySelector('.b-81').onclick = f81;
}

document.querySelector('.b-8').onclick = f8;


// кнопку создаем через ....innerHTML = '<button....</button>
// т.е. как строку и в ставляем на страницу
//  потом получаем кнопку со страницы и вешаем событие
//    вашасозданнаякнопка.onclick = f81;


// Task 9
//Создайте один input(radio).r-9  и button.b-9 - при нажатии на button если radio.r-9 выбран (активен, checked) выводите в .out-9 - value прописанное в r-9, либо 0 если не активен. 

let out9 = document.querySelector('.out-9')
let input9 = document.querySelector('.r-9')

function f9() {
    if (input9.checked) {
        out9.innerHTML = input9.value;
    }
    else {
        out9.innerHTML = 0;
    }

}

document.querySelector('.b-9').onclick = f9;

// Task 10
// >Создайте input(color).i-10 и button.b-10 - при нажатии на кнопку окрашивайте div.out-10 выбранным цветом (имеется ввиду .style.background = ).

let out10 = document.querySelector('.out-10');
let input10 = document.querySelector('.i-10');

function f10() {
    out10.style.background = input10.value;
}

document.querySelector('.b-10').onclick = f10;


// Task     11
//   Создайте input(color).i-111 и input(color).i-112- два элемента и button.b-11 - при нажатии на кнопку присвойте цвет из первого input в value второго.

inp111 = document.querySelector('.i-111');
inp112 = document.querySelector('.i-112');


function f11() {
    inp112.value = inp111.value;
}

document.querySelector('.b-11').onclick = f11;

// Task 12
//   Создайте input(date).i-12 и button.b-12 - при нажатии на кнопку выводите на в  out-12 выбранную в input дату.

let out12 = document.querySelector('.out-12');


function f12() {
    out12.innerHTML = document.querySelector('.i-12').value;

}

document.querySelector('.b-12').onclick = f12;

// Task 13
//  Создайте input(range).i-13. При изменении положения ползунка i-13 выводите значение в out-13. Для события используйте oninput.

let input13 = document.querySelector('.i-13');
let out13 = document.querySelector('.out-13');


function f13() {
    out13.innerHTML = input13.value;
}

document.querySelector('.i-13').oninput = f13;

// Task 14
// Создайте text-area.t-14 и button.b-14 - при нажатии на кнопку выводите на в out-14 текст введенный в t-14.

let out14 = document.querySelector('.out-14');
let tarea14 = document.querySelector('.t-14');

function f14() {
    out14.innerHTML = tarea14.value;
}

document.querySelector('.b-14').onclick = f14;

// Task 15
// Создайте text-area.t-15, input.i-15 и button.b-15 - при нажатии на кнопку выводите текст из input.i-15 в textarea.t-15 и на страницу в out-15.

let out15 = document.querySelector('.out-15');
let input15 = document.querySelector('.i-15');
let tarea15 = document.querySelector('.t-15');

function f15() {
    tarea15.innerHTML = input15.value;
    out15.innerHTML = input15.value;
}

document.querySelector('.b-15').onclick = f15;

// Task 16
// Создайте select.s-16 и button.b-16 - при нажатии на кнопку выводите в out-16 value выбранного option из s-16.

let out16 = document.querySelector('.out-16');
let select16 = document.querySelector('.s-16');


function f16() {
    out16.innerHTML = select16.value;
}

document.querySelector('.b-16').onclick = f16;

// для получения выбранного option просто получите select в переменную и select.value;

// Task 17
// Создайте select.s-17. Добавьте ему событие onchange, при наступлении которого запускается функция f17. Функция должна выводить в out-17 value выбранного в select option.

let out17 = document.querySelector('.out-17');
let select17 = document.querySelector('.s-17');

function f17() {
    out17.innerHTML = select17.value;
}

document.querySelector('.s-17').onchange = f17;

// Task 18
// Создайте select.s-18 и input.i-18. Добавьте на select событие onchange, при наступлении которого запускается функция f18. Функция должна выводить в input i-18 value выбранного в select option.

let input18 = document.querySelector('.i-18');
let select18 = document.querySelector('.s-18');


function f18() {
    input18.value = select18.value;
}

document.querySelector('.s-18').onchange = f18;

// Task 19
// Создайте форму. В ней input(text).i-191 и input(password).i-192 - и кнопку button.b-19. По нажатию кнопки выводите значение text и password в out-19 через пробел. Обратите внимание на хитрость. Мы, кнопку сейчас повесили за пределами формы. Чуть позже мы рассмотрим почему это делали.

let out19 = document.querySelector('.out-19');
let input191 = document.querySelector('.i-191');
let input192 = document.querySelector('.i-192');

function f19() {
    out19.innerHTML = input191.value;
    out19.innerHTML += ' ' + input192.value;
}

document.querySelector('.b-19').onclick = f19;

// Task 20
// Создайте форму .f-20. В ней input(text) и input(password) - и кнопку button.b-20. По нажатию кнопки выводите значение из input text и password в out-20 через пробел. Используйте form.elements (читать)

// очень внимательно изучите верстку!!! 
// обратите внимание, что мы не используем class, а присвоили name!!!
// console.log(form.elements['username'].value); // так можно обратиться к элементу внутри формы
// console.log(form.elements['password'].value)

let out20 = document.querySelector('.out-20');

function f20(event) {
    event.preventDefault(); // чтобы форма не перезагружала страницу!!!!
    let form = document.querySelector('.f-20');
    let uname = form.elements['username'].value;
    let password = form.elements['password'].value;

    out20.innerHTML = uname + ' ' + password;
}

document.querySelector('.b-20').onclick = f20;
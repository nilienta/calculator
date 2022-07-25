// Первый вариант - более простой 
// let op;
// let firstNum;

// function save (){
// 	firstNum = Number(document.querySelector('#num').value);
// 	document.querySelector("#numqwe").innerHTML = firstNum + op;
// 	document.querySelector("#num").innerHTML = firstNum + op;
// 	return firstNum;
// }

// function getRes() {
// 	let secondNum = Number(document.querySelector('#num').value);
// 	let result;
// 	console.log(firstNum,secondNum,op);
// 	switch (op) {
// 		case '+':
// 			result = firstNum + secondNum;
// 			break;
// 			case '-':
// 			result = firstNum - secondNum;
// 			break;
// 			case '*':
// 			result = firstNum * secondNum;
// 			break;
// 			case '/':
// 			result = firstNum / secondNum;
// 			break;
// 	}
// 	document.querySelector("#res").innerHTML = result;
// 	document.querySelector("#numqwe").innerHTML = firstNum + op + secondNum;
// }

// 1 Дописать функцию процентов
// 2 Дописать светлую тему
// 3 Дописать инженерный калькулятор
// 4 Дописать добавление текста там где курсор
// 5 Лучше реализовать +/- посмотреть у Яндекса

let display = document.querySelector("#display");
let clear = false;


document.addEventListener('keydown', function() {
	if (clear) {
		cleaner();
	}	
 });
 
function cleaner() {
	display.value = '';
	clear = false;
	display.focus();
}

function addNum(num) {
	if (clear) {
		cleaner();
	} 
	display.value += num;
}

let line1 = document.querySelector("#line1");
let line2 = document.querySelector("#line2");

function solve() {
	let regexp = /([a-zA-ZА-Яа-я])/;
	if ((regexp.test(display.value))){
		cleaner();
	} else {
		line1.innerHTML = line2.textContent;
		line2.innerHTML = display.value;
		display.value = +eval(display.value).toFixed(6);
		line2.innerHTML += ' = '+ display.value;
		clear = true;
		display.focus();
	}
}


function percent() {
	
}
function sqrt(){
	if (isNaN (display.value)){
		display.value = 'Не число';
		clear = true;
	} else{
		line1.innerHTML = line2.textContent;
		line2.innerHTML = '√' + display.value;
		display.value = +(Math.sqrt(display.value)).toFixed(6);
		line2.innerHTML += ' = '+ display.value;
		clear = true;
	}
}
let mark = true;
function sign() {
	if (mark) {
		addNum ('+');
		mark = false;
	} else {
		addNum ('-');
		mark = true;
	}
}
// с каждым нажиманием на кнопку меняется с + на -
// если происходит клик мышью или кнопкой клавы флаг сбрасывается

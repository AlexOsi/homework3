/**
 * ДЗ-03 
 */

/**
 * 0. Исправь ошибки
 */
"use strict";

function initVal() {
    let s = 'String';
    let a = 10;
    let b = true;
}

/**
 * 1. Напиши функцию которая принимает на вход строку и преобразует ее в строку
 * @param {string} str 
 * 
 * @returns (number)
 */
function stringToNumber(str) {
    /* 1. Напиши функцию которая принимает на вход строку и преобразует ее в строку
    Зачем функции преобразовывать строку в строку?
    Преобразует её в число? (судя по названию) */
    let num = parseInt(str, 10);
	return num;
}

/**
 * 2. Функции возвращают значение val, если оно существует, иначе def
 * @param {*} val
 * @param {*} def
 * 
 * @returns val или def
 */
function checkVal1 (val, def) {
    // 2.1. if ... else
    // Что значит: существует? Не null?
    // И 42, и -42, и 0, и false - все существуют, т.е. не null
	if (val !== null && val !== 0)
		return val;
	return def;
}

function checkVal2 (val, def) {
    // 2.2. тернарный оператор
    let result;
    result = (val !== null && val !== 0) ? val : def;
    return result;
}

function checkVal3 (val, def) {
    // 2.3. логическое или
    let result = val || def; // ?
	return result;
}

/**
 * 3. Фунция рендера
 * @param {string} title
 * @param {number} width
 * @param {number} height
 * @param {bool} isBox
 * 
 * @returns {string} строка формата 'Товар title, шириной width, высотой height, коробка' или '... не коробка'
 */

function renderItem (title = '', width = 0, height = 0, isBox = false) {
    if (width === null) {
        width = 0;
    }
    if (height === null) {
        height = 0;
    }
    let resultStr = `Товар ${title}, шириной ${width}, высотой ${height}`;
    if (isBox) {
        resultStr += ', коробка';
    } else {
        resultStr += ', не коробка';
    }
    return resultStr;
}


/**
 * 4. Напиши функцию oddNum с помощью цикла for
 * @param {number} max максимальное число
 * 
 * @returns {string} только не четные 1 3 5 7 9 ...max 
 */
function oddNum (max) {
    let resultStr = '';
    for (let i = 0; i <= max; i++)
    {
        if (i % 2 !== 0)
        {
            resultStr += i + ' ';
        }
    }
    return resultStr.trim();
}

/**
 * 5. Напиши функцию factorial рекурсивно
 * @param {number} n максимальное число для вычисления
 * 
 * @returns {number} факториал 
 */
function factorial(n) {
    if (n == 1) {return 1}
    return n*factorial(n-1);
}


module.exports = {
    initVal,
    stringToNumber,
    renderItem,
    checkVal1,
    checkVal2,
    checkVal3,
    oddNum,
    factorial
};

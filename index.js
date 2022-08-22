// 1. Запросите у пользователя его имя и выведите в ответ: 
// «Привет, name!».
let userName = prompt('Введите Ваше имя?', '');
alert(`Привет ${userName}!`);


// 2. Запросите у пользователя год его рождения, посчитайте, 
// сколько ему лет и выведите результат. Текущий год укажите 
// в коде как константу.
let yearOfBirthUser = prompt("Укажите Ваш год рождения", "");
const thisYear = 2022;
let summa = Number(thisYear) - Number(yearOfBirthUser);
alert(`Ваш возраст ${summa} лет!`);


// 3. Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата. 
let squareLengthFromUser = prompt("Укажите длину стороны квадрата", "");
let summa = Number(squareLengthFromUser) * 4;
alert(`Периметр Вашего квадрата равен ${summa}`);


// 4. Запросите у пользователя радиус окружности и выведите 
// площадь такой окружности.
let squareLengthFromUser = prompt("Укажите радиус окружности", "");
let summa = Number(squareLengthFromUser) * 2;
alert(`Площадь Вашей окружности ${summa}`);


// 5. Запросите у пользователя расстояние в км между двумя 
// городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы 
// успеть вовремя.
let distanceBetweenCities = prompt("Укажите растояние между городами в км", "");
let travelTime = prompt ('Укажите время за которое Вы хотите проехать весь маршрут в часах', "");
let summa = Number(distanceBetweenCities) / Number(travelTime);
let speedRounding = summa.toFixed(1);
alert (`Скорость с которой необходимо двигаться чтобы 
успеть вовремя составляет ${speedRounding} км/ч`);


// 6. Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в 
// константе.
let amountToConvert = prompt("Введите сумму в долларах которую Вы ходите поменять на евро", "");
const euroExchangeRate = ("1.02");
let currencyConversion = Number(amountToConvert) * Number(euroExchangeRate);
alert(`Общая сумма составит ${currencyConversion} евро`);


// 7. Пользователь указывает объем флешки в Гб. Программа 
// должна посчитать сколько файлов размером в 820 Мб помещается на флешку
let flashUser = prompt('Укажите объем флешки в ГБ', '');
const flashDriveVolume = flashUser * 1024;
let fileSize = 820;
let summa = Number(flashDriveVolume) / fileSize;
let amountOfFiles = Math.floor(summa);
alert(`На Вашу флешку поместиться ${amountOfFiles} файла по 820 МБ`);


// 8. Пользователь вводит сумму денег в кошельке и цену одной 
// шоколадки. Программа выводит сколько шоколадок может 
// купить пользователь и сколько сдачи у него останется. 
let theAmountEnteredByTheUser = prompt('Введите сумму денег в своем кошельке', '');
let chocolatePrice = prompt('Укажите цену одной шоколадки', '');
let summa = Number(theAmountEnteredByTheUser) / Number(chocolatePrice);
let amountOfChocolates = Math.floor(summa);
let theRestOfMoney = theAmountEnteredByTheUser - (amountOfChocolates * chocolatePrice);
alert(`Вы купите ${amountOfChocolates} шоколадок и у Вас останеться ${theRestOfMoney} грн`);


// 9. Запросите у пользователя трехзначное число и выведите 
// его задом наперед. Для решения задачи вам понадобится 
// оператор % (остаток от деления). - конкатинация
let numberUser = prompt("Укажите техзначное число", "");
let thirdNumber = numberUser % 10;
numberUser = (numberUser - thirdNumber) / 10;
let secondNumber = numberUser % 10;
numberUser = (numberUser - secondNumber) / 10;
alert(`Ваши цифры задом на перед ${thirdNumber} ${secondNumber} ${numberUser}`);


// 10. Запросите у пользователя целое число и выведите в ответ, 
// четное число или нет. В задании используйте логические 
// операторы. В задании не надо использовать if или switch
let number = prompt("Укажите целое число", "");
number % 2 === 0 ? alert('Вы указали четное число') : alert('Вы указали нечетное число');
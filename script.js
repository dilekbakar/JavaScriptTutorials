// JavaScript source code
// String metodlari
let str = 'Hello, World!';

// length: Dizinin uzunlu�unu verir
let length = str.length;
console.log('Length:', length);

// substring: Belirli bir alt dizesini alir
let substring = str.substring(7);
console.log('Substring:', substring);

// toUpperCase: Metni b�y�k harflere d�n�st�r�r
let upperCase = str.toUpperCase();
console.log('Upper Case:', upperCase);

// includes: Metinde belirli bir alt dizinin varli�ini kontrol eder
let includesWorld = str.includes('World');
console.log('Includes "World":', includesWorld);


// Dizi (Array) metodlari
let numbers = [1, 2, 3, 4, 5];

// push: Diziye yeni bir eleman ekler
numbers.push(6);
console.log('Pushed Array:', numbers);

// pop: Dizinin son elemanini cikarir
let poppedElement = numbers.pop();
console.log('Popped Element:', poppedElement);

// join: Diziyi birlestirerek string haline getirir
let joinedArray = numbers.join(',');
console.log('Joined Array:', joinedArray);

// forEach: Dizi elemanlari �zerinde d�ng� islemi yapar
numbers.forEach(function (number) {
    console.log('Number:', number);
});


// Matematiksel metodlar
let num = 4.7;

// Math.floor: Sayiyi asa�iya yuvarlar
let floorValue = Math.floor(num);
console.log('Floor:', floorValue);

// Math.ceil: Sayiyi yukariya yuvarlar
let ceilValue = Math.ceil(num);
console.log('Ceil:', ceilValue);

// Math.random: 0 ile 1 arasinda rastgele sayi �retir
let randomValue = Math.random();
console.log('Random:', randomValue);


// Zaman metodlari
// Date.now: su anki zamani milisaniye cinsinden verir
let currentTime = Date.now();
console.log('Current Time:', currentTime);

// setTimeout: Belirli bir s�re sonra bir fonksiyonu calistirir
setTimeout(function () {
    console.log('Delayed function');
}, 2000);

// setInterval: Belirli araliklarla bir fonksiyonu tekrar tekrar calistirir
setInterval(function () {
    console.log('Interval function');
}, 1000);


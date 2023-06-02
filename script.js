// JavaScript source code
// String metodlar�
let str = 'Hello, World!';

// length: Dizinin uzunlu�unu verir
let length = str.length;
console.log('Length:', length);

// substring: Belirli bir alt dizesini al�r
let substring = str.substring(7);
console.log('Substring:', substring);

// toUpperCase: Metni b�y�k harflere d�n��t�r�r
let upperCase = str.toUpperCase();
console.log('Upper Case:', upperCase);

// includes: Metinde belirli bir alt dizinin varl���n� kontrol eder
let includesWorld = str.includes('World');
console.log('Includes "World":', includesWorld);


// Dizi (Array) metodlar�
let numbers = [1, 2, 3, 4, 5];

// push: Diziye yeni bir eleman ekler
numbers.push(6);
console.log('Pushed Array:', numbers);

// pop: Dizinin son eleman�n� ��kar�r
let poppedElement = numbers.pop();
console.log('Popped Element:', poppedElement);

// join: Diziyi birle�tirerek string haline getirir
let joinedArray = numbers.join(',');
console.log('Joined Array:', joinedArray);

// forEach: Dizi elemanlar� �zerinde d�ng� i�lemi yapar
numbers.forEach(function (number) {
    console.log('Number:', number);
});


// Matematiksel metodlar
let num = 4.7;

// Math.floor: Say�y� a�a��ya yuvarlar
let floorValue = Math.floor(num);
console.log('Floor:', floorValue);

// Math.ceil: Say�y� yukar�ya yuvarlar
let ceilValue = Math.ceil(num);
console.log('Ceil:', ceilValue);

// Math.random: 0 ile 1 aras�nda rastgele say� �retir
let randomValue = Math.random();
console.log('Random:', randomValue);


// Zaman metodlar�
// Date.now: �u anki zaman� milisaniye cinsinden verir
let currentTime = Date.now();
console.log('Current Time:', currentTime);

// setTimeout: Belirli bir s�re sonra bir fonksiyonu �al��t�r�r
setTimeout(function () {
    console.log('Delayed function');
}, 2000);

// setInterval: Belirli aral�klarla bir fonksiyonu tekrar tekrar �al��t�r�r
setInterval(function () {
    console.log('Interval function');
}, 1000);


// JavaScript source code
// String metodlari
let str = 'Hello, World!';

// length: Dizinin uzunluðunu verir
let length = str.length;
console.log('Length:', length);

// substring: Belirli bir alt dizesini alir
let substring = str.substring(7);
console.log('Substring:', substring);

// toUpperCase: Metni büyük harflere dönüstürür
let upperCase = str.toUpperCase();
console.log('Upper Case:', upperCase);

// includes: Metinde belirli bir alt dizinin varliðini kontrol eder
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

// forEach: Dizi elemanlari üzerinde döngü islemi yapar
numbers.forEach(function (number) {
    console.log('Number:', number);
});


// Matematiksel metodlar
let num = 4.7;

// Math.floor: Sayiyi asaðiya yuvarlar
let floorValue = Math.floor(num);
console.log('Floor:', floorValue);

// Math.ceil: Sayiyi yukariya yuvarlar
let ceilValue = Math.ceil(num);
console.log('Ceil:', ceilValue);

// Math.random: 0 ile 1 arasinda rastgele sayi üretir
let randomValue = Math.random();
console.log('Random:', randomValue);


// Zaman metodlari
// Date.now: su anki zamani milisaniye cinsinden verir
let currentTime = Date.now();
console.log('Current Time:', currentTime);

// setTimeout: Belirli bir süre sonra bir fonksiyonu calistirir
setTimeout(function () {
    console.log('Delayed function');
}, 2000);

// setInterval: Belirli araliklarla bir fonksiyonu tekrar tekrar calistirir
setInterval(function () {
    console.log('Interval function');
}, 1000);


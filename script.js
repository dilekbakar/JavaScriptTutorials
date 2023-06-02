// JavaScript source code
// String metodlarý
let str = 'Hello, World!';

// length: Dizinin uzunluðunu verir
let length = str.length;
console.log('Length:', length);

// substring: Belirli bir alt dizesini alýr
let substring = str.substring(7);
console.log('Substring:', substring);

// toUpperCase: Metni büyük harflere dönüþtürür
let upperCase = str.toUpperCase();
console.log('Upper Case:', upperCase);

// includes: Metinde belirli bir alt dizinin varlýðýný kontrol eder
let includesWorld = str.includes('World');
console.log('Includes "World":', includesWorld);


// Dizi (Array) metodlarý
let numbers = [1, 2, 3, 4, 5];

// push: Diziye yeni bir eleman ekler
numbers.push(6);
console.log('Pushed Array:', numbers);

// pop: Dizinin son elemanýný çýkarýr
let poppedElement = numbers.pop();
console.log('Popped Element:', poppedElement);

// join: Diziyi birleþtirerek string haline getirir
let joinedArray = numbers.join(',');
console.log('Joined Array:', joinedArray);

// forEach: Dizi elemanlarý üzerinde döngü iþlemi yapar
numbers.forEach(function (number) {
    console.log('Number:', number);
});


// Matematiksel metodlar
let num = 4.7;

// Math.floor: Sayýyý aþaðýya yuvarlar
let floorValue = Math.floor(num);
console.log('Floor:', floorValue);

// Math.ceil: Sayýyý yukarýya yuvarlar
let ceilValue = Math.ceil(num);
console.log('Ceil:', ceilValue);

// Math.random: 0 ile 1 arasýnda rastgele sayý üretir
let randomValue = Math.random();
console.log('Random:', randomValue);


// Zaman metodlarý
// Date.now: Þu anki zamaný milisaniye cinsinden verir
let currentTime = Date.now();
console.log('Current Time:', currentTime);

// setTimeout: Belirli bir süre sonra bir fonksiyonu çalýþtýrýr
setTimeout(function () {
    console.log('Delayed function');
}, 2000);

// setInterval: Belirli aralýklarla bir fonksiyonu tekrar tekrar çalýþtýrýr
setInterval(function () {
    console.log('Interval function');
}, 1000);


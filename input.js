const prompt = require('prompt-sync')({sigint: true });

//Input data first number -> const (var) num1
const num1 = prompt('Enter a first number: ');
//Input data second number -> const (var) num2
const num2 = prompt('Enter a second number: ');

//Print informasi
console.log('first number + second number =');

//Perhitungan penjumlahan
//Convert ke number/int/float untuk melakukan penjumlahan angka
console.log(Number(num1) + Number(num2));

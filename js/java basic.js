//Javascript básico
/* Este es el primer archivo de Javascript, para comenzar a probar sus herramientas.
Veremos como definir funciones, ya sea con parámetros o sin ellos. */

//Definición de variables

var numero = 80;
var texto= 'Mallorca';
var verdadero= 'True';
var falso= 'False';
var lista= [2, 4, 6, 8, 10, 12, 14,];
var objeto= {
    Nombre: 'Soledad',
    Ciudad: 'Esporles',
    CP: 07190
    }

var parrafo= "Curso de Javascript dictado por 'Toni Ferrá' de 2020"
console.log (parrafo);

var ciudad= 'Palma de Mallorca'
var pueblo= 'Esporles' 


//Definición de funciones expresivas y declarativas

function saludo () {
    return 'Hola';
}

function despedida () {
    return'Adiós';
}

var welcome = function () {
    return 'Hi';
}

var goodbye = function () {
    return 'Good bye';
}


//Definición de funciones con parámetros

function suma (n1, n2) {
       console.log(n1 + n2);
}

function resta (n1, n2) {
       console.log(`El resultado de la resta es: ${n1 - n2}`);
}

function multiplicar (n1, n2) {
        console.log(`El resultado de la multiplicación es: ${n1 * n2}`);
}

function dividir (n1, n2) {
    var resultado= n1 / n2;
    console.log(`El resultado de la división es: ${n1 / n2}`);
}

function resto (n1, n2) {
    var resultado= n1 % n2;
    console.log(`El resultado del resto es: ${n1 % n2}`);
}


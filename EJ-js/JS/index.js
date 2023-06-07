/*let a = 3;
let b = 2;

console.log(a + b);

Ejercicio 2
let radio = 3;
let area = Math.PI * radio**2;
console.log(area)

Ejercicio 3

let base = 5;
let altura = 3;
let area = base * altura / 2;
console.log(area)

Ejercicio 4
let Celcius = 20;
let Fahrenheit = Celcius*9/5 + 32;
console.log(Fahrenheit)

Ejercicio 5
let producto = 30;
let descuento = 10;

let precio = (producto * descuento) / 100
console.log(precio)

Ejercicio 6
let num = prompt("ingrese un numero");
if(num % 2 == 0) {
    console.log("Tu numero es par");
}else if (num % 2 == 1) {
    console.log("Tu numero es impar");
}

Ejercicio 7
let edad = prompt("ingrese un numero");
if(edad >= 18) {
    console.log("Eres mayor de edad");
}else {
    console.log("Eres menor de edad");
}
Ejercicio 8
let num1 = prompt("ingrese un numero");
let num2 = prompt("ingrese un numero");
let num3 = prompt("ingrese un numero");

console.log(Math.max(num1, num2, num3))

Ejercicio 9
let num = prompt("ingrese un numero");
if(num > 0 ) {
    console.log("Tu numero es positivo");
}else if (num < 0 ) {
    console.log("Tu numero es negativo");
}else{
    console.log("Tu numero es 0");
}
Ejercicio 10*/
// let dia;
// dia = +prompt("Introduce el numero del dia de la semana");

// switch (dia){

//     case 1:
//     alert("El dia es Lunes");
//     break;

//     case 2:
//     alert("El dia es Martes");
//     break;

//     case 3:
//     alert("El dia es Miercoles");
//     break;

//     case 4:
//     alert("El dia es Jueves");
//     break;

//     case 5:
//     alert("El dia es Viernes");
//     break;

//     case 6:
//     alert("El dia es Sabado");
//     break;

//     case 7:
//     alert("El dia es Domingo");
//     break;
// }

/*Ejercicio 11
let num = prompt("ingrese un numero");
if((num % 3 ) == 0  ) {
    console.log("Tu numero es divisible entre 3");
}else{
    console.log("Tu numero no es divisible entre 3");
}
Ejercicio 12
let nota = prompt("ingrese la nota del examen");
if(nota >= 70 ) {
    console.log("Has aprobado");
}else{
    console.log("No has aprobado");
}
Ejercicio 13
let num1 = prompt("ingrese un numero por pantalla");
let num2 = prompt();

if(num1 == num2 ) {
    alert("son iguales");
}else{
    alert("Son diferentes");
}
Ejercicio 14*/
// let mes;
// mes = +prompt("Introduce el numero del mes");

// switch (mes) {
//   case 1:
//     alert("Enero");
//     break;

//   case 2:
//     alert("Febrero");
//     break;

//   case 3:
//     alert("Marzo");
//     break;

//   case 4:
//     alert("Abril");
//     break;

//   case 5:
//     alert("Mayo");
//     break;

//   case 6:
//     alert("Junio");
//     break;

//   case 7:
//     alert("Julio");
//     break;

//   case 8:
//     alert("Agosto");
//     break;

//   case 9:
//     alert("Septiembre");
//     break;

//   case 10:
//     alert("Octubre");
//     break;

//   case 11:
//     alert("Noviembre");
//     break;

//   case 12:
//     alert("Dicembre");
//     break;
// }

// Ejercicio 15 ano bisiesto

// let a = +prompt("Introduce el año");

// if (a % 400 == 0 || a % 4 == 0 && a % 100 != 0) {
//     alert("Es biciesto")
// } else {
//     alert("No es biciesto")
// }

// Ejercicio 16
// let i;
// for (i = 1; i <= 10; i++) {
//   console.log(i);
// }
// Ejercicio 17

// let valor = +prompt("Introduce la cantidad");
// let i = 0;

// while (i < valor) {
// i+=2; 
//     console.log(i);
// }
// Ejercicio 18

// let valor = +prompt("Introduce la cantidad");
// let cantidad = 0;
// let i = 0;

// do { cantidad += i;
//     i++
//     console.log(i + " + " + cantidad + " = " + (i + cantidad)) 
// } while (i < valor);

// Ejercicio 19

// for (let i = 0; i <= 20; i++ ) {
//     if (i % 2 == 1) {
//         console.log(i);
//     }  
// }
// Ejercicio 20

// let valor = +prompt("Introduce la cantidad");

// while (valor >= 2) {
//     console.log(valor);
// valor-=2;
// }

//--------------ARRAYS---------------
// Ejercicio 1
// let array = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
// let random = Math.floor(Math.random() * array.length);

// console.log(array[random]);

    let array = []
        for (let i = 0; i < 100; i++) {
            array.push(Math.floor(Math.random())*1000 + 1)
            
        }
// EJERCICIO 1

function uno(number) {
  if (number % 2 === 0) {
    console.log("El número " + number + " es par.");
  } else {
    console.log("El número " + number + " es impar.");
  }
}
uno(1);

// EJERCICIO 2

function dos(number1, number2) {
  if (number1 > number2) {
    console.log(number1 + " es mayor a " + number2);
  } else if (number1 < number2) {
    console.log(number1 + " es menor a " + number2);
  } else {
    console.log("Ambos números son iguales.");
  }
}

dos(3, 3);

// EJERCICIO 3

function tres(number) {
  if (number % 5 === 0) {
    console.log(number + " es múltiplo de 5");
  } else {
    console.log(number + " no es múltiplo de 5");
  }
}

tres(5);

// EJERCICIO 4

function cuatro(number) {
  for (let i = 0; i <= number; i++) {
    console.log(i);
  }
}

cuatro(4);

// EJERCICIO 5

function cinco(word, number) {
  for (let i = 0; i < number; i++) {
    console.log(word);
  }
}

cinco("Ejercicio 4", 4);

// EJERCICIO 6

const array = [1, 4, 7, 10, 6, 8];

function seis(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

seis(array);

// EJERCICIO 7

const miArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function siete(array) {
  for (let i = 0; i < array.length; i++) {
    if (i !== 4) {
      console.log(array[i]);
    }
  }
}

siete(miArray);

// EJERCICIO 8

const otroArray = [1, 2, 3, 4, 5];

function ocho(array, number) {
  for (let i = 0; i < array.length; i++) {
    const result = array[i] * number;
    console.log(result);
  }
}

ocho(otroArray, 2);

// Esto es un comentario de una línea

/* 
Esto es un comentario
múltiples 
líneas.
*/




//!   VARIABLES

//* let
// Se usa para crear valores que pueden ser cambiados en un futuro.

//  Declarando una variable (let / var (no recomendada) / const)
let anioActual

//  Inicializando una variable; le doy un valor, por ej Númerico
anioActual = 2023

//  Además, pueden haber valores de tipo String
let nombre = 'Lucas'

//  De tipo booleano (Verdadero o falso)
let mayorDeEdad = true
let desempleado = false

//  De tipo array (listas)
let animales = ['perro', 'gato']

//  De tipo objeto
let auto = {
  marca: 'Ford',
  nombre: 'Mustang',
  modelo: '1978'
}

//  Tipo vacío (null)
let empty = null


//* const
// Se usa para crear valores que no serán cambiados.

const url = 'https://github.com/LucasCapde'





//!   MODIFICAR EL CONTENIDO DE UNA VARIABLE
//  Se puede reasignar el valor de una variable let/var

anioActual = 2030
console.log(anioActual);





//!   MENSAJES EN CONSOLA
//  Para ver en la consola del navegador lo que estamos haciendo en JS, usamos el comando console.log

console.log(anioActual);
console.log(url);
console.log('Este es un mensaje en consola');
console.log('Año: ' + (anioActual + 2));





//!   MENSAJES EN DOCUMENTO
//  Podemos mostrar contenido en el html desde JS

document.write('<h1>Título mostrado por pantalla desde JavaScript</h1>')
document.write('Año: ' + anioActual + '<br>')
document.write('Año: ' + anioActual)





//!   VENTANAS EMERGENTES
//  Usamos ventanas emergentes para interactuar con el usuario

/* alert('Esto es una ventana emergente')



  *Además podemos guardar en variables datos que pediremos al usuario

let color = prompt('Escribe tu color preferido')
console.log(color);
*/


//  Solicitar al usuario un número, y al número indicado por el usuario multiplicarle 15
let numUsuario = parseInt(prompt('Ingrese un número de 1 a 100'))
console.log(numUsuario);
console.log(numUsuario + 15);

/*  
Al hacer una suma, JS concatenará los valores ya que toma el return del prompt como un string. Para solucionar esto, debo parsear los valores:

parseInt('10') devuelve 10 (funciona solo para números enteros)
parseFloat('10.5') devuelve 10.5 (se puede aplicar a números decimales)
*/  

//  En caso que el usuario ingrese texto, parseInt no sabe interpretarlo y retorna NaN (Not a Number)
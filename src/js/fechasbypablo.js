// const fecha  = new Date();
// console.log(fecha);

// // const juanjoBD = new Date(2005,8,1);
// // console.log(juanjoBD);


// const juanjoBDString = new Date("09/01/2005");
// console.log(juanjoBDString);

// const dia = fecha.getDate();
// console.log(dia);

// const month = fecha.getMonth() +1;
// console.log(month);

// const fullYear = fecha.getFullYear();
// console.log(fullYear);

// const year = fecha.getYear();
// console.log(year);

// const diaSemana = fecha.getDay();
// console.log(diaSemana);

// const hora = fecha.getHours();
// console.log(hora);

// const minutos = fecha.getMinutes();
// console.log(minutos);

// const segundos = fecha.getSeconds();
// console.log(segundos);

// const ms = fecha.getMilliseconds();
// console.log(ms);



// // const usuario = new Date(prompt("Ingrese una fecha: " , "MM/DD/YYYY"));
// // fechaUsuario = new Date(usuario)
// // console.log(usuario);

// console.log(fecha.getTime());

// const dias5 = fecha.setDate(fecha.getDate()+ 5);

// console.log(new Date(dias5));

// console.log(fecha);

// const diasPrestamo = parseInt(prompt("Ingrese la cantidad de dias del prestamo: "));

// const fechaDevolucion = new Date();

// fechaDevolucion.setDate(fechaDevolucion.getDate() + diasPrestamo)

// console.log(fechaDevolucion);


// const fechaBD = new Date (prompt("Ingrese su fecha de nacimiento","MM/DD/YYYY"))
// const fechaActual = new Date()

// const anios = (fechaActual.getFullYear()-fechaBD.getFullYear());

// const anios2 = Math.floor((fechaActual - fechaBD)/(1000*3600*24*365))

// console.log(anios2);

// Ejercicio 2
console.log("Ejercicio 2");

const fechaCumpleanosString = prompt("Ingrese la fecha de cumpleaños: " , "MM/DD/YYYY");
const fechaCumpleanos = new Date(fechaCumpleanosString);

console.log(fechaCumpleanos);
 
const fecha  = new Date()
const conteo = (fechaCumpleanos - fecha)/(1000*3600*24);
console.log(conteo);
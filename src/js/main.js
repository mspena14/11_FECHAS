console.group("Fechas")
const fecha = new Date()
console.log(fecha)

const fecha2 = new Date(2005,8,1)//Asignar fecha separando por "," se coloca el mes anterior ya que inicia a contar desde "0"
console.log(fecha2)

const fecha3 = new Date("09/01/2005")//Asignar fecha separando por "/" y entre "" se coloca el mismo mes
console.log(fecha3)

const dia = fecha.getDate()// Devuelve el día del mes entre 1 - 31
console.log(dia)

const dia2 = fecha.getDay()// Devuelve el día de la semana entre 0 - 6 de domingo a sabado
console.log(dia2)

const month = (fecha.getMonth() + 1)
console.log(month)

const year = fecha.getYear() //Devuelve la fecha en 3 cifras ya que empieza a contar desde el 1900
console.log(year)

const fullYear = fecha.getFullYear()
console.log(fullYear)   

const hours = fecha.getHours()
console.log(hours)

const minutes = fecha.getMinutes()
console.log(minutes)

const seconds = fecha.getSeconds()
console.log(seconds)

const miliseconds = fecha.getMilliseconds()
console.log(miliseconds)


const fechaUsuario = new Date(prompt("Ingrese la fecha: ", "MM/DD/YYYY"))// Pedir una fecha con placeholder para indicar el formato
console.log(fechaUsuario)

const dias5 = fecha.setDate(fecha.getDate() + 5)
console.log(dias5)
console.log(new Date(dias5))

console.group("Ejemplo 1")
const diasPrestamo = parseInt(prompt("Ingrese la cantidad de días que va a prestrar el libro"))
const fechaDevolucion = new Date()
fechaDevolucion.setDate(fechaDevolucion.getDate() + diasPrestamo)
console.log(fechaDevolucion)
console.groupEnd()
console.groupEnd() 


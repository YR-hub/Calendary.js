// La fecha de hoy
const fechaHoy = new Date();

// La fecha de tu nacimiento
const fechaNacimiento = new Date('1990-07-15');

// Variable que indica si hoy es más tarde que la fecha de tu nacimiento
const esMasTarde = fechaHoy > fechaNacimiento;

// Variable que contiene el día de tu nacimiento
const diaNacimiento = fechaNacimiento.getDate();

// Variable que contiene el mes de tu nacimiento (recuerda que Enero es mes 0)
const mesNacimiento = fechaNacimiento.getMonth();

// Variable que contiene el año de tu nacimiento (con 4 dígitos)
const anioNacimiento = fechaNacimiento.getFullYear();

// Imprimir los resultados
console.log('Fecha de hoy:', fechaHoy);
console.log('Fecha de nacimiento:', fechaNacimiento);
console.log('¿Hoy es más tarde que la fecha de nacimiento?', esMasTarde);
console.log('Día de nacimiento:', diaNacimiento);
console.log('Mes de nacimiento:', mesNacimiento);
console.log('Año de nacimiento:', anioNacimiento);

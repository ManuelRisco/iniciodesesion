// Define una variable isOnline con valor inicial false
let isOnline = false;

// Pregunta al usuario si está conectado
let respuesta = prompt('¿Estás conectado? (Responde con "SI" o "NO"):');

// Convierte la respuesta a mayúsculas para facilitar la comparación
let respuestaMayus = respuesta.toUpperCase();

// Verifica si la respuesta es "SI" y si isOnline es false
if (respuestaMayus === "SI" && !isOnline) {
    isOnline = true; // Cambia el valor de isOnline a true
}

// Muestra un mensaje dependiendo del estado de isOnline
if (isOnline) {
    console.log("El usuario está conectado. Mostrando el 'template'.");
} else {
    console.log("El usuario no está conectado. Ocultando el 'template'.");
}

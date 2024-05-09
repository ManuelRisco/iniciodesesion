// Define el array con datos personales
const datosPersonales = ["risco", 19, "estudiante", "chorrillos", "jugar con sus amigos"];

// Accede al contenedor con id "datos"
const contenedorDatos = document.querySelector("#datos");

// Usa template strings para crear el contenido HTML
const contenidoHTML = `
    <h2>Perfil del Usuario</h2>
    <p><strong>Nombre:</strong> ${datosPersonales[0]}</p>
    <p><strong>Edad:</strong> ${datosPersonales[1]} años</p>
    <p><strong>Profesión:</strong> ${datosPersonales[2]}</p>
    <p><strong>Ubicación:</strong> ${datosPersonales[3]}</p>
    <p><strong>Hobby:</strong> ${datosPersonales[4]}</p>
`;

// Asigna el contenido HTML al contenedor "datos"
contenedorDatos.innerHTML = contenidoHTML;

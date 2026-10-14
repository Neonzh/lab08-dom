// Tarea - Versión 1: solo DOM
console.log("app.js de la tarea (v1) cargado");

// Seleccionar elementos del DOM
const listaTareas = document.querySelector("#listaTareas");
const contadorTareas = document.querySelector("#contadorTareas");

// Crear un elemento estático de prueba usando createElement y appendChild (solo DOM)
const tareaInicial = document.createElement("li");
tareaInicial.innerHTML = `
    <span>Aprender DOM y Eventos</span>
    <button class="btn-eliminar">Eliminar</button>
`;
listaTareas.appendChild(tareaInicial);

// Actualizar contador estático
contadorTareas.textContent = "1";

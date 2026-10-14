// Tarea - Versión 2: con eventos
console.log("app.js de la tarea (v2) cargado");

const formTarea = document.querySelector("#formTarea");
const inputTarea = document.querySelector("#inputTarea");
const listaTareas = document.querySelector("#listaTareas");
const contadorTareas = document.querySelector("#contadorTareas");
const mensajeError = document.querySelector("#mensajeError");

let totalTareas = 0;

function actualizarContador(valor) {
  totalTareas = valor;
  contadorTareas.textContent = totalTareas;
}

// Evento submit para agregar tarea con validación
formTarea.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const texto = inputTarea.value.trim();

  // Validación: si está vacío, muestra error en la página
  if (texto === "") {
    mensajeError.classList.add("visible");
    return;
  }

  // Ocultar error si pasa la validación
  mensajeError.classList.remove("visible");

  // Crear elemento dinámicamente con createElement
  const li = document.createElement("li");
  li.innerHTML = `
        <span>${texto}</span>
        <button class="btn-eliminar">Eliminar</button>
    `;

  // Evento click para eliminar la tarea individualmente
  const btnEliminar = li.querySelector(".btn-eliminar");
  btnEliminar.addEventListener("click", () => {
    li.remove();
    actualizarContador(totalTareas - 1);
  });

  // Evento click opcional para marcar como completada
  li.addEventListener("click", (e) => {
    if (e.target.tagName !== "BUTTON") {
      li.classList.toggle("completada");
    }
  });

  listaTareas.appendChild(li);
  actualizarContador(totalTareas + 1);

  // Limpiar formulario
  formTarea.reset();
});

// Tarea - Versión 3: con clases y objetos
console.log("app.js de la tarea (v3) cargado");

// Definición de la clase propia con constructor, atributos y métodos (Requisito del laboratorio)
class TareaItem {
  constructor(texto) {
    this.texto = texto;
    this.completada = false;
  }

  // Método 1: Cambiar estado de completado
  alternarEstado() {
    this.completada = !this.completada;
  }

  // Método 2: Generar el nodo HTML correspondiente al objeto
  obtenerHtml(onEliminar) {
    const li = document.createElement("li");
    li.innerHTML = `
            <span>${this.texto}</span>
            <button class="btn-eliminar">Eliminar</button>
        `;

    // Evento click para eliminar usando el callback
    const btnEliminar = li.querySelector(".btn-eliminar");
    btnEliminar.addEventListener("click", () => {
      onEliminar();
      li.remove();
    });

    // Evento click para marcar como completada
    li.addEventListener("click", (e) => {
      if (e.target.tagName !== "BUTTON") {
        this.alternarEstado();
        li.classList.toggle("completada", this.completada);
      }
    });

    return li;
  }
}

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

// Evento submit para procesar el formulario
formTarea.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const texto = inputTarea.value.trim();

  // Validación obligatoria en pantalla (sin alert)
  if (texto === "") {
    mensajeError.classList.add("visible");
    return;
  }

  mensajeError.classList.remove("visible");

  // Instanciar un objeto a partir de la clase TareaItem
  const nuevaTarea = new TareaItem(texto);

  // Agregar el elemento al DOM utilizando el método del objeto
  const elementoLi = nuevaTarea.obtenerHtml(() => {
    actualizarContador(totalTareas - 1);
  });

  listaTareas.appendChild(elementoLi);
  actualizarContador(totalTareas + 1);

  formTarea.reset();
});

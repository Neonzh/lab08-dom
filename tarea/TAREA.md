# Tarea: Mi componente interactivo

## Componente elegido

Una **Lista de Tareas Interactiva (To-Do List)** que permite al usuario gestionar pendientes mediante un entorno web dinámico.

## Version 1: solo DOM

- **Qué agregué:** La estructura HTML base con los contenedores y el uso inicial de métodos de selección y creación en JavaScript (`document.querySelector`, `document.createElement`, `appendChild`).
- **Por qué:** Para entender cómo interactúa de forma estática el árbol de nodos del DOM con la interfaz visual antes de integrar la lógica de respuesta a eventos de usuario.
- **Qué cambió en la pantalla:** Al cargar la página, se renderiza automáticamente una tarea de ejemplo inicial de prueba y el contador estático se actualiza a "1".
- **Código principal:**

```javascript
// Tarea - Versión 1: solo DOM
const listaTareas = document.querySelector("#listaTareas");
const contadorTareas = document.querySelector("#contadorTareas");

const tareaInicial = document.createElement("li");
tareaInicial.innerHTML = `
    <span>Aprender DOM y Eventos</span>
    <button class="btn-eliminar">Eliminar</button>
`;
listaTareas.appendChild(tareaInicial);
contadorTareas.textContent = "1";
```

## Version 2: con eventos

- **Qué agregué:** Escuchadores de eventos (`addEventListener`) para el envío del formulario (`submit`), la validación del campo de texto vacío con mensajes en pantalla, y eventos `click` para eliminar o completar tareas de forma interactiva.
- **Por qué:** Para permitir que la interfaz reaccione dinámicamente a las acciones del usuario en tiempo real sin necesidad de recargar la página web.
- **Qué cambió en la pantalla:** El usuario ahora puede escribir sus propias tareas en el input, hacer clic en "Agregar", ver un mensaje de error en rojo si intenta enviar el formulario vacío, y eliminar o tachar tareas existentes con el mouse.
- **Código principal:**

```javascript
// Tarea - Versión 2: con eventos
const formTarea = document.querySelector("#formTarea");
const inputTarea = document.querySelector("#inputTarea");
const listaTareas = document.querySelector("#listaTareas");
const contadorTareas = document.querySelector("#contadorTareas");
const mensajeError = document.querySelector("#mensajeError");

let totalTareas = 0;

formTarea.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const texto = inputTarea.value.trim();

  if (texto === "") {
    mensajeError.classList.add("visible");
    return;
  }
  mensajeError.classList.remove("visible");

  const li = document.createElement("li");
  li.innerHTML = `<span>${texto}</span><button class="btn-eliminar">Eliminar</button>`;

  li.querySelector(".btn-eliminar").addEventListener("click", () => {
    li.remove();
    totalTareas--;
    contadorTareas.textContent = totalTareas;
  });

  listaTareas.appendChild(li);
  totalTareas++;
  contadorTareas.textContent = totalTareas;
  formTarea.reset();
});
```

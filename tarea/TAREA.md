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

## Version 3: con clases y objetos

- **Qué agregué:** Una clase propia llamada `TareaItem` para modelar el estado y las operaciones del componente, encapsulando la lógica de creación de elementos y datos de manera modular.
- **Por qué:** Para estructurar el código bajo el paradigma de Programación Orientada a Objetos (POO), facilitando la escalabilidad, el mantenimiento y la reutilización de atributos y métodos.
- **Qué cambió en la pantalla:** Comportamiento idéntico y altamente optimizado en el DOM, respaldado por una arquitectura interna robusta basada en clases y objetos instanciados.
- **Código principal:**

```javascript
// Tarea - Versión 3: con clases y objetos
class TareaItem {
  constructor(texto) {
    this.texto = texto;
    this.completada = false;
  }

  obtenerHtml() {
    const li = document.createElement("li");
    li.innerHTML = `<span>${this.texto}</span><button class="btn-eliminar">Eliminar</button>`;
    return li;
  }
}
```

## Donde uso DOM, eventos y objetos

| Pieza      | Línea o bloque de código principal                                                         | Para qué sirve en el componente                                                                                      |
| :--------- | :----------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------- |
| **DOM**    | `document.querySelector`, `createElement`, `appendChild`, `remove()`                       | Selecciona elementos del HTML, crea dinámicamente nuevos nodos de lista y los remueve de la interfaz.                |
| **Evento** | `formTarea.addEventListener("submit", ...)` y `btnEliminar.addEventListener("click", ...)` | Captura el envío del formulario y los clics de eliminación, previniendo recargas indeseadas (`preventDefault`).      |
| **Objeto** | `new TareaItem(texto)`                                                                     | Instancia un objeto individual por cada tarea ingresada para encapsular sus propiedades y métodos de representación. |

## Pruebas realizadas

| Caso | Acción realizada                                                | Resultado esperado                                                           | Resultado obtenido                                              | Cumple (Sí/No) |
| :--- | :-------------------------------------------------------------- | :--------------------------------------------------------------------------- | :-------------------------------------------------------------- | :------------- |
| 1    | Escribir "Estudiar JavaScript" y hacer clic en Agregar          | La tarea se crea y se añade al final de la lista en el DOM.                  | La tarea apareció correctamente en la interfaz.                 | Sí             |
| 2    | Enviar el formulario dejando el campo de texto totalmente vacío | Se activa la validación y se muestra el mensaje de error en rojo.            | Se visualizó el mensaje _"La tarea no puede estar vacía"_.      | Sí             |
| 3    | Hacer clic sobre el texto de una tarea agregada                 | La tarea cambia su estado visual alternando un estilo de tachado.            | El texto de la tarea se tachó/destachó correctamente.           | Sí             |
| 4    | Hacer clic en el botón "Eliminar" de una tarea específica       | El elemento de la lista se borra por completo de la pantalla.                | La tarea seleccionada desapareció del DOM.                      | Sí             |
| 5    | Agregar y eliminar tareas de forma sucesiva                     | El contador de tareas pendientes se incrementa y disminuye de forma precisa. | El número total reflejó exactamente los cambios en tiempo real. | Sí             |

## Por que disene asi mi clase

Diseñé la clase `TareaItem` con atributos claros (`texto` y `completada`) y un método dedicado (`obtenerHtml()`) porque permite separar la representación de los datos de la manipulación directa de la interfaz. Esto asegura que cada objeto sea independiente, facilitando futuras ampliaciones del sistema (como agregar marcas de prioridad o fechas límites) sin alterar la lógica global de la aplicación.

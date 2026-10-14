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

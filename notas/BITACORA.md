# Bitacora de JavaScript interactivo

Laboratorio 08: JavaScript Interactivo - DOM, Eventos y Objetos.
Navegador usado: Chrome

## Ejercicio 2: Seleccionar y modificar el DOM

| Instruccion                  | Que cambio en la pantalla                                                                         | Se mantiene al recargar (Si/No) |
| ---------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------- |
| textContent desde la consola | se observo el nuevo titulo pero solo el que cambia en el DOM                                      | No                              |
| textContent desde app.js     | El cambio agrego un titulo "HOLA TECSUP"                                                          | Si                              |
| style.color                  | El texto del titulo cambio a azul                                                                 | Si                              |
| classList.add                | El parrafo con la clase .mensaje cambio a amarillo                                                | Si                              |
| createElement + appendChild  | Se agregó un nuevo elemento de lista "li" con el texto "JavaScript" al final del elemento #lista. | Si                              |

## Ejercicio 3: Evento click

| Tipo de evento | Que accion lo dispara     | Cuanto suma por accion |
| -------------- | ------------------------- | ---------------------- |
| click          | un click                  | 1                      |
| dblclick       | dolble click              | 1                      |
| mouseover      | pasar el mosue por encima | 1                      |

## Ejercicio 4: Eventos input y submit

| Prueba                                  | Que paso en la pantalla                                                                                                                                         | Se recargo la pagina (Si/No) |
| --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| Escribir en el campo nombre             | al momento de escribir el nombre , tambien aparece en el mesaje de Hola, ....                                                                                   | No                           |
| Enviar sin preventDefault               | El texto "Enviado" apareció un instante en la pantalla y desapareció de inmediato porque el navegador recargó la página automáticamente, dejando el campo vacío | Si                           |
| Enviar con preventDefault, correo sin @ | Se detuvo la recarga y apareció en la pantalla el mensaje de error en rojo: "Correo no valido: falta @".                                                        | No                           |
| Enviar con preventDefault, correo con @ | Se detuvo la recarga, el mensaje de error anterior desapareció y se mostró correctamente el texto "Enviado: [tu correo]".                                       | No                           |

## Ejercicio 5: Clases y objetos

| Objeto  | nombre  | precio | descripcion()      | conDescuento(0.25) |
| ------- | ------- | ------ | ------------------ | ------------------ |
| laptop  | Laptop  | 2500   | Laptop - S/2500.00 | 1875.00            |
| mouse   | Mouse   | 45     | Mouse - S/45.00    | 33.75              |
| teclado | Teclado | 120    | Teclado - S/120.00 | 90.00              |
| monitor | Monitor | 680    | Monitor - S/680.00 | 510.00             |

## Ejercicio 6: DOM, eventos y objetos juntos

| Prueba          | Total que muestra la pagina                                                                              | Correcto (Si/No)                                                                                                           |
| --------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Cuaderno 12.50  | 12.50                                                                                                    | Si                                                                                                                         |
| + Lapicero 3.20 | 15.70                                                                                                    | Si                                                                                                                         |
| + Mochila 89.90 | 105.60                                                                                                   | Si                                                                                                                         |
| Sin Number()    | El precio se concatena como texto o la consola muestra un error (this.precio.toFixed is not a function). | No                                                                                                                         |
| Pieza           | Linea de tu codigo donde aparece                                                                         | Para que sirve                                                                                                             |
| -------         | ----------------------------------                                                                       | ----------------                                                                                                           |
| DOM             | document.querySelector("#formProducto"), document.createElement("li"), appendChild                       | Selecciona elementos del HTML, crea nodos en el árbol del DOM y los inserta en la página                                   |
| Evento          | formProducto.addEventListener("submit", ...) y evento.preventDefault()                                   | Escucha la acción de envío del formulario, detiene la recarga automática de la página y procesa los datos ingresados       |
| Objeto          | new Producto(...), new Carrito()                                                                         | Instancia estructuras a partir de clases para almacenar datos (nombre, precio, ítems) y ejecutar lógica interna de cálculo |

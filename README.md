# challenge-amigo-secreto
programa alura (amigo secreto)
El archivo HTML representa una página web para una aplicación de Amigo Secreto.
Incluye las siguientes secciones:
Sección Head (Encabezado):
Define el tipo de documento y el idioma.
Especifica la codificación de caracteres y la configuración del viewport.
Enlaza una hoja de estilos CSS externa y fuentes de Google.
Establece el título de la página web.
Sección Body (Cuerpo):
Área de contenido principal con un encabezado y una sección de entrada.
Banner del encabezado:
Contiene el título principal y una imagen representativa de Amigo Secreto.
Sección de entrada:
Contiene un título que invita al usuario a ingresar los nombres de sus amigos.
Campo de entrada para escribir los nombres y un botón para agregarlos a la lista.
Lista desordenada para mostrar los nombres de los amigos añadidos.
Lista desordenada para mostrar el resultado del sorteo.
Botón para ejecutar el sorteo de Amigo Secreto con un ícono asociado.
Script:
Enlaza un archivo JavaScript externo (app.js), el cual se carga de manera diferida hasta que el HTML esté completamente analizado.

El aechivo CSS define variablespara colores primario, secundario y terciario, colores de botones, color de texto y color blanco.
Estilos generales:
* - Restablece el margen y el padding, y establece box-sizing en border-box.
body - Establece la altura en 100vh, el color de fondo en el color primario y centra el contenido usando flexbox.
Contenido principal:
.main-content - Contenedor flex con dirección de columna, altura y anchura completas.
Banner:
.header-banner - Contenedor flex, centra el contenido y agrega padding en la parte superior.
Sección de entrada:
.input-section - Contenedor flex, color de fondo secundario, borde con esquinas superiores redondeadas, centra el contenido y agrega padding.
Títulos:
.main-title - Fuente serif grande, en negrita, cursiva y color blanco.
.section-title - Fuente serif grande y en negrita, color primario, texto centrado con margin.
Contenedores de entrada y botón:
.input-wrapper - Contenedor flex, centra el contenido, ancho máximo de 600px, margen en la parte superior.
.input-name - Ancho completo, padding, borde sólido, esquinas redondeadas a la izquierda, tamaño de fuente mediano.
.button-container - Ancho fijo, centra el contenido.
Estilos de entrada de texto:
.input-title - Elemento flex, padding, tamaño de fuente mediano, borde sólido sin borde derecho, esquinas redondeadas a la izquierda, fuente serif, sombra (box-shadow).
Estilos de botones:
button - Padding, fuente sans-serif, tamaño de fuente mediano, borde sólido, esquinas redondeadas, sombra (box-shadow), cursor: pointer.
.button-add - Color de fondo terciario, color de texto, esquinas redondeadas a la derecha.
.button-add:hover - Cambia el color de fondo al pasar el cursor.
Listas:
ul - Elimina el estilo de lista, establece color de texto, fuente sans-serif, tamaño de fuente mediano y margin.
.result-list - Margen en la parte superior, color verde, fuente más grande y en negrita, texto centrado.
Botón de sorteo:
.button-draw - Contenedor flex, centra el contenido, ancho completo, padding, texto blanco, color de fondo de botón, tamaño de fuente mediano.
.button-draw img - Agrega margen a la derecha.
.button-draw:hover - Cambia el color de fondo al pasar el cursor.

El archivo javascript
 * Array para almacenar la lista de amigos.
 * @type {string[]}
 */

/**
 * Agrega un nuevo amigo a la lista y actualiza la lista mostrada.
 */
function agregarAmigo() {}

/**
 * Actualiza la lista de amigos mostrada.
 */
function actualizarLista() {}

/**
 * Empareja aleatoriamente a los amigos como amigos secretos y muestra el resultado.
 * Muestra una alerta al usuario si hay menos de dos amigos.
 */
function sortearAmigo() {}









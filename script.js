
// 1. VARIABLES GLOBALES (Conexión al DOMINIO)

//=====================================================================================================

const seccionProyectos = document.getElementById('seccionProyectos');

// Elementos necesarios para el tema oscuro/claro
const botonTema = document.getElementById('btnTema');
const cuerpoPagina = document.body; // Referencia directa al <body> del HTML

// Array con la lista de habilidades para inyección dinámica
// Array que contiene la lista de habilidades y las clases de Font Awesome para los íconos.
// Ahora usamos un Array de OBJETOS para almacenar múltiples propiedades (nombre y clase de ícono)
const habilidadesLista = [
    { nombre: "JavaScript", 
        // 'fa-brands fa-js' es la clase de Font Awesome para el ícono de JavaScript
        claseIcono: "fa-brands fa-js"  },
    { nombre: "Python", 
        // 'fa-brands fa-python' es la clase de Font Awesome para el ícono de Python
        claseIcono: "fa-brands fa-python" },
    { nombre: "HTML", 
        // 'fa-brands fa-html5' es la clase de Font Awesome para el ícono de HTML
        claseIcono: "fa-brands fa-html5" },
    { nombre: "MySQL", 
        // 'fa-solid fa-database' es la clase de Font Awesome para un ícono de base de datos genérico
     claseIcono: "fa-solid fa-database"  },
    { nombre: "Github",
        claseIcono: "fab fa-github"      },
    { nombre: "Git",
        claseIcono: "fab fa-git"         }
];

//Elemento de captura del boton de traducción
const botonIdioma = document.getElementById('btnidioma');
const IdiomaEsp = document.getElementById('VerEspañol');
const IdiomaIng = document.getElementById('VerIngles');

//=====================================================================================================


// 2. FUNCIONES 


//=====================================================================================================
/**
 * Función que alterna la clase 'tema-oscuro' en el body.
 * Maneja toda la lógica del modo oscuro.
 */
function alternarTema() {
    // Usamos .classList.toggle para agregar o quitar la clase 'tema-oscuro'
    cuerpoPagina.classList.toggle('tema-oscuro');
    console.log('Se presionó el botón de tema y se alternó la clase "tema-oscuro".');
}

/**
 * Función que inserta dinámicamente los elementos <li> de la lista de habilidades
 * con su respectivo ícono de Font Awesome, usando el Array de Objetos.
 */
function insertarHabilidades() {
    // Obtener TODAS las listas <ul> dentro de cualquier elemento con clase .habilidades
    // Esto encontrará la <ul> en VerEspañol y la <ul> en VerIngles.
    const todasLasListas = document.querySelectorAll('.habilidades ul'); 
    // Iterar sobre cada lista encontrada (Español e Inglés)
    todasLasListas.forEach(lista => {
        // Recorremos el Array de OBJETOS de habilidades
        habilidadesLista.forEach(function(habilidad) { 
            // Crear los elementos (<li> y <i>)
            const itemLista = document.createElement('li'); 
            const icono = document.createElement('i');
            //  Asignar la clase de Font Awesome y el nombre
            icono.className = habilidad.claseIcono; // Ejemplo: "fa-brands fa-js"
            // Insertar el ícono dentro del <li>
            itemLista.appendChild(icono);
            //Adjuntar el <li> a la LISTA ACTUAL (tanto la de español como la de inglés)
            lista.appendChild(itemLista); 
        });
    });
}


//FUNCION DE ALTERNAR IDIOMA

function alternarIdioma() {
    // Estas líneas deberían ser suficientes:
    IdiomaEsp.classList.toggle('ocultar'); 
    IdiomaIng.classList.toggle('ocultar'); 

    // Lógica para cambiar el texto del botón
    if (!IdiomaEsp.classList.contains('ocultar')) { 
        botonIdioma.textContent = "Switch to English";
    } else {
        botonIdioma.textContent = "Cambiar a Español";
    }
}

//=====================================================================================================


// 3. EVENT LISTENERS


//=====================================================================================================

// Ejecuta la función principal para cargar las habilidades al inicio
insertarHabilidades();

// Asigna la función de alternar tema al botón
botonTema.addEventListener('click', alternarTema);

//asignamos funcion de cambiar idioma
botonIdioma.addEventListener('click', alternarIdioma);

//=====================================================================================================



// 4. CONDICIONALES



//=====================================================================================================

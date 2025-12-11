
// 1. VARIABLES GLOBALES (Conexión al DOMINIO)

//=====================================================================================================

// Elementos necesarios para ocultar/mostrar proyectos
const botonAlternar = document.getElementById('btnAlternar');
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
const listaHabilidadesHTML = document.querySelector('.habilidades ul');

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
 * Función que oculta o muestra la sección de proyectos.
 * Alterna la clase 'ocultar' en la sección de proyectos.
 */
function alternarProyectos() {
    // Usamos .classList.toggle para agregar o quitar la clase 'ocultar'
    seccionProyectos.classList.toggle('ocultar');
    console.log('Se presionó el botón de alternar proyectos.');
}

/**
 * Función que inserta dinámicamente los elementos <li> de la lista de habilidades
 * con su respectivo ícono de Font Awesome, usando el Array de Objetos.
 */
function insertarHabilidades() {
    // Recorremos el nuevo Array de OBJETOS (donde 'habilidad' ahora es {nombre: "...", claseIcono: "..."})
    habilidadesLista.forEach(function(habilidad) { 
                     //FOREACH es un bucle y HABILIDAD va guardando de a un solo objeto
        // 1. Crear el <li> (la tarjeta de habilidad)
        const itemLista = document.createElement('li'); 
        
        // 2. Crear el <i> (el elemento que contendrá el ícono)
        const icono = document.createElement('i');
        
        // 3. Asignar la clase de Font Awesome al <i>
        // Accedemos a la propiedad 'claseIcono' del objeto para obtener las clases de Font Awesome.
        icono.className = habilidad.claseIcono; // Ejemplo: "fa-brands fa-js"
        
        // 4. Insertar el <i> (el ícono) dentro del <li> (la tarjeta)
        itemLista.appendChild(icono);
        
        // 5. Adjuntar el <li> (con el ícono dentro) al <ul> principal en el HTML
        listaHabilidadesHTML.appendChild(itemLista);
    });
}

//=====================================================================================================


// 3. EVENT LISTENERS


//=====================================================================================================

// Ejecuta la función principal para cargar las habilidades al inicio
insertarHabilidades();

// Asigna la función de alternar tema al botón
botonTema.addEventListener('click', alternarTema);

// Asigna la función de alternar proyectos al botón
botonAlternar.addEventListener('click', alternarProyectos);

//=====================================================================================================
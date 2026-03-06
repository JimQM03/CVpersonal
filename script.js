
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
        
      claseIcono: "fa-brands fa-js",// 'fa-brands fa-js' es la clase de Font Awesome para el ícono de JavaScript

      color: "#f7df1e" // Amarillo JS
    
    },
    { nombre: "Python", 
        
      claseIcono: "fa-brands fa-python", // 'fa-brands fa-python' es la clase de Font Awesome para el ícono de Python

      color: "#3776ab"
    
    },
    { nombre: "HTML",
        
      claseIcono: "fa-brands fa-html5", // 'fa-brands fa-html5' es la clase de Font Awesome para el ícono de HTML

      color: "#e34f26"
    
    },
    { nombre: "MySQL", 
        
     claseIcono: "fa-solid fa-database", // 'fa-solid fa-database' es la clase de Font Awesome para un ícono de base de datos genérico

     color: "#00758f"
    
    },
    { nombre: "Github",

      claseIcono: "fab fa-github", // 'fab fa-github' es la clase de Font Awesome para un ícono de base de github  
    
      color: "#6e5494"

    },
    { nombre: "Git",   

      claseIcono: "fab fa-git",    // 'fab fa-git' es la clase de Font Awesome para un ícono de Git   
    
      color: "#f05032"

    }
];

const listaProyectos = [
    {
        id: "primerProyecto",
        imagen: "img/GestionG.png",
        tituloEsp: "Gestión G - Account Manager",
        tituloIng: "G Management - Account Manager",
        descripcionEsp: "Sistema de gestión de cuentas centrado en la seguridad. Implementé flujos de autenticación integrando Neon (PostgreSQL) y despliegue en Render, optimizando el control de versiones con Git/GitHub.",
        descripcionIng: "Security-focused account management system. I implemented authentication flows integrating Neon (PostgreSQL) and Render deployment, optimizing version control with Git/GitHub.",
        tools: [
            { nombre: "GitHub", icono: "fa-brands fa-github", color: "#6e5494" },
            { nombre: "PostgreSQL", icono: "fa-solid fa-database", color: "#336791" },
            { nombre: "Render", icono: "fa-solid fa-cloud", color: "#46E3B7" },
            { nombre: "Git", icono: "fa-brands fa-git-alt", color: "#f05032" }
        ],
        link: "https://jimqm03.github.io/GestionGVisual/" 
    },
    {
        id: "segundoProyecto",
        imagen: "img/Ferreteria.png",
        tituloEsp: "Inventory Web Service - Ferretería",
        tituloIng: "Hardware Store Inventory Web Service",
        descripcionEsp: "Servicio web con seguridad avanzada: protección contra inyecciones SQL (Turso/SQLite) y ataques XSS. Implementé cifrado Hashing para credenciales y despliegue en Vercel.",
        descripcionIng: "Web service with advanced security: protection against SQL injections (Turso/SQLite) and XSS attacks. Implemented Hashing encryption for credentials and Vercel deployment.",
        tools: [
            { nombre: "Turso", icono: "fa-solid fa-bolt", color: "#4FFFB0" },
            { nombre: "Vercel", icono: "fa-solid fa-triangle-exclamation", color: "#000000" },
            { nombre: "Security", icono: "fa-solid fa-shield-halved", color: "#ff4d4d" },
            { nombre: "MySQL/SQLite", icono: "fa-solid fa-server", color: "#00758f" }
        ],
        link: "https://jimqm03.github.io/StocklyVisual/"
    }
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
            itemLista.style.setProperty('--color-hover', habilidad.color);
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

//==================================================================================================
// 4. FUNCIONES DE PROYECTOS (VERSIÓN CORREGIDA)
//==================================================================================================

function insertarProyectos() {
    const contenedorEsp = document.getElementById('seccionProyectos');
    const contenedorIng = document.getElementById('seccionProyectosIng');
    
    // Limpiamos los contenedores por si acaso (evita duplicados)
    contenedorEsp.innerHTML = '<h2><center>Mis Proyectos</center></h2>';
    contenedorIng.innerHTML = '<h2><center>My Projects</center></h2>';

    listaProyectos.forEach(proy => {
        // Crear tarjeta para español
        const cardEsp = document.createElement('div');
        cardEsp.className = "proyecto-card";
        cardEsp.innerHTML = `
            <div class="proyecto-img-container">
                <img src="${proy.imagen}" alt="${proy.tituloEsp}" class="proyecto-img">
            </div>
            <h3>${proy.tituloEsp}</h3>
            <p>${proy.descripcionEsp}</p>
            <div class="proyecto-tools"></div>
            <a href="${proy.link}" target="_blank" rel="noopener noreferrer" class="btn-proyecto">
                <i class="fa-brands fa-github"></i> Ver Código
            </a>
        `;
        
        // Crear tarjeta para inglés
        const cardIng = document.createElement('div');
        cardIng.className = "proyecto-card";
        cardIng.innerHTML = `
            <div class="proyecto-img-container">
                <img src="${proy.imagen}" alt="${proy.tituloIng}" class="proyecto-img">
            </div>
            <h3>${proy.tituloIng}</h3>
            <p>${proy.descripcionIng}</p>
            <div class="proyecto-tools"></div>
            <a href="${proy.link}" target="_blank" rel="noopener noreferrer" class="btn-proyecto">
                <i class="fa-brands fa-github"></i> View Code
            </a>
        `;

        // Insertar las herramientas en ambas tarjetas
        [cardEsp, cardIng].forEach((card, index) => {
            const toolsDiv = card.querySelector('.proyecto-tools');
            proy.tools.forEach(tool => {
                const span = document.createElement('span');
                span.className = "tool-badge";
                span.style.setProperty('--color-tool', tool.color);
                span.innerHTML = `<i class="${tool.icono}"></i> ${tool.nombre}`;
                toolsDiv.appendChild(span);
            });
        });

        // Agregar las tarjetas a sus respectivos contenedores
        contenedorEsp.appendChild(cardEsp);
        contenedorIng.appendChild(cardIng);
    });
}

insertarProyectos();

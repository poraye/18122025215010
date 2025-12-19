/* ============================================
   💖 DETALLE ROMÁNTICO DE FIN DE AÑO
   JavaScript Principal - Interactividad y Magia
   
   🎨 PERSONALIZACIÓN:
   Busca los comentarios con 🎨 para encontrar
   las secciones que puedes modificar fácilmente
============================================ */

// ============================================
// 🎨 CONFIGURACIÓN PERSONALIZABLE
// Modifica estos textos para personalizar tu detalle
// ============================================

const CONFIG = {
    // 🎨 NOMBRE DE TU PERSONA ESPECIAL
    nombreEspecial: "Mi Amor",
    
    // 🎨 TU NOMBRE (para la firma)
    tuNombre: "Tu Amor Eterno",
    
    // 🎨 CARTA ROMÁNTICA - Modifica este texto
    cartaRomantica: `
        <p>Mi amor hermoso,</p>
        
        <p>Mientras el año llega a su fin, mi corazón está lleno de gratitud 
        por cada momento que hemos compartido juntos. Cada risa, cada abrazo, 
        cada mirada... todo ha sido un regalo que atesoro en lo más profundo 
        de mi ser.</p>
        
        <p>Este año me enseñaste que el amor verdadero existe, que los cuentos 
        de hadas pueden hacerse realidad, y que contigo a mi lado, cualquier 
        sueño es posible. Eres mi confidente, mi mejor amigo/a, mi todo.</p>
        
        <p>Gracias por amarme como soy, por hacerme reír cuando más lo necesito, 
        por sostenerme cuando siento que no puedo más. Gracias por ser tú, 
        simplemente tú, perfectamente imperfecto/a.</p>
        
        <p>Este nuevo año promete ser increíble porque lo viviré a tu lado. 
        Y aunque no sé qué nos depare el destino, de una cosa estoy seguro/a: 
        mi amor por ti solo crecerá más y más con cada día que pase.</p>
        
        <p>Te amo hoy, mañana y siempre. 💕</p>
    `,
    
    // 🎨 TÍTULO DE LA PANTALLA FINAL
    tituloFinal: "¡Feliz Año Nuevo, Mi Vida!",
    
    // 🎨 MENSAJE FINAL EMOTIVO
    mensajeFinal: `
        Que este nuevo año nos traiga más aventuras juntos, 
        más risas compartidas, más sueños cumplidos y sobre todo, 
        más amor del que jamás imaginamos posible.
    `,
    
    // 🎨 PROMESA ESPECIAL
    promesaEspecial: "Prometo amarte cada día más que el anterior, en este año y en todos los que vengan. 💍",
    
    // 🎨 MENSAJE SECRETO DEL EASTER EGG
    mensajeSecreto: `
        Este es un secreto solo entre tú y yo... 
        Eres lo mejor que me ha pasado en la vida. 
        No existe un día en que no agradezca tenerte. 
        Te amo infinitamente. 🌹✨
    `,
    
    // Velocidad de escritura (ms por caracter)
    velocidadEscritura: 30,
    
    // Cantidad de corazones flotantes
    cantidadCorazones: 20,
    
    // Cantidad de partículas de fondo
    cantidadParticulas: 30
};

// ============================================
// 📦 ELEMENTOS DEL DOM
// ============================================

const elementos = {
    // Pantallas
    screenIntro: document.getElementById('screenIntro'),
    screenLetter: document.getElementById('screenLetter'),
    screenFinale: document.getElementById('screenFinale'),
    
    // Botones
    btnStart: document.getElementById('btnStart'),
    btnSurprise: document.getElementById('btnSurprise'),
    btnRestart: document.getElementById('btnRestart'),
    
    // Carta
    envelope: document.getElementById('envelope'),
    letterPaper: document.getElementById('letterPaper'),
    letterContent: document.getElementById('letterContent'),
    letterDate: document.getElementById('letterDate'),
    
    // Final
    finaleTitle: document.getElementById('finaleTitle'),
    finaleMessage: document.getElementById('finaleMessage'),
    promiseText: document.getElementById('promiseText'),
    countdown: document.getElementById('countdown'),
    
    // Música
    musicBtn: document.getElementById('musicBtn'),
    backgroundMusic: document.getElementById('backgroundMusic'),
    
    // Efectos
    particles: document.getElementById('particles'),
    floatingHearts: document.getElementById('floatingHearts'),
    fireworks: document.getElementById('fireworks'),
    
    // Easter Egg
    easterEggTrigger: document.getElementById('easterEggTrigger'),
    easterEggModal: document.getElementById('easterEggModal'),
    easterEggMessage: document.getElementById('easterEggMessage'),
    closeEasterEgg: document.getElementById('closeEasterEgg')
};

// ============================================
// 🎵 CONTROL DE MÚSICA
// ============================================

let musicPlaying = false;

function toggleMusic() {
    if (musicPlaying) {
        elementos.backgroundMusic.pause();
        elementos.musicBtn.classList.remove('playing');
    } else {
        elementos.backgroundMusic.play().catch(e => {
            console.log('No se pudo reproducir la música automáticamente');
        });
        elementos.musicBtn.classList.add('playing');
    }
    musicPlaying = !musicPlaying;
}

// ============================================
// ✨ EFECTOS VISUALES - PARTÍCULAS
// ============================================

function crearParticulas() {
    for (let i = 0; i < CONFIG.cantidadParticulas; i++) {
        const particula = document.createElement('div');
        particula.className = 'particle';
        
        // Tamaño aleatorio
        const size = Math.random() * 8 + 4;
        particula.style.width = `${size}px`;
        particula.style.height = `${size}px`;
        
        // Posición horizontal aleatoria
        particula.style.left = `${Math.random() * 100}%`;
        
        // Delay de animación aleatorio
        particula.style.animationDelay = `${Math.random() * 15}s`;
        particula.style.animationDuration = `${Math.random() * 10 + 10}s`;
        
        elementos.particles.appendChild(particula);
    }
}

// ============================================
// 💕 CORAZONES FLOTANTES
// ============================================

const corazones = ['💖', '💕', '💗', '💝', '💘', '💓', '💞', '❤️', '🩷', '🤍'];

function crearCorazonesFlotantes() {
    for (let i = 0; i < CONFIG.cantidadCorazones; i++) {
        setTimeout(() => {
            crearCorazon();
        }, i * 500);
    }
    
    // Crear nuevos corazones periódicamente
    setInterval(crearCorazon, 3000);
}

function crearCorazon() {
    const corazon = document.createElement('span');
    corazon.className = 'floating-heart';
    corazon.textContent = corazones[Math.floor(Math.random() * corazones.length)];
    
    // Posición horizontal aleatoria
    corazon.style.left = `${Math.random() * 100}%`;
    
    // Tamaño aleatorio
    const size = Math.random() * 1.5 + 0.8;
    corazon.style.fontSize = `${size}rem`;
    
    // Duración de animación aleatoria
    const duration = Math.random() * 5 + 6;
    corazon.style.animationDuration = `${duration}s`;
    
    elementos.floatingHearts.appendChild(corazon);
    
    // Remover después de la animación
    setTimeout(() => {
        corazon.remove();
    }, duration * 1000);
}

// ============================================
// 🎆 FUEGOS ARTIFICIALES
// ============================================

const coloresFuegos = ['#ff6b9d', '#ffd700', '#9b59b6', '#e74c3c', '#fff', '#00ff88'];

function crearFuegosArtificiales() {
    setInterval(() => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * (window.innerHeight * 0.6);
        crearExplosion(x, y);
    }, 800);
}

function crearExplosion(x, y) {
    const numParticulas = 20;
    const color = coloresFuegos[Math.floor(Math.random() * coloresFuegos.length)];
    
    for (let i = 0; i < numParticulas; i++) {
        const particula = document.createElement('div');
        particula.className = 'firework';
        particula.style.left = `${x}px`;
        particula.style.top = `${y}px`;
        particula.style.background = color;
        particula.style.boxShadow = `0 0 10px ${color}, 0 0 20px ${color}`;
        
        // Dirección aleatoria
        const angle = (i / numParticulas) * 360;
        const velocity = Math.random() * 100 + 50;
        const tx = Math.cos(angle * Math.PI / 180) * velocity;
        const ty = Math.sin(angle * Math.PI / 180) * velocity;
        
        particula.style.setProperty('--tx', `${tx}px`);
        particula.style.setProperty('--ty', `${ty}px`);
        particula.style.animation = `fireworkParticle 1.5s ease-out forwards`;
        
        elementos.fireworks.appendChild(particula);
        
        setTimeout(() => particula.remove(), 1500);
    }
}

// Añadir estilo de animación dinámico
const styleFirework = document.createElement('style');
styleFirework.textContent = `
    @keyframes fireworkParticle {
        0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translate(var(--tx), var(--ty)) scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(styleFirework);

// ============================================
// ⌨️ EFECTO DE ESCRITURA
// ============================================

async function efectoEscritura(elemento, html, velocidad = CONFIG.velocidadEscritura) {
    return new Promise((resolve) => {
        // Crear un div temporal para parsear el HTML
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
        
        // Obtener solo el texto
        const texto = tempDiv.textContent || tempDiv.innerText;
        
        // Limpiar el elemento y agregar cursor
        elemento.innerHTML = '';
        const cursor = document.createElement('span');
        cursor.className = 'typing-cursor';
        
        let i = 0;
        let currentHtml = '';
        
        function escribir() {
            if (i < html.length) {
                // Manejar tags HTML
                if (html[i] === '<') {
                    const closeIndex = html.indexOf('>', i);
                    if (closeIndex !== -1) {
                        currentHtml += html.substring(i, closeIndex + 1);
                        i = closeIndex + 1;
                    }
                } else {
                    currentHtml += html[i];
                    i++;
                }
                
                elemento.innerHTML = currentHtml;
                elemento.appendChild(cursor);
                
                // Velocidad variable para más naturalidad
                const delay = html[i-1] === '.' || html[i-1] === ',' ? velocidad * 5 : velocidad;
                setTimeout(escribir, delay);
            } else {
                // Animación final del cursor
                setTimeout(() => {
                    cursor.remove();
                    resolve();
                }, 1000);
            }
        }
        
        escribir();
    });
}

// ============================================
// 📅 FECHA ACTUAL FORMATEADA
// ============================================

function obtenerFechaFormateada() {
    const opciones = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    const fecha = new Date();
    return fecha.toLocaleDateString('es-ES', opciones);
}

// ============================================
// ⏰ CUENTA REGRESIVA AL AÑO NUEVO
// ============================================

function iniciarCuentaRegresiva() {
    const ahora = new Date();
    const añoNuevo = new Date(ahora.getFullYear() + 1, 0, 1);
    
    // Si ya pasó el año nuevo, no mostrar cuenta regresiva
    if (ahora >= añoNuevo) {
        elementos.countdown.innerHTML = '🎉 ¡Feliz Año Nuevo! 🎉';
        return;
    }
    
    function actualizar() {
        const ahora = new Date();
        const diferencia = añoNuevo - ahora;
        
        if (diferencia <= 0) {
            elementos.countdown.innerHTML = '🎉 ¡Feliz Año Nuevo! 🎉';
            return;
        }
        
        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
        
        elementos.countdown.innerHTML = `
            <span class="countdown-item">${dias}d</span>
            <span class="countdown-item">${horas}h</span>
            <span class="countdown-item">${minutos}m</span>
            <span class="countdown-item">${segundos}s</span>
            <span class="countdown-label">para el Año Nuevo ✨</span>
        `;
        
        setTimeout(actualizar, 1000);
    }
    
    actualizar();
}

// ============================================
// 🔄 NAVEGACIÓN ENTRE PANTALLAS
// ============================================

function mostrarPantalla(pantallaActual, pantallaSiguiente) {
    pantallaActual.classList.remove('active');
    
    setTimeout(() => {
        pantallaSiguiente.classList.add('active');
    }, 500);
}

// ============================================
// 📧 ANIMACIÓN DEL SOBRE Y CARTA
// ============================================

async function abrirCarta() {
    // Animar sobre
    elementos.envelope.classList.add('opened');
    
    // Esperar a que termine la animación del sobre
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Ocultar sobre y mostrar carta
    elementos.envelope.style.display = 'none';
    elementos.letterPaper.classList.add('visible');
    
    // Establecer fecha
    elementos.letterDate.textContent = obtenerFechaFormateada();
    
    // Efecto de escritura
    await efectoEscritura(elementos.letterContent, CONFIG.cartaRomantica);
    
    // Mostrar botón sorpresa después de la carta
    setTimeout(() => {
        elementos.btnSurprise.classList.add('visible');
    }, 500);
}

// ============================================
// 🎉 PANTALLA FINAL
// ============================================

function mostrarFinale() {
    mostrarPantalla(elementos.screenLetter, elementos.screenFinale);
    
    // Establecer contenido
    elementos.finaleTitle.textContent = CONFIG.tituloFinal;
    elementos.finaleMessage.innerHTML = CONFIG.mensajeFinal;
    elementos.promiseText.textContent = CONFIG.promesaEspecial;
    
    // Iniciar efectos
    setTimeout(() => {
        crearFuegosArtificiales();
        iniciarCuentaRegresiva();
    }, 500);
}

// ============================================
// 🥚 EASTER EGG
// ============================================

let clicksEasterEgg = 0;
const clicksNecesarios = 5;

function manejarEasterEgg() {
    clicksEasterEgg++;
    
    // Efecto visual de cada click
    elementos.easterEggTrigger.querySelector('.big-heart').style.transform = 
        `scale(${1 + clicksEasterEgg * 0.1})`;
    
    if (clicksEasterEgg >= clicksNecesarios) {
        mostrarEasterEgg();
        clicksEasterEgg = 0;
    }
    
    // Reset después de un tiempo
    setTimeout(() => {
        if (clicksEasterEgg > 0) clicksEasterEgg--;
    }, 2000);
}

function mostrarEasterEgg() {
    elementos.easterEggMessage.innerHTML = CONFIG.mensajeSecreto;
    elementos.easterEggModal.classList.add('active');
    
    // Crear explosión de corazones
    for (let i = 0; i < 30; i++) {
        setTimeout(() => crearCorazon(), i * 100);
    }
}

function cerrarEasterEgg() {
    elementos.easterEggModal.classList.remove('active');
    elementos.easterEggTrigger.querySelector('.big-heart').style.transform = 'scale(1)';
}

// ============================================
// 🔄 REINICIAR EXPERIENCIA
// ============================================

function reiniciarExperiencia() {
    // Ocultar pantalla final
    elementos.screenFinale.classList.remove('active');
    
    // Reiniciar carta
    elementos.envelope.style.display = 'block';
    elementos.envelope.classList.remove('opened');
    elementos.letterPaper.classList.remove('visible');
    elementos.letterContent.innerHTML = '';
    elementos.btnSurprise.classList.remove('visible');
    
    // Limpiar fuegos artificiales
    elementos.fireworks.innerHTML = '';
    
    // Mostrar pantalla inicial
    setTimeout(() => {
        elementos.screenIntro.classList.add('active');
    }, 500);
}

// ============================================
// 🎬 INICIALIZACIÓN
// ============================================

function inicializar() {
    console.log('💖 Inicializando detalle romántico...');
    
    // Crear efectos de fondo
    crearParticulas();
    crearCorazonesFlotantes();
    
    // Event Listeners
    
    // Música
    elementos.musicBtn.addEventListener('click', toggleMusic);
    
    // Botón comenzar
    elementos.btnStart.addEventListener('click', () => {
        mostrarPantalla(elementos.screenIntro, elementos.screenLetter);
        
        // Iniciar animación de carta después de la transición
        setTimeout(() => {
            abrirCarta();
        }, 600);
    });
    
    // Botón sorpresa
    elementos.btnSurprise.addEventListener('click', mostrarFinale);
    
    // Botón reiniciar
    elementos.btnRestart.addEventListener('click', reiniciarExperiencia);
    
    // Easter Egg
    elementos.easterEggTrigger.addEventListener('click', manejarEasterEgg);
    elementos.closeEasterEgg.addEventListener('click', cerrarEasterEgg);
    
    // Cerrar modal con click fuera
    elementos.easterEggModal.addEventListener('click', (e) => {
        if (e.target === elementos.easterEggModal) {
            cerrarEasterEgg();
        }
    });
    
    // Cerrar modal con Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && elementos.easterEggModal.classList.contains('active')) {
            cerrarEasterEgg();
        }
    });
    
    // Intentar reproducir música al primer click (para móviles)
    document.addEventListener('click', function iniciarMusica() {
        elementos.backgroundMusic.play().catch(() => {});
        document.removeEventListener('click', iniciarMusica);
    }, { once: true });
    
    console.log('✨ ¡Detalle romántico listo!');
}

// Iniciar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializar);
} else {
    inicializar();
}

// ============================================
// 🎁 FUNCIONES EXTRA DE AMBIENTE
// ============================================

// Efecto de nieve para fin de año (opcional)
function crearNieve() {
    const copo = document.createElement('div');
    copo.innerHTML = '❄️';
    copo.style.cssText = `
        position: fixed;
        top: -20px;
        left: ${Math.random() * 100}%;
        font-size: ${Math.random() * 1.5 + 0.5}rem;
        opacity: ${Math.random() * 0.7 + 0.3};
        pointer-events: none;
        z-index: 1000;
        animation: caerNieve ${Math.random() * 5 + 5}s linear forwards;
    `;
    
    document.body.appendChild(copo);
    
    setTimeout(() => copo.remove(), 10000);
}

// Añadir animación de nieve
const styleNieve = document.createElement('style');
styleNieve.textContent = `
    @keyframes caerNieve {
        to {
            transform: translateY(110vh) rotate(360deg);
        }
    }
`;
document.head.appendChild(styleNieve);

// Activar nieve cada cierto tiempo
setInterval(crearNieve, 500);

// ============================================
// 💫 DETECTOR DE FECHA ESPECIAL
// ============================================

function verificarFechaEspecial() {
    const hoy = new Date();
    const dia = hoy.getDate();
    const mes = hoy.getMonth(); // 0-indexed
    
    // 31 de diciembre
    if (mes === 11 && dia === 31) {
        console.log('🎉 ¡Es Nochevieja! Activando modo especial...');
        document.body.classList.add('nochevieja');
    }
    
    // 1 de enero
    if (mes === 0 && dia === 1) {
        console.log('🎊 ¡Feliz Año Nuevo! Activando celebración...');
        document.body.classList.add('año-nuevo');
    }
    
    // 14 de febrero (San Valentín)
    if (mes === 1 && dia === 14) {
        console.log('💘 ¡Es San Valentín! Más amor en el aire...');
        CONFIG.cantidadCorazones = 40;
    }
}

verificarFechaEspecial();

// ============================================
// 📱 MEJORAS PARA MÓVIL
// ============================================

// Prevenir zoom en doble tap
document.addEventListener('touchend', (e) => {
    const now = Date.now();
    if (now - lastTap < 300) {
        e.preventDefault();
    }
    lastTap = now;
}, { passive: false });

let lastTap = 0;

// Vibración en móviles al tocar corazones (si está disponible)
function vibrar(duracion = 50) {
    if ('vibrate' in navigator) {
        navigator.vibrate(duracion);
    }
}

// Añadir vibración a botones
document.querySelectorAll('.btn-romantic').forEach(btn => {
    btn.addEventListener('click', () => vibrar(30));
});

// ============================================
// 🌈 MODO DEBUG (solo para desarrollo)
// ============================================

// Activar con: localStorage.setItem('debug', 'true')
if (localStorage.getItem('debug') === 'true') {
    console.log('🔧 Modo debug activado');
    console.log('Configuración:', CONFIG);
    
    // Atajos de teclado para desarrollo
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === '1') {
            elementos.screenIntro.classList.add('active');
            elementos.screenLetter.classList.remove('active');
            elementos.screenFinale.classList.remove('active');
        }
        if (e.ctrlKey && e.key === '2') {
            elementos.screenIntro.classList.remove('active');
            elementos.screenLetter.classList.add('active');
            elementos.screenFinale.classList.remove('active');
        }
        if (e.ctrlKey && e.key === '3') {
            elementos.screenIntro.classList.remove('active');
            elementos.screenLetter.classList.remove('active');
            elementos.screenFinale.classList.add('active');
        }
    });
}

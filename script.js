// se crean las variables con la informacion del html

const contentImagens = document.querySelector('.content-imagen-carousel');
const images = Array.from(contentImagens.children);
const nextButton = document.querySelector('.carousel-button.next');
const prevButton = document.querySelector('.carousel-button.prev');
const contentCarousel = document.querySelector('.content-carausel-section')

// se crean variables para idetificar tiempo en index de la imagen y para deterner el carrucel

let currentIndex= 0;
let autoplayInterval= null;
const INTERVAL_TIME = 3000;


// toma el tamano de la imagen en posicion 0 y basado en el currenIndex mueve a la otra imagen
function updateCarousel() {
  const width = images[0].clientWidth;
  contentImagens.style.transform = `translateX(-${currentIndex * width}px)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel();
}

//  Iniciar el movimiento automático
function startAutoplay() {
  if (!autoplayInterval) {
    autoplayInterval = setInterval(nextSlide, INTERVAL_TIME);
  }
}

//  Detener el movimiento automático
function stopAutoplay() {
  clearInterval(autoplayInterval);
  autoplayInterval = null;
}

// Eventos de botones
nextButton.addEventListener('click', () => {
  nextSlide();
  // Reinicia el contador para que no salte justo después de un clic manual
  stopAutoplay();
  startAutoplay();
});

prevButton.addEventListener('click', () => {
  prevSlide();
  stopAutoplay();
  startAutoplay();
});

//  Pausar cuando el usuario pasa el cursor sobre el carrusel (Mejora de accesibilidad)
contentCarousel.addEventListener('mouseenter', stopAutoplay);
contentCarousel.addEventListener('mouseleave', startAutoplay);

// Ajustar posición en cambio de tamaño de ventana
window.addEventListener('resize', updateCarousel);

// Iniciar autoplay al cargar
startAutoplay();

//datos de los boletines 

const datosBoletines=[{
    img:'dsaklfj',
    name:'sdaklfj',
    date:222,
    description:'dksjfalksj',



}]



//agregar objeto a los boletines

/*<div class="card">
                    <div class="content-imagen">
                        <img src="./assents/images.jpeg" alt="">
                    </div>
                    <div class="content-info">
                        <div class="content-text">
                            <h3>Boletín | Agosto 2026</h3>
                            <p>Conectamos creatividad, tecnología y comunidad, celebrando las fechas que nos inspiran a crear y compartir.</p>
                        </div>
                        <div class="content-button-more-info">
                            <a href="">Mas inf</a>
                        </div>
                    </div>
                </div>*/






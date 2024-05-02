var slideIndex = 1;
showSlides(slideIndex);

// Função para controlar os slides seguinte/anterior
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Função principal para mostrar os slides
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

// Detectando toques e swipes
let touchStartX = 0;
let touchEndX = 0;

function checkTouchSwipe() {
    var slides = document.getElementsByClassName("mySlides");

    for (let i = 0; i < slides.length; i++) {
        slides[i].addEventListener('touchstart', function (event) {
            touchStartX = event.changedTouches[0].screenX;
        }, false);

        slides[i].addEventListener('touchend', function (event) {
            touchEndX = event.changedTouches[0].screenX;
            handleSwipeGesture(i + 1); // Passa o índice atual do slide
        }, false);
    }
}

function handleSwipeGesture(currentSlideIndex) {
    // Verifica se o slide atual é o slide "Problemas Identificados" (índice 3)
    if (currentSlideIndex === 7) {
        // Não faz nada, desativa o swipe para este slide
        return;
    }

    // Gestos de swipe para mudar os slides
    if (touchEndX < touchStartX) {
        plusSlides(1);
    }
    if (touchEndX > touchStartX) {
        plusSlides(-1);
    }
}

// Ativar a detecção de swipe
checkTouchSwipe();

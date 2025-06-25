const chroma = document.getElementById("chroma");
const colors = [
    '#ff0000', '#ff7f00', '#ffff00', 
    '#7fff00', '#00ff00', '#00ff7f', 
    '#00ffff', '#007fff', '#0000ff', 
    '#7f00ff', '#ff00ff', '#ff007f',
    '#ff4d4d', '#ffcc00', '#99ff99', 
    '#4dffff', '#4d4dff', '#cc99ff', 
    '#ff99cc', '#ff4d4d', '#ffcc4d'
];
let colorI = 0;

const chromaInterval = setInterval(() => {
    chroma.style.color = colors[colorI];
    colorI = (colorI + 1) % colors.length; 
}, 300);


let currentIndex = 0;
const cardsToShow = 3; // Number of cards to show at once

function moveSlide(direction) {
    const cards = document.querySelectorAll('.card');
    const totalCards = cards.length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalCards - cardsToShow; // Loop to last set of cards
    } else if (currentIndex > totalCards - cardsToShow) {
        currentIndex = 0; // Loop to first set of cards
    }

    const sliderContainer = document.querySelector('.slider-container');
    const offset = -currentIndex * (100 / cardsToShow); // Move by percentage based on cards to show
    sliderContainer.style.transform = `translateX(${offset}%)`;
}
document.getElementById('to-about').addEventListener('click', function() {
    document.getElementById('about-section').scrollIntoView({behavior : 'smooth'});
});
document.getElementById('to-about-scroll').addEventListener('click', function() {
    document.getElementById('about-section').scrollIntoView({behavior : 'smooth'});
});
document.getElementById('to-project').addEventListener('click', function() {
    window.scrollTo({
        top: document.body.scrollHeight / 1.7,
        behavior: 'smooth' // Optional: adds a smooth scrolling effect
    });
});

document.getElementById('scroll-up').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Optional: adds a smooth scrolling effect
    });
})
window.addEventListener('scroll', function() {
    const documentHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;
    const scrollPosition = window.scrollY;
    const scrolled = (scrollPosition / (documentHeight - viewportHeight)) * 100;

    document.getElementById("scroll-up").style.opacity = (scrolled > 40) ? 0.9 : 0;
});
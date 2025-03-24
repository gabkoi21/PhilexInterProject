// Select elements
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenuButton = document.getElementById('close-menu');
const menuIcon = document.getElementById('menu-icon');

// Function to toggle menu
function toggleMenu() {
  mobileMenu.classList.toggle('translate-x-full');
  menuIcon.classList.toggle('mdi-menu');
  menuIcon.classList.toggle('mdi-close');
}

// Event listeners
mobileMenuButton.addEventListener('click', (e) => {
  e.stopPropagation();
  toggleMenu();
});

closeMenuButton.addEventListener('click', toggleMenu);

document.addEventListener('click', (e) => {
  if (!mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
    mobileMenu.classList.add('translate-x-full');
    menuIcon.classList.remove('mdi-close');
    menuIcon.classList.add('mdi-menu');
  }
});

mobileMenu.addEventListener('click', (e) => e.stopPropagation());

// Change menu icon color on scroll
window.addEventListener('scroll', () => {
  menuIcon.classList.toggle('text-black', window.scrollY > 50);
  menuIcon.classList.toggle('text-black', window.scrollY <= 50);
});

// This is for the scroll button
const backToTopButton = document.getElementById('back-to-top');

// Show/hide the button based on scroll position
window.addEventListener('scroll', () => {
  backToTopButton.classList.toggle('hidden', window.scrollY <= 200);
});

// Smooth scroll to the top when the button is clicked
backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

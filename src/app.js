window.addEventListener('scroll', function () {
  requestAnimationFrame(() => {
    let navbar = document.getElementById('navbar');
    let navLinks = document.querySelectorAll('.nav-link');
    let logoText = document.querySelector('.logo-text');

    if (window.scrollY > 50) {
      navbar.classList.remove('bg-transparent', 'shadow-none');
      navbar.classList.add('bg-white', 'shadow-md');

      navLinks.forEach((link) => {
        link.classList.remove('text-white');
        link.classList.add('text-gray-800');
      });

      logoText.classList.remove('text-white');
      logoText.classList.add('text-gray-800');
    } else {
      navbar.classList.add('bg-transparent', 'shadow-none');
      navbar.classList.remove('bg-white', 'shadow-md');

      navLinks.forEach((link) => {
        link.classList.remove('text-gray-800');
        link.classList.add('text-white');
      });

      logoText.classList.remove('text-gray-800');
      logoText.classList.add('text-white');
    }
  });
});

// Mobile navigation functionality
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenuButton = document.getElementById('close-menu');
const menuIcon = document.getElementById('menu-icon');

// Ensure menu is initially hidden
mobileMenu.classList.add('translate-x-full');

// Function to open menu
function openMenu() {
  mobileMenu.classList.remove('translate-x-full');
  mobileMenu.classList.add('transition-transform', 'duration-300');

  menuIcon.classList.remove('mdi-menu');
  menuIcon.classList.add('mdi-close');
}

// Function to close menu smoothly
function closeMenu() {
  mobileMenu.classList.add('translate-x-full');
  mobileMenu.classList.add('transition-transform', 'duration-300');

  setTimeout(() => {
    menuIcon.classList.remove('mdi-close');
    menuIcon.classList.add('mdi-menu');
  }, 300); // Wait for animation to complete before changing the icon
}

// Toggle mobile menu when clicking the button
mobileMenuButton.addEventListener('click', (e) => {
  e.stopPropagation();

  if (mobileMenu.classList.contains('translate-x-full')) {
    openMenu();
  } else {
    closeMenu();
  }
});

// Close menu when clicking the close button
closeMenuButton.addEventListener('click', closeMenu);

// Close menu when clicking outside of it
document.addEventListener('click', (e) => {
  if (!mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
    closeMenu();
  }
});

// Prevent clicks inside the menu from closing it
mobileMenu.addEventListener('click', (e) => {
  e.stopPropagation();
});

// Change menu icon color on scroll
window.addEventListener('scroll', function () {
  if (window.scrollY > 50) {
    menuIcon.classList.remove('text-white');
    menuIcon.classList.add('text-black');
  } else {
    menuIcon.classList.remove('text-black');
    menuIcon.classList.add('text-white');
  }
});

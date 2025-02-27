window.addEventListener("scroll", function () {
  requestAnimationFrame(() => {
    let navbar = document.getElementById("navbar");
    let navLinks = document.querySelectorAll(".nav-link");
    let logoText = document.querySelector(".logo-text");

    if (window.scrollY > 50) {
      navbar.classList.remove("bg-transparent", "shadow-none");
      navbar.classList.add("bg-white", "shadow-md");

      // Change nav text color to black
      navLinks.forEach((link) => {
        link.classList.remove("text-white");
        link.classList.add("text-gray-800");
      });

      // Change logo text color
      logoText.classList.remove("text-white");
      logoText.classList.add("text-gray-800");
    } else {
      navbar.classList.add("bg-transparent", "shadow-none");
      navbar.classList.remove("bg-white", "shadow-md");

      // Change nav text color back to white
      navLinks.forEach((link) => {
        link.classList.remove("text-gray-800");
        link.classList.add("text-white");
      });

      // Change logo text color back to white
      logoText.classList.remove("text-gray-800");
      logoText.classList.add("text-white");
    }
  });
});

// Mobile navigation functionality
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenuButton = document.getElementById("close-menu");
const menuIcon = document.getElementById("menu-icon");

// Ensure menu is initially hidden
mobileMenu.classList.add("translate-x-full");

// Toggle mobile menu visibility
mobileMenuButton.addEventListener("click", (e) => {
  e.stopPropagation();
  mobileMenu.classList.toggle("translate-x-full");

  // Toggle menu icon
  if (mobileMenu.classList.contains("translate-x-full")) {
    menuIcon.classList.remove("mdi-close");
    menuIcon.classList.add("mdi-menu");
  } else {
    menuIcon.classList.remove("mdi-menu");
    menuIcon.classList.add("mdi-close");
  }
});

// Close mobile menu when clicking close button
closeMenuButton.addEventListener("click", () => {
  mobileMenu.classList.add("translate-x-full");
  menuIcon.classList.remove("mdi-close");
  menuIcon.classList.add("mdi-menu");
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (!mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
    mobileMenu.classList.add("translate-x-full");
    menuIcon.classList.remove("mdi-close");
    menuIcon.classList.add("mdi-menu");
  }
});

// Prevent clicks inside the menu from closing it
mobileMenu.addEventListener("click", (e) => {
  e.stopPropagation();
});

// Change menu icon color on scroll
window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    menuIcon.classList.remove("text-white");
    menuIcon.classList.add("text-black");
  } else {
    menuIcon.classList.remove("text-black");
    menuIcon.classList.add("text-white");
  }
});


const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const mainHeader = document.getElementById("mainHeader");

// Toggle Mobile Menu
menuToggle.addEventListener("click", () => {

  navLinks.classList.toggle("show");
  menuToggle.classList.toggle("active");

  const isOpen = navLinks.classList.contains("show");

  menuToggle.setAttribute("aria-expanded", isOpen);

  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "إغلاق القائمة" : "فتح القائمة"
  );

});

// Close Menu When Clicking a Link
document.querySelectorAll(".nav-link").forEach(link => {

  link.addEventListener("click", () => {

    navLinks.classList.remove("show");
    menuToggle.classList.remove("active");

    menuToggle.setAttribute("aria-expanded", "false");

  });

});

// Header Shadow on Scroll
window.addEventListener("scroll", () => {

  if (window.scrollY > 30) {

    mainHeader.classList.add("scrolled");

  } else {

    mainHeader.classList.remove("scrolled");

  }

});

// Close Menu When Clicking Outside
document.addEventListener("click", (event) => {

  if (
    !navLinks.contains(event.target) &&
    !menuToggle.contains(event.target)
  ) {

    navLinks.classList.remove("show");
    menuToggle.classList.remove("active");

    menuToggle.setAttribute("aria-expanded", "false");

  }

});

// Close Menu When Pressing Escape
document.addEventListener("keydown", (event) => {

  if (event.key === "Escape") {

    navLinks.classList.remove("show");
    menuToggle.classList.remove("active");

    menuToggle.setAttribute("aria-expanded", "false");

  }

});

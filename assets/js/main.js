// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute("href"))
      ?.scrollIntoView({ behavior: "smooth" });
  });
});

// Navbar shrink on scroll
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  nav.style.padding = window.scrollY > 100 ? "1rem 5%" : "1.2rem 5%";
});

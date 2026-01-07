const toggle = document.querySelector(".nav-toggle");
const mobileNav = document.querySelector(".nav-mobile");

if (toggle && mobileNav) {
  toggle.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  mobileNav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      mobileNav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

const y = document.getElementById("y");
if (y) y.textContent = String(new Date().getFullYear());

function filter(category, btn) {
  // Cambiar estado de los botones
  document.querySelectorAll(".filter-pill").forEach((b) => {
    b.classList.remove("active");
  });
  btn.classList.add("active");

  // Filtrar productos
  document.querySelectorAll(".product-card").forEach((item) => {
    if (category === "all" || item.dataset.cat === category) {
      item.style.display = ""; // Mantiene el display original (grid/flex)
    } else {
      item.style.display = "none";
    }
  });
}

// --- 2. Funcionalidad Menú Hamburguesa ---
document.getElementById("menu-toggle").addEventListener("click", () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.toggle("active");
});

// Cerrar menú al hacer click en un link (sólo en móvil)
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 767) {
      document.getElementById("nav-menu").classList.remove("active");
    }
  });
});

// --- 3. Efecto Parallax en Hero Visual (Desktop/Tablet) ---
document.addEventListener("mousemove", (e) => {
  if (window.innerWidth > 767) {
    const heroImg = document.querySelector(".hero-img");
    const x = (window.innerWidth - e.pageX * 2) / 100;
    const y = (window.innerHeight - e.pageY * 2) / 100;

    if (heroImg) {
      heroImg.style.transform = `translateX(${x}px) translateY(${y}px) scale(1.05)`;
    }
  }
});

// --- 4. Mockup de Animación para Caja Grande (para no usar estilos en línea) ---
const barChart = document.querySelector(".bar-chart-mock");
if (barChart) {
  barChart.style.cssText =
    "margin-top: 20px; height: 80px; background: repeating-linear-gradient(45deg, #222, #222 8px, #1a1a1a 8px, #1a1a1a 16px); border-radius: 10px;";
}

// --- 5. Fix para botón en Bento Box (para evitar margin-left: auto en móvil) ---
const consultBtn = document.querySelector(".btn-consult");
if (consultBtn) {
  // El estilo 'margin-left: auto' se aplica en CSS general
  // y se anula en la media query móvil.
}

// --- 6. Animación al hacer scroll ---
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      // Si no quieres que vuelva a ocultarse al hacer scroll:
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

reveals.forEach(el => observer.observe(el));


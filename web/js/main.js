// Mobile nav toggle
const burger = document.querySelector('.nav__burger');
const navLinks = document.querySelector('.nav__links');

if (burger && navLinks) {
  burger.addEventListener('click', () => {
    navLinks.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', navLinks.classList.contains('is-open'));
  });

  // Cerrar al hacer click en un enlace
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('is-open'));
  });
}

// Nav: borde inferior al hacer scroll
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.style.boxShadow = window.scrollY > 10 ? '0 1px 12px rgba(0,0,0,0.08)' : 'none';
}, { passive: true });

// Formulario de contacto
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = form.nombre.value.trim();
    const telefono = form.telefono.value.trim();
    const provincia = form.provincia.value;
    const monto = form.monto.value;
    const mensaje = form.mensaje?.value.trim() || '';

    // Armar mensaje para WhatsApp
    const texto = encodeURIComponent(
      `Hola, me interesa información sobre financiamiento con garantía inmobiliaria.\n\n` +
      `Nombre: ${nombre}\n` +
      `Teléfono: ${telefono}\n` +
      `Provincia: ${provincia}\n` +
      `Monto aproximado: ${monto}\n` +
      (mensaje ? `Mensaje: ${mensaje}` : '')
    );

    // Número de WhatsApp del negocio — actualizar cuando esté disponible
    const whatsappNumber = '18094000000';
    window.open(`https://wa.me/${whatsappNumber}?text=${texto}`, '_blank');
  });
}

// Scroll reveal sencillo
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.step, .profile-card, .advantage').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

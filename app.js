(function () {
  'use strict';

  const navbar     = document.getElementById('navbar');
  const backTop    = document.getElementById('back-top');
  const progress   = document.getElementById('scroll-progress');
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const overlay    = document.getElementById('mobile-overlay');
  const yearEl     = document.getElementById('year');

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Scroll handler
  const onScroll = () => {
    const scrollY = window.scrollY;
    const total   = document.documentElement.scrollHeight - window.innerHeight;

    if (progress && total > 0) progress.style.width = (scrollY / total * 100) + '%';
    navbar.classList.toggle('scrolled', scrollY > 40);
    backTop.classList.toggle('visible', scrollY > 320);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Back to top
  backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // Mobile menu
  const closeMenu = () => {
    mobileMenu.classList.remove('open');
    overlay.classList.remove('open');
  };

  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    overlay.classList.toggle('open');
  });

  overlay.addEventListener('click', closeMenu);
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

  // Scroll reveal
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        revealObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

  // ============================================================
  // PORTFOLIO CAROUSEL — Carrusel horizontal + modal de galería
  // ============================================================
  const projects = [
    { title: 'Kontrol Cash', desc: 'Sistema de gestión de caja y pagos para negocios y uso personal dedicado a la gestión del dinero de cada persona para su mejor uso y manejo', icon: 'fas fa-cash-register', logo: 'Foto/portafolio/kontrol_cash/logo.png', preview: 'Foto/portafolio/kontrol_cash/portada.jpg', link: 'https://juanzarta.github.io/Kontrol-Cash/login', images: ['Foto/portafolio/kontrol_cash/img (1).png', 'Foto/portafolio/kontrol_cash/img (2).png', 'Foto/portafolio/kontrol_cash/img (3).png', 'Foto/portafolio/kontrol_cash/img (4).png', 'Foto/portafolio/kontrol_cash/img (5).png'] },
    { title: 'Panda Journal', desc: 'Aplicación de diario y notas para organizar tus pensamientos de la mejor manera, ejecutando tus tareas diarias y estableciendo un itinerario semanal', icon: 'fas fa-book', logo: 'Foto/portafolio/panda_journal/logo.png', preview: 'Foto/portafolio/panda_journal/portada.jpg', link: 'https://juanzarta.github.io/Panda-Journal/login', images: ['Foto/portafolio/panda_journal/img (1).png', 'Foto/portafolio/panda_journal/img (2).png', 'Foto/portafolio/panda_journal/img (3).png', 'Foto/portafolio/panda_journal/img (4).png', 'Foto/portafolio/panda_journal/img (5).png'] },
    { title: 'PandaLead', desc: 'Gestor integral de leads y clientes para potenciar ventas y mensajes personalizados para mayor alcance a nuestros clientes', icon: 'fas fa-chart-line', logo: 'Foto/portafolio/pandalead/logo.png', preview: 'Foto/portafolio/pandalead/portada.jpg', link: 'https://goldenpandaz.github.io/PandaLead/login', images: ['Foto/portafolio/pandalead/img (1).png', 'Foto/portafolio/pandalead/img (2).png', 'Foto/portafolio/pandalead/img (3).png', 'Foto/portafolio/pandalead/img (4).png', 'Foto/portafolio/pandalead/img (5).png', 'Foto/portafolio/pandalead/img (6).png'] },
    { title: 'Agenda Co', desc: 'Plataforma de agendamiento online para gestionar citas y reservas de forma eficiente', icon: 'fas fa-calendar-alt', logo: 'Foto/portafolio/agendaco/logo.png', preview: 'Foto/portafolio/agendaco/Portada.jpg', link: 'https://agendago-b8ea6.web.app', images: ['Foto/portafolio/agendaco/img (1).png', 'Foto/portafolio/agendaco/img (2).png', 'Foto/portafolio/agendaco/img (3).png', 'Foto/portafolio/agendaco/img (4).png', 'Foto/portafolio/agendaco/img (5).png', 'Foto/portafolio/agendaco/img (6).png', 'Foto/portafolio/agendaco/img (7).png', 'Foto/portafolio/agendaco/img (8).png'] },
    { title: 'Rezto Bar', desc: 'Sitio web profesional para restaurante y bares, con reservas, menú, ubicación y domicilios', icon: 'fas fa-utensils', logo: 'Foto/portafolio/reztobar/logo.png', preview: 'Foto/portafolio/reztobar/portada.jpg', images: ['Foto/portafolio/reztobar/img (1).png', 'Foto/portafolio/reztobar/img (2).png', 'Foto/portafolio/reztobar/img (3).png'] },
    { title: 'Protocol Events', desc: 'Gestor completo de equipo de trabajo, de tareas, por eventos y delegación de responsabilidades', icon: 'fas fa-calendar-days', logo: 'Foto/portafolio/protocol_eventz/Logo.png', preview: 'Foto/portafolio/protocol_eventz/portada.jpg', link: 'https://juanzarta.github.io/Protocol-EventZ/login', images: ['Foto/portafolio/protocol_eventz/img (1).png', 'Foto/portafolio/protocol_eventz/img (2).png', 'Foto/portafolio/protocol_eventz/img (3).png'] },
    { title: 'Web Fudesmud', desc: 'FUDESMU es una organización sin ánimo de lucro dedicada al desarrollo integral de comunidades vulnerables', icon: 'fas fa-handshake', logo: 'Foto/portafolio/fudesmu/logo.png', preview: 'Foto/portafolio/fudesmu/portada.jpg', link: 'https://juanzarta.github.io/Fudesmud/', images: ['Foto/portafolio/fudesmu/img (1).png', 'Foto/portafolio/fudesmu/img (2).png', 'Foto/portafolio/fudesmu/img (3).png'] },
    { title: 'Club Tiburones', desc: 'Sitio web para club social y deportivo que aumenta vistas y da a conocer el club con calendario, galería de fotos y contacto directo para unirte', icon: 'fas fa-users', logo: 'Foto/portafolio/club_tiburones/logo.jpeg', preview: 'Foto/portafolio/club_tiburones/portada.jpg', link: 'https://tiburonespopayan.github.io/tiburones/', images: ['Foto/portafolio/club_tiburones/img (1).png', 'Foto/portafolio/club_tiburones/img (2).png', 'Foto/portafolio/club_tiburones/img (3).png', 'Foto/portafolio/club_tiburones/img (4).png', 'Foto/portafolio/club_tiburones/img (5).png'] },
    { title: 'Legado Honor', desc: 'Web dedicada a la asesoría, afiliación, defensa y curso de todo tipo de militar', icon: 'fas fa-medal', logo: 'Foto/portafolio/legado_de_honor/logo.png', preview: 'Foto/portafolio/legado_de_honor/portada.jpg', link: 'https://www.legadodehonor.com.co', images: ['Foto/portafolio/legado_de_honor/img (1).png', 'Foto/portafolio/legado_de_honor/img (2).png', 'Foto/portafolio/legado_de_honor/img (3).png', 'Foto/portafolio/legado_de_honor/img (4).png'] },
    { title: 'Web Abogado', desc: 'Landing page profesional para despacho de abogados y asesoría legal', icon: 'fas fa-gavel', logo: 'Foto/portafolio/web_abogado/logo.png', preview: 'Foto/portafolio/web_abogado/portada.jpg', link: 'https://goldenpandaz.github.io/demo-abogado-landing/', images: ['Foto/portafolio/web_abogado/img (1).png', 'Foto/portafolio/web_abogado/img (2).png', 'Foto/portafolio/web_abogado/img (3).png'] },
    { title: 'Web Barbería', desc: 'Sitio web atractivo para barbería con galería y reservas de citas', icon: 'fas fa-cut', logo: 'Foto/portafolio/web_barberia/logo.png', preview: 'Foto/portafolio/web_barberia/portada.jpg', link: 'https://goldenpandaz.github.io/demo-barberia-landing/', images: ['Foto/portafolio/web_barberia/img (1).png', 'Foto/portafolio/web_barberia/img (2).png', 'Foto/portafolio/web_barberia/img (3).png'] },
    { title: 'Web Ferretería', desc: 'Landing para ferretería con catálogo de productos y contacto', icon: 'fas fa-hammer', logo: 'Foto/portafolio/web_ferreteria/logo.png', preview: 'Foto/portafolio/web_ferreteria/portada.jpg', link: 'https://goldenpandaz.github.io/demo-ferreteria-landing/', images: ['Foto/portafolio/web_ferreteria/img (1).png', 'Foto/portafolio/web_ferreteria/img (2).png', 'Foto/portafolio/web_ferreteria/img (3).png'] },
    { title: 'Web Gimnasio', desc: 'Sitio web moderno para gimnasio con membresías y clases online', icon: 'fas fa-dumbbell', logo: 'Foto/portafolio/web_gimnasio/logo.png', preview: 'Foto/portafolio/web_gimnasio/portada.jpg', link: 'https://goldenpandaz.github.io/demo-gimnasio-landing/', images: ['Foto/portafolio/web_gimnasio/img (1).png', 'Foto/portafolio/web_gimnasio/img (2).png', 'Foto/portafolio/web_gimnasio/img (3).png', 'Foto/portafolio/web_gimnasio/img (4).png'] }
  ];

  const carousel = document.getElementById('portfolio-carousel');
  const prevBtn  = document.getElementById('carousel-prev');
  const nextBtn  = document.getElementById('carousel-next');

  if (carousel) {
    carousel.innerHTML = projects.map((p) => `
      <div class="portfolio-item" data-project-title="${p.title}">
        <div class="portfolio-project-card" onclick="openProjectModal('${p.title}')">
          <div class="project-header">
            <div class="project-info">
              <h3 class="project-title">${p.title.toUpperCase()}</h3>
              <p class="project-desc">${p.desc}</p>
            </div>
            <div class="project-icon">${p.logo ? `<img src="${p.logo}" alt="${p.title}" class="project-logo">` : `<i class="${p.icon}"></i>`}</div>
          </div>
          <img src="${p.preview}" alt="${p.title}" class="project-preview">
          <a href="${p.link || '#'}" class="project-btn" onclick="event.stopPropagation(); ${p.link ? '' : 'event.preventDefault();'}" ${p.link ? `target="_blank" rel="noopener"` : ''}>Ver más →</a>
        </div>
      </div>
    `).join('');

    if (prevBtn && nextBtn) {
      prevBtn.addEventListener('click', () => carousel.scrollBy({ left: -400, behavior: 'smooth' }));
      nextBtn.addEventListener('click', () => carousel.scrollBy({ left: 400, behavior: 'smooth' }));
    }
  }

  // Modal de imágenes del proyecto
  window.openProjectModal = function (projectId) {
    let modal = document.getElementById('project-modal');
    if (!modal) {
      const newModal = document.createElement('div');
      newModal.id = 'project-modal';
      newModal.className = 'project-modal';
      newModal.innerHTML = `
        <div class="modal-overlay" onclick="closeProjectModal()"></div>
        <div class="modal-window">
          <div class="modal-header">
            <h2 class="modal-title" id="modal-title"></h2>
            <button class="modal-close" onclick="closeProjectModal()"><i class="fas fa-times"></i></button>
          </div>
          <div class="modal-body">
            <div class="modal-images" id="modal-images"></div>
          </div>
          <div class="modal-footer">
            <button class="modal-arrow modal-prev" onclick="prevImage()"><i class="fas fa-chevron-left"></i></button>
            <div class="modal-dots" id="modal-dots"></div>
            <button class="modal-arrow modal-next" onclick="nextImage()"><i class="fas fa-chevron-right"></i></button>
          </div>
        </div>
      `;
      document.body.appendChild(newModal);
      modal = newModal;
    }

    const project = projects.find(p => p.title === projectId);
    document.getElementById('modal-title').textContent = project.title.toUpperCase();
    const imagesHtml = project.images.map((img, i) => `
      <img src="${img}" alt="Screenshot ${i + 1}" ${i === 0 ? 'class="active"' : ''}>
    `).join('');
    document.getElementById('modal-images').innerHTML = imagesHtml;

    const dotsHtml = project.images.map((_, i) => `
      <span class="dot${i === 0 ? ' active' : ''}" onclick="showImage(${i})"></span>
    `).join('');
    document.getElementById('modal-dots').innerHTML = dotsHtml;

    window.currentImageIndex = 0;
    modal.classList.add('show');
  };

  window.closeProjectModal = function () {
    const modal = document.getElementById('project-modal');
    if (modal) {
      modal.classList.add('closing');
      setTimeout(() => modal.classList.remove('show', 'closing'), 350);
    }
  };

  window.showImage = function (index) {
    const images = document.querySelectorAll('#modal-images img');
    window.currentImageIndex = index;
    images.forEach((img, i) => img.classList.toggle('active', i === index));
    document.querySelectorAll('.dot').forEach((dot, i) => dot.classList.toggle('active', i === index));
  };

  window.nextImage = function () {
    const images = document.querySelectorAll('#modal-images img');
    window.currentImageIndex = (window.currentImageIndex + 1) % images.length;
    window.showImage(window.currentImageIndex);
  };

  window.prevImage = function () {
    const images = document.querySelectorAll('#modal-images img');
    window.currentImageIndex = (window.currentImageIndex - 1 + images.length) % images.length;
    window.showImage(window.currentImageIndex);
  };

  // Navbar active link tracking
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar-links a');

  const activeObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id);
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => activeObs.observe(s));
})();

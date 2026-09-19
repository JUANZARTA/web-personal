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
    { title: 'Golden Panda', desc: 'Sitio web de la agencia Golden Panda: desarrollo de páginas web, aplicaciones e invitaciones digitales a medida', icon: 'fas fa-paw', logo: 'Foto/portafolio/golden_panda/logo.png', preview: 'Foto/portafolio/golden_panda/portada.jpg', link: 'https://goldenpandaz.github.io/landingpage', images: ['Foto/portafolio/golden_panda/img (1).png', 'Foto/portafolio/golden_panda/img (2).png', 'Foto/portafolio/golden_panda/img (3).png'] },
    { title: 'Protocol Events', desc: 'Gestor completo de equipo de trabajo, de tareas, por eventos y delegación de responsabilidades', icon: 'fas fa-calendar-days', logo: 'Foto/portafolio/protocol_eventz/Logo.png', preview: 'Foto/portafolio/protocol_eventz/portada.jpg', link: 'https://juanzarta.github.io/Protocol-EventZ/login', images: ['Foto/portafolio/protocol_eventz/img (1).png', 'Foto/portafolio/protocol_eventz/img (2).png', 'Foto/portafolio/protocol_eventz/img (3).png'] },
    { title: 'Web Fudesmud', desc: 'FUDESMU es una organización sin ánimo de lucro dedicada al desarrollo integral de comunidades vulnerables', icon: 'fas fa-handshake', logo: 'Foto/portafolio/fudesmu/logo.png', preview: 'Foto/portafolio/fudesmu/portada.jpg', link: 'https://juanzarta.github.io/Fudesmud/', images: ['Foto/portafolio/fudesmu/img (1).png', 'Foto/portafolio/fudesmu/img (2).png', 'Foto/portafolio/fudesmu/img (3).png'] },
    { title: 'Club Tiburones', desc: 'Sitio web para club social y deportivo que aumenta vistas y da a conocer el club con calendario, galería de fotos y contacto directo para unirte', icon: 'fas fa-users', logo: 'Foto/portafolio/club_tiburones/logo.jpeg', preview: 'Foto/portafolio/club_tiburones/portada.jpg', link: 'https://tiburonespopayan.github.io/tiburones/', images: ['Foto/portafolio/club_tiburones/img (1).png', 'Foto/portafolio/club_tiburones/img (2).png', 'Foto/portafolio/club_tiburones/img (3).png', 'Foto/portafolio/club_tiburones/img (4).png', 'Foto/portafolio/club_tiburones/img (5).png'] },
    { title: 'Legado Honor', desc: 'Web dedicada a la asesoría, afiliación, defensa y curso de todo tipo de militar', icon: 'fas fa-medal', logo: 'Foto/portafolio/legado_de_honor/logo.png', preview: 'Foto/portafolio/legado_de_honor/portada.jpg', link: 'https://www.legadodehonor.com.co', images: ['Foto/portafolio/legado_de_honor/img (1).png', 'Foto/portafolio/legado_de_honor/img (2).png', 'Foto/portafolio/legado_de_honor/img (3).png', 'Foto/portafolio/legado_de_honor/img (4).png'] },
    { title: 'Bank', desc: 'Sistema de gestión bancaria completo para administrar transacciones y cuentas', icon: 'fas fa-university', logo: 'Foto/portafolio/bank/logo.png', preview: 'Foto/portafolio/bank/portada.jpg', images: ['Foto/portafolio/bank/img.png'] },
    { title: 'Ecommer-Z', desc: 'Plataforma de e-commerce inteligente para vender productos online', icon: 'fas fa-shopping-cart', logo: 'Foto/portafolio/ecommer_z/logo.png', preview: 'Foto/portafolio/ecommer_z/portada.jpg', images: ['Foto/portafolio/ecommer_z/img.jpeg'] },
    { title: 'Web Abogado', desc: 'Landing page profesional para despacho de abogados y asesoría legal', icon: 'fas fa-gavel', logo: 'Foto/portafolio/web_abogado/logo.png', preview: 'Foto/portafolio/web_abogado/portada.jpg', link: 'https://goldenpandaz.github.io/demo-abogado-landing/', images: ['Foto/portafolio/web_abogado/img (1).png', 'Foto/portafolio/web_abogado/img (2).png', 'Foto/portafolio/web_abogado/img (3).png'] },
    { title: 'Web Barbería', desc: 'Sitio web atractivo para barbería con galería y reservas de citas', icon: 'fas fa-cut', logo: 'Foto/portafolio/web_barberia/logo.png', preview: 'Foto/portafolio/web_barberia/portada.jpg', link: 'https://goldenpandaz.github.io/demo-barberia-landing/', images: ['Foto/portafolio/web_barberia/img (1).png', 'Foto/portafolio/web_barberia/img (2).png', 'Foto/portafolio/web_barberia/img (3).png'] },
    { title: 'Web Ferretería', desc: 'Landing para ferretería con catálogo de productos y contacto', icon: 'fas fa-hammer', logo: 'Foto/portafolio/web_ferreteria/logo.png', preview: 'Foto/portafolio/web_ferreteria/portada.jpg', link: 'https://goldenpandaz.github.io/demo-ferreteria-landing/', images: ['Foto/portafolio/web_ferreteria/img (1).png', 'Foto/portafolio/web_ferreteria/img (2).png', 'Foto/portafolio/web_ferreteria/img (3).png'] },
    { title: 'Web Gimnasio', desc: 'Sitio web moderno para gimnasio con membresías y clases online', icon: 'fas fa-dumbbell', logo: 'Foto/portafolio/web_gimnasio/logo.png', preview: 'Foto/portafolio/web_gimnasio/portada.jpg', link: 'https://goldenpandaz.github.io/demo-gimnasio-landing/', images: ['Foto/portafolio/web_gimnasio/img (1).png', 'Foto/portafolio/web_gimnasio/img (2).png', 'Foto/portafolio/web_gimnasio/img (3).png', 'Foto/portafolio/web_gimnasio/img (4).png'] },
    { title: 'Web Odontología', desc: 'Landing profesional para consultorio dental con servicios y equipo', icon: 'fas fa-tooth', logo: 'Foto/portafolio/web_odontologia/logo.png', preview: 'Foto/portafolio/web_odontologia/portada.jpg', link: 'https://goldenpandaz.github.io/demo-odontologia-landing/', images: ['Foto/portafolio/web_odontologia/img (1).png', 'Foto/portafolio/web_odontologia/img (2).png', 'Foto/portafolio/web_odontologia/img (3).png'] },
    { title: 'Web Restaurante', desc: 'Sitio web elegante para restaurante con menú, reservas y ubicación', icon: 'fas fa-utensils', logo: 'Foto/portafolio/web_restaurante/logo.png', preview: 'Foto/portafolio/web_restaurante/portada.jpg', link: 'https://goldenpandaz.github.io/demo-restaurante-landing/', images: ['Foto/portafolio/web_restaurante/img (1).png', 'Foto/portafolio/web_restaurante/img (2).png', 'Foto/portafolio/web_restaurante/img (3).png', 'Foto/portafolio/web_restaurante/img (4).png', 'Foto/portafolio/web_restaurante/img (5).png'] },
    { title: 'Web Spa', desc: 'Landing para spa y masajes con servicios y horarios disponibles', icon: 'fas fa-spa', logo: 'Foto/portafolio/web_spa/logo.png', preview: 'Foto/portafolio/web_spa/portada.jpg', link: 'https://goldenpandaz.github.io/demo-spa-landing/', images: ['Foto/portafolio/web_spa/img (1).png', 'Foto/portafolio/web_spa/img (2).png', 'Foto/portafolio/web_spa/img (3).png'] },
    { title: 'Web Veterinaria', desc: 'Sitio web profesional para clínica veterinaria con servicios y contacto', icon: 'fas fa-stethoscope', logo: 'Foto/portafolio/web_veterinaria-2/logo.png', preview: 'Foto/portafolio/web_veterinaria-2/portada.jpg', link: 'https://juanzarta.github.io/web-veterinaria/', images: ['Foto/portafolio/web_veterinaria-2/img (1).png', 'Foto/portafolio/web_veterinaria-2/img (2).png', 'Foto/portafolio/web_veterinaria-2/img (3).png'] },
    { title: 'Web Veterinaria', desc: 'Plataforma completa de clínica veterinaria con historia clínica digital', icon: 'fas fa-stethoscope', logo: 'Foto/portafolio/web_veterinaria/logo.png', preview: 'Foto/portafolio/web_veterinaria/portada.jpg', link: 'https://goldenpandaz.github.io/demo-veterinaria-landing/', images: ['Foto/portafolio/web_veterinaria/img (1).png', 'Foto/portafolio/web_veterinaria/img (2).png', 'Foto/portafolio/web_veterinaria/img (3).png', 'Foto/portafolio/web_veterinaria/img (4).png', 'Foto/portafolio/web_veterinaria/img (5).png'] },
    { title: 'Web Personal', desc: 'Sitio de información personal y portafolio profesional con proyectos', icon: 'fas fa-user-circle', logo: 'Foto/portafolio/web_personal/logo.png', preview: 'Foto/portafolio/web_personal/portada.jpg', link: 'https://juanzarta.github.io/web-personal/#portafolio', images: ['Foto/portafolio/web_personal/img (1).png', 'Foto/portafolio/web_personal/img (2).png', 'Foto/portafolio/web_personal/img (3).png'] },
    { title: 'Web XV', desc: 'Invitación digital interactiva para celebración de XV años memorable', icon: 'fas fa-heart', logo: 'Foto/portafolio/web_xv/logo.png', preview: 'Foto/portafolio/web_xv/portada.jpg', link: 'https://juanzarta.github.io/invitacion-15-general/', images: ['Foto/portafolio/web_xv/img (1).png', 'Foto/portafolio/web_xv/img (2).png', 'Foto/portafolio/web_xv/img (3).png'] },
    { title: 'Web Bautizo', desc: 'Invitación digital elegante para bautizo con información del evento', icon: 'fas fa-water', logo: 'Foto/portafolio/web_bautizo/logo.png', preview: 'Foto/portafolio/web_bautizo/portada.jpg', link: 'https://juanzarta.github.io/invitacion-bautizo-general/', images: ['Foto/portafolio/web_bautizo/img (1).png', 'Foto/portafolio/web_bautizo/img (2).png', 'Foto/portafolio/web_bautizo/img (3).png'] },
    { title: 'Web Boda', desc: 'Invitación digital exclusiva para matrimonio con detalles especiales', icon: 'fas fa-ring', logo: 'Foto/portafolio/web_boda/logo.png', preview: 'Foto/portafolio/web_boda/portada.jpg', link: 'https://juanzarta.github.io/invitacion-boda-general/', images: ['Foto/portafolio/web_boda/img (1).png', 'Foto/portafolio/web_boda/img (2).png'] },
    { title: 'Web Comunión', desc: 'Invitación digital para comunión con galería y confirmación de asistencia', icon: 'fas fa-child', logo: 'Foto/portafolio/web_comunion/logo.png', preview: 'Foto/portafolio/web_comunion/portada.jpg', link: 'https://juanzarta.github.io/invitacion-comunion-general/', images: ['Foto/portafolio/web_comunion/img (1).png', 'Foto/portafolio/web_comunion/img (2).png'] },
    { title: 'Web Corporativo', desc: 'Invitación digital profesional para eventos corporativos y conferencias', icon: 'fas fa-briefcase', logo: 'Foto/portafolio/web_corporativo/logo.png', preview: 'Foto/portafolio/web_corporativo/portada.jpg', link: 'https://juanzarta.github.io/invitacion-corporativa-general/', images: ['Foto/portafolio/web_corporativo/img (1).png', 'Foto/portafolio/web_corporativo/img (2).png', 'Foto/portafolio/web_corporativo/img (3).png'] },
    { title: 'Web Cumpleaños', desc: 'Invitación digital festiva para cumpleaños con sorpresas interactivas', icon: 'fas fa-birthday-cake', logo: 'Foto/portafolio/web_cumpleanos/logo.png', preview: 'Foto/portafolio/web_cumpleanos/portada.jpg', link: 'https://juanzarta.github.io/invitacion-cumple-general/', images: ['Foto/portafolio/web_cumpleanos/img (1).png', 'Foto/portafolio/web_cumpleanos/img (2).png', 'Foto/portafolio/web_cumpleanos/img (3).png'] },
    { title: 'Web Grado', desc: 'Invitación digital para grado con fotos de la promoción y detalles', icon: 'fas fa-graduation-cap', logo: 'Foto/portafolio/web_grado/logo.png', preview: 'Foto/portafolio/web_grado/portada.jpg', link: 'https://juanzarta.github.io/invitacion-grado-general/', images: ['Foto/portafolio/web_grado/img (1).png', 'Foto/portafolio/web_grado/img (2).png', 'Foto/portafolio/web_grado/img (3).png'] },
    { title: 'Web General', desc: 'Plantilla de invitación digital personalizable para cualquier evento', icon: 'fas fa-envelope', logo: 'Foto/Logo_Color.png', preview: 'Foto/portafolio/web_general/portada.jpg', link: 'https://juanzarta.github.io/invitacion-general/', images: ['Foto/portafolio/web_general/img (1).png', 'Foto/portafolio/web_general/img (2).png', 'Foto/portafolio/web_general/img (3).png', 'Foto/portafolio/web_general/img (4).png'] },
    { title: 'EcoImpulso', desc: 'Plataforma de impacto ambiental y sostenibilidad', icon: 'fas fa-leaf', logo: 'Foto/portafolio/ecoimpulso/logo.png', preview: 'Foto/portafolio/ecoimpulso/portada.jpg', link: 'https://juanzarta.github.io/web-EcoImpulso/', images: ['Foto/portafolio/ecoimpulso/img (1).png', 'Foto/portafolio/ecoimpulso/img (2).png', 'Foto/portafolio/ecoimpulso/img.png'] }
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

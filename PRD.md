# PRD — Web Personal de Juan Camilo Zarta Campo

## 1) Resumen del producto

Sitio web personal tipo portafolio/CV para presentar de forma moderna y clara el perfil profesional de **Juan Camilo Zarta Campo** (Full Stack Developer), destacando experiencia, habilidades clave y proyectos relevantes.

Este documento define la estructura del producto y su estado actualizado tras la primera implementación.

---

## 2) Objetivo principal

Construir una web personal que permita:

1. Mostrar rápidamente quién sos y qué valor ofrecés.
2. Resaltar lo primordial de tu experiencia Full Stack (Angular, Spring Boot, React, SQL, arquitectura y QA).
3. Exhibir tu portafolio con proyectos clave y espacio listo para enlaces reales.
4. Facilitar contacto profesional (email, LinkedIn, GitHub, WhatsApp).

---

## 3) Público objetivo

- Reclutadores técnicos y no técnicos.
- Líderes de desarrollo / CTOs / Tech Leads.
- Clientes potenciales para proyectos freelance.
- Profesores o evaluadores académicos.

---

## 4) Propuesta de valor

"Desarrollador Full Stack con enfoque en soluciones escalables, calidad de software y experiencia práctica en proyectos reales académicos y profesionales, incluyendo software contable, apps web y uso aplicado de IA."

---

## 5) Alcance del MVP

### Incluye
- Landing profesional moderna.
- Secciones: Hero, Sobre mí, Habilidades, Experiencia, Portafolio, Educación e Idiomas, Contacto.
- Diseño responsive (mobile-first).
- CTA claros (Ver portafolio, Contactarme).
- Placeholders listos para links de portafolio.
- Implementación **100% estática** con **HTML, CSS y JavaScript vanilla**.
- Animaciones suaves de entrada por scroll.
- Tarjetas visuales en contacto con iconografía.

### No incluye (en esta fase)
- Blog.
- Panel de administración.
- Backend para formularios (se puede integrar luego con Formspree/EmailJS/API propia).
- Frameworks frontend (Angular/React/Vue) en fase inicial.
- Base de datos en fase inicial.
- Multiidioma (se propone español inicial; inglés como fase 2).

---

## 6) Estructura de la web (arquitectura de información)

## 6.1 Navbar (sticky)
- Logo/Nombre: **Juan Zarta**
- Menú: Inicio | Sobre mí | Habilidades | Experiencia | Portafolio | Contacto
- Menú mobile con toggle

## 6.2 Hero (primera pantalla)
- Título fuerte: "Full Stack Developer | Angular & Spring Boot"
- Subtítulo de valor (1–2 líneas)
- CTAs:
  - **Ver portafolio**
  - **Contactarme**
- Foto profesional

## 6.3 Sobre mí
- Resumen profesional adaptado del CV.
- Enfoque en: escalabilidad, buenas prácticas, metodologías ágiles, calidad.

## 6.4 Habilidades (priorizadas)

### Bloques completos (extraídos del CV)
- Lenguajes y Tecnologías Web: C#, Java, Python, TypeScript, PHP, Kotlin, C/C++, Ruby, SQL/PLSQL, HTML/CSS/JavaScript, XML.
- Frameworks y Arquitecturas: .NET Core, ASP.NET, .NET Framework, Spring Boot, Ruby on Rails, ADO.NET, MVC, Microservicios, Arquitectura Hexagonal, REST APIs.
- Bases de Datos & ORMs: SQL Server, MySQL, Oracle, SQLite, Firebase, Entity Framework.
- Front-End y UI: Angular, React, Bootstrap, Tailwind, HTML, CSS, JavaScript, XML.
- DevOps & Herramientas: Git, Visual Studio, Android Studio.
- Inteligencia Artificial: CNN, Transformers, Deep Learning, NLP, OpenCV, YOLO, Keras, TensorFlow.
- Metodologías Ágiles: Scrum, Kanban.
- Gestión y arquitectura de software: levantamiento de requerimientos, análisis funcional, planeación y diseño escalable.

## 6.5 Experiencia destacada
Bloques narrativos por impacto (texto ampliado):
- Detección de vehículos con redes neuronales (2023)
- Software contable Universidad del Cauca (2024–2025)
- Sistema de intercambio estudiantil (2024)
- Proyectos web para publicidad en EE.UU. (2022–2025)

Cada bloque incluye:
- Rol
- Contexto
- Aportes concretos
- Resultado funcional

## 6.6 Portafolio (cards)
Sección central con tarjetas de proyecto y botón a demo/código.
Incluye imágenes por proyecto (solo en portafolio).

Proyectos definidos:
1. **Web de Golden Panda**
   - Descripción corta
   - Stack
   - Botones: Demo | Código
   - Link Demo: `PENDIENTE`
   - Link Código: `PENDIENTE`

2. **App de tareas**
   - Descripción corta
   - Stack
   - Botones: Demo | Código
   - Link Demo: `PENDIENTE`
   - Link Código: `PENDIENTE`

3. **App de contabilidad**
   - Descripción corta
   - Stack
   - Botones: Demo | Código
   - Link Demo: `PENDIENTE`
   - Link Código: `PENDIENTE`

4. **Software contable (Universidad)**
   - Descripción corta (rol en módulo de empresas)
   - Stack: Angular + Spring Boot + MySQL
   - Botones: Demo | Código/Referencia
   - Link Demo: `PENDIENTE`
   - Link Código/Referencia: `PENDIENTE`

5. **Página web de Fudesmud**
   - Descripción corta
   - Stack
   - Botones: Demo | Código
   - Link Demo: `PENDIENTE`
   - Link Código: `PENDIENTE`

## 6.7 Contacto
- Tarjetas visuales para Email, LinkedIn y GitHub
- Iconografía simple y estados hover
- Mensaje de cierre para conversión

## 6.8 Educación e Idiomas
- Ingeniería de Sistemas (Universidad del Cauca)
- Bachiller Técnico Industrial
- Idiomas: Español nativo, Inglés intermedio básico

## 6.9 Footer
- Nombre + año
- Redes
- Mensaje breve de marca personal

---

## 7) Requisitos funcionales

1. Navegación por secciones con scroll suave.
2. Botones del portafolio con enlaces editables sin tocar diseño.
3. Diseño responsive en mobile/tablet/desktop.
4. Carga rápida y jerarquía visual clara.
5. Accesibilidad base: contraste correcto, textos legibles, alt en imágenes.
6. Animaciones de entrada por scroll con degradación elegante en navegadores sin soporte.
7. Menú colapsable funcional en mobile.

---

## 8) Requisitos no funcionales

- Performance: Lighthouse objetivo > 85 en Performance/SEO/Best Practices.
- UX: información clave visible en menos de 5 segundos.
- Mantenibilidad: estructura de componentes limpia.
- Stack obligatorio del MVP: **HTML + CSS + JS** (sin proceso de build).
- Sin base de datos en fase 1 (sitio estático).
- SEO básico:
  - title + meta description
  - Open Graph para compartir
  - Schema básico de Person (fase 2 opcional)

---

## 9) Lineamientos de diseño moderno

## Estilo visual
- Minimalista, profesional, con acento tecnológico y estética moderna tipo glassmorphism.
- Espacios amplios, tipografía clara, tarjetas con profundidad y microinteracciones.
- Paleta sugerida:
  - Fondo azul oscuro profundo
  - Color de acento (azul eléctrico o cian)
  - Texto de alto contraste

## Componentes clave
- Hero con CTA doble
- Cards de proyectos con hover
- Timeline de experiencia
- Skills en grid por categorías completas
- Contact cards con iconos

## Tono de contenido
- Directo, profesional, orientado a resultados.
- Menos "lista de tecnologías", más "qué problema resolvés".

---

## 10) Contenido inicial (fuente CV)

Datos base a mostrar:
- Nombre: Juan Camilo Zarta Campo
- Rol: Full Stack Developer | Angular & Spring Boot
- Ubicación: Cauca, Colombia
- Email: juancamilozartacampo@gmail.com
- GitHub: JuanZarta
- LinkedIn: Juan Zarta

Mensajes clave:
- Desarrollo web y móvil con enfoque en calidad.
- Experiencia en software contable y proyectos universitarios reales.
- Capacidad de integrar frontend + backend + base de datos.
- Conocimientos en IA aplicada como diferenciador.

---

## 11) Criterios de éxito

1. Un reclutador entiende tu perfil en < 30 segundos.
2. Todos los proyectos del portafolio aparecen con estructura uniforme.
3. Los enlaces quedan listos para completar sin modificar layout.
4. El sitio se ve profesional en celular y escritorio.
5. La sección de habilidades refleja de forma completa el contenido del CV.

---

## 12) Roadmap sugerido

### Fase 1 (actual)
- Definición de PRD y estructura.

### Fase 2
- Implementación base estática (HTML/CSS/JS).

### Fase 3
- Mejora visual completa (timeline, animaciones, contacto con iconos, contenido ampliado).

### Fase 4
- Carga de enlaces finales + ajustes SEO + despliegue.

### Fase 5 (opcional futura)
- Migración a framework (Angular) solo si aparecen necesidades de escalabilidad o contenido dinámico.
- Integración de base de datos solo si se requiere panel admin, formularios persistentes o analítica propia.

---

## 13) Riesgos y mitigación

- **Riesgo:** Mucho texto técnico y poca claridad.
  - **Mitigación:** Priorización visual por impacto y logros.

- **Riesgo:** Portafolio sin links activos al inicio.
  - **Mitigación:** placeholders definidos (`PENDIENTE`) y checklist de reemplazo.

- **Riesgo:** Mezclar perfil académico y profesional sin foco.
  - **Mitigación:** separar "proyectos destacados" por objetivo y resultado.

---

## 14) Checklist de cierre (fase actual)

- [x] Validar copy base del Hero.
- [x] Confirmar stack estático sin framework ni BD.
- [x] Definir paleta oscura moderna y componentes visuales.
- [x] Integrar habilidades completas desde CV.
- [ ] Reemplazar foto temporal por foto personal final.
- [ ] Completar links reales de GitHub, LinkedIn y proyectos.

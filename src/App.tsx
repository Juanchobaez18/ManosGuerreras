import type { LineaAccion, ObjetivoEspecifico } from './types/fundacion';
import { TarjetaPrograma } from './components/TarjetaPrograma';
import './App.css';
import logo from './assets/logo-fundacion.jpg';
import heroImage from './assets/fondo.png';
import storyImage from './assets/historia-cuidado.jpg';
import supportImage from './assets/campana-apoyo.jpg';
import wellbeingImage from './assets/campana-bienestar.jpg';
import communityImage from './assets/campana-comunidad.jpg';
import groupImage from './assets/impacto-comunidad.jpg';

const lineasDeAccion: LineaAccion[] = [
  {
    id: 1,
    titulo: 'Acompañamiento integral',
    descripcion: 'Atención legal, psicológica y social para proteger derechos y fortalecer el bienestar familiar.',
    icono: '♡'
  },
  {
    id: 2,
    titulo: 'Capacitación y emprendimiento',
    descripcion: 'Formación en oficios y oportunidades para impulsar la autonomía económica.',
    icono: '✳'
  },
  {
    id: 3,
    titulo: 'Alianzas estratégicas',
    descripcion: 'Conexiones con entidades públicas y privadas para abrir puertas a educación y desarrollo.',
    icono: '⌘'
  },
  {
    id: 4,
    titulo: 'Desarrollo comunitario',
    descripcion: 'Iniciativas ambientales y productivas que unen a las familias y fortalecen su comunidad.',
    icono: '✿'
  }
];

const objetivos: ObjetivoEspecifico[] = [
  { id: 1, descripcion: 'Brindar acompañamiento legal, psicológico y social a madres cabeza de familia.' },
  { id: 2, descripcion: 'Desarrollar programas de capacitación, emprendimiento y generación de empleo.' },
  { id: 3, descripcion: 'Gestionar alianzas con entidades públicas y privadas para educación y vivienda.' },
  { id: 4, descripcion: 'Promover iniciativas comunitarias y ambientales para la inclusión social.' }
];

const historias = [
  {
    categoria: 'Cuidado y bienestar',
    titulo: 'Acompañar también es cuidar',
    descripcion: 'Creamos espacios cercanos donde cada mujer puede sentirse escuchada, valorada y acompañada.',
    imagen: supportImage,
    alt: 'Mujeres participando en una actividad de acompañamiento'
  },
  {
    categoria: 'Bienestar integral',
    titulo: 'Pequeños gestos, grandes lazos',
    descripcion: 'El cuidado y la solidaridad fortalecen la confianza y el bienestar de las familias.',
    imagen: wellbeingImage,
    alt: 'Participante en un espacio de apoyo de la fundación'
  },
  {
    categoria: 'Comunidad',
    titulo: 'Juntas construimos oportunidades',
    descripcion: 'Los encuentros y las alianzas nos ayudan a tejer redes de apoyo que perduran.',
    imagen: communityImage,
    alt: 'Grupo de mujeres reunidas en una actividad comunitaria'
  }
];

function MapaBoyaca() {
  return (
    <svg
      className="boyaca-map"
      viewBox="0 0 360 370"
      role="img"
      aria-labelledby="mapa-titulo"
    >
      <title id="mapa-titulo">Mapa ilustrativo del departamento de Boyacá</title>
      <path
        className="map-shadow"
        d="m126 19 26 11 21-8 19 18 26-2 12 21 27 8 4 23 25 16-7 20 18 19-16 20 12 22-20 14 4 23-22 16 2 22-24 9-8 22-27-3-14 22-24-11-19 14-19-15-25 8-11-21-23 4-7-21-24-1 3-22-19-14 14-18-9-19 19-13-4-21 20-12-3-21 22-9 3-21 22 2 12-17 21 10 13-16Z"
        transform="translate(7 8)"
      />
      <path
        className="map-land"
        d="m126 19 26 11 21-8 19 18 26-2 12 21 27 8 4 23 25 16-7 20 18 19-16 20 12 22-20 14 4 23-22 16 2 22-24 9-8 22-27-3-14 22-24-11-19 14-19-15-25 8-11-21-23 4-7-21-24-1 3-22-19-14 14-18-9-19 19-13-4-21 20-12-3-21 22-9 3-21 22 2 12-17 21 10 13-16Z"
      />
      <path className="map-border" d="m149 34 13 25-15 24 19 21-13 19 17 19-20 23 14 22-20 19 11 24m38-234-5 30 18 16-7 21 20 17-12 24 19 20-8 22 16 15-16 22 8 24m-122-95 27 8 17-12 19 7 15-12 18 13 17-9 19 12m-131 52 24-9 18 10 17-13 20 11 22-15 20 10" />
      <circle className="map-pin map-pin-primary" cx="188" cy="178" r="7" />
      <circle className="map-pin" cx="221" cy="221" r="5" />
      <circle className="map-pin" cx="157" cy="241" r="5" />
      <circle className="map-pin" cx="205" cy="127" r="5" />
      <text className="map-label" x="198" y="174">Tunja</text>
      <text className="map-city" x="228" y="224">Duitama</text>
      <text className="map-city" x="125" y="247">Chiquinquirá</text>
      <text className="map-city" x="211" y="125">Sogamoso</text>
    </svg>
  );
}

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Fundación Manos Guerreras, inicio">
          <img src={logo} alt="" />
          <span>Manos <strong>Guerreras</strong></span>
        </a>
        <nav className="main-nav" aria-label="Navegación principal">
          <a href="#inicio">Inicio</a>
          <a href="#nosotras">La fundación</a>
          <a href="#programas">Programas</a>
          <a href="#historias">Historias</a>
        </nav>
        <a className="header-cta" href="#impacto">Conoce nuestro impacto <span aria-hidden="true">↗</span></a>
      </header>

      <main>
        <section className="hero section-wrap" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Desde Boyacá, con el corazón</p>
            <h1>Manos que ayudan.<br /><em>Futuros que florecen.</em></h1>
            <p className="hero-description">
              Acompañamos a madres cabeza de familia y a sus hijos para construir, juntos, una vida con más bienestar y oportunidades.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#programas">Conoce nuestros programas <span aria-hidden="true">↗</span></a>
              <a className="text-link" href="#nosotras"><span aria-hidden="true">▶</span> Nuestra misión</a>
            </div>
            <div className="hero-note">
              <div className="avatar-stack" aria-hidden="true">
                <img src={supportImage} alt="" />
                <img src={communityImage} alt="" />
                <img src={groupImage} alt="" />
              </div>
              <p><strong>Una red que acompaña</strong><br />con cercanía, respeto y esperanza.</p>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-orbit hero-orbit-one" />
            <div className="hero-orbit hero-orbit-two" />
            <div className="hero-main-image">
              <img src={heroImage} alt="Equipo de la fundación Manos Guerreras en Boyacá" />
            </div>
            <div className="hero-float-card">
              <span className="heart-mark" aria-hidden="true">♥</span>
              <p><strong>Unidas somos más fuertes</strong><br />Cada historia merece apoyo.</p>
            </div>
            <span className="hero-spark hero-spark-one" aria-hidden="true">✳</span>
            <span className="hero-spark hero-spark-two" aria-hidden="true">✦</span>
          </div>
          <span className="hero-watermark" aria-hidden="true">MG</span>
        </section>

        <section className="programs section-wrap" id="programas">
          <div className="section-heading centered-heading">
            <p className="eyebrow">Lo que nos mueve</p>
            <h2>Una mano cercana <em>hace la diferencia</em></h2>
            <p>Unimos esfuerzos para responder a las necesidades de cada mujer, cada familia y su comunidad.</p>
          </div>
          <div className="program-grid">
            {lineasDeAccion.map((programa) => (
              <TarjetaPrograma key={programa.id} programa={programa} />
            ))}
          </div>
        </section>

        <section className="story-section" id="nosotras">
          <div className="story-inner section-wrap">
            <div className="story-visual">
              <div className="story-image-main">
                <img src={storyImage} alt="Una voluntaria acompaña a una mujer en un espacio de cuidado" loading="lazy" />
              </div>
              <div className="story-image-small">
                <img src={groupImage} alt="Mujeres reunidas en Boyacá" loading="lazy" />
              </div>
              <div className="story-stamp"><span>♥</span><br />Con amor<br />y propósito</div>
            </div>
            <div className="story-copy">
              <p className="eyebrow">Nuestra razón de ser</p>
              <h2>El cambio empieza <em>cuando estamos presentes.</em></h2>
              <p className="story-lead">
                Creemos en el poder de estar ahí: escuchar, orientar y acompañar con respeto, para que cada mujer pueda abrir su propio camino.
              </p>
              <div className="mission-card">
                <span className="mission-icon" aria-hidden="true">♡</span>
                <div>
                  <h3>Nuestra misión</h3>
                  <p>Apoyar y empoderar integralmente a madres cabeza de familia y sus hijos, promoviendo su bienestar, autonomía económica y calidad de vida.</p>
                </div>
              </div>
              <a className="text-link story-link" href="#impacto">Conoce nuestra visión <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>

        <section className="stories section-wrap" id="historias">
          <div className="stories-heading">
            <div className="section-heading">
              <p className="eyebrow">Manos a la obra</p>
              <h2>Juntas, creando <em>nuevas posibilidades</em></h2>
            </div>
            <p className="stories-intro">Cada encuentro es una oportunidad para cuidarnos, aprender y avanzar en comunidad.</p>
          </div>
          <div className="story-card-grid">
            {historias.map((historia, index) => (
              <article className="story-card" key={historia.titulo}>
                <div className="story-card-image">
                  <img src={historia.imagen} alt={historia.alt} loading="lazy" />
                  <span className="story-number">0{index + 1}</span>
                </div>
                <div className="story-card-copy">
                  <p className="card-category">{historia.categoria}</p>
                  <h3>{historia.titulo}</h3>
                  <p>{historia.descripcion}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="impact-section" id="impacto">
          <div className="impact-inner section-wrap">
            <div className="impact-copy">
              <p className="eyebrow">Nuestro lugar en el mundo</p>
              <h2>Con raíces en Boyacá, <em>miramos hacia el futuro.</em></h2>
              <p className="impact-description">
                Soñamos con ser una organización líder en Boyacá, transformando vidas con programas sociales y oportunidades para las familias.
              </p>
              <div className="impact-facts">
                <div><strong>4</strong><span>líneas de acción</span></div>
                <div><strong>2030</strong><span>nuestra visión</span></div>
                <div><strong>♥</strong><span>un propósito común</span></div>
              </div>
              <div className="vision-note">
                <span className="vision-icon" aria-hidden="true">✦</span>
                <p><strong>Nuestra visión</strong><br />Ser reconocidos en Boyacá por transformar vidas y generar oportunidades.</p>
              </div>
            </div>
            <div className="map-panel">
              <div className="map-heading">
                <span className="map-location-icon" aria-hidden="true">⌖</span>
                <div><strong>Boyacá, Colombia</strong><span>El corazón de nuestra labor</span></div>
              </div>
              <div className="map-art">
                <div className="map-sun" />
                <span className="map-dot map-dot-one" />
                <span className="map-dot map-dot-two" />
                <span className="map-dot map-dot-three" />
                <MapaBoyaca />
                <span className="map-caption">Boyacá</span>
              </div>
              <div className="map-footer"><span>✦</span> Acompañamos, conectamos, transformamos.</div>
            </div>
          </div>
        </section>

        <section className="objectives-section section-wrap">
          <div>
            <p className="eyebrow">Nuestro compromiso</p>
            <h2>Pequeños pasos,<br /><em>grandes caminos.</em></h2>
            <p>Trabajamos para que el apoyo se convierta en oportunidades reales para las familias.</p>
          </div>
          <ul className="objectives-list">
            {objetivos.map((objetivo) => (
              <li key={objetivo.id}><span aria-hidden="true">✦</span>{objetivo.descripcion}</li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner section-wrap">
          <a className="brand footer-brand" href="#inicio">
            <img src={logo} alt="" loading="lazy" />
            <span>Manos <strong>Guerreras</strong></span>
          </a>
          <p>Manos que ayudan, corazones que acompañan.</p>
          <a className="footer-top-link" href="#inicio">Volver arriba ↑</a>
        </div>
        <div className="footer-bottom section-wrap"><span>© Fundación Manos Guerreras</span><span>Boyacá, Colombia</span></div>
      </footer>
    </div>
  );
}

export default App;

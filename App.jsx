import React, { useState } from 'react';
import { Leaf, BarChart2, Target, Zap, Waves, ArrowRight, Menu, X, Globe, Gauge, TrendingUp, Handshake, ChevronDown } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

// =========================================================
// VARIABLES DE IMAGEN (REEMPLAZA ESTAS URLS CON LAS TUYAS)
// =========================================================
// 1. ¡NUEVA! Imagen de alto impacto para la sección PROBLEMA (primera sección)
// Nota: La imagen de fondo ahora usa un color de crisis que es más cercano al verde/gris-oscuro para la coherencia.
const PROBLEM_IMAGE_URL = 'https://azn.cloud/wp-content/uploads/2020/11/eco.png'; 
// 2. Imagen de alto impacto para la sección principal (solución)
const HERO_IMAGE_URL = 'https://www.crodaagriculture.com/mediaassets/images/crop-care/sustainability/shutterstock-2326547643.jpg?w=1920&la=es-MX&focalpointcrop=1&xratio=0&yratio=0&hash=DC3CC4737B6A0B1F35F54FD4C0FC88BE'; 
// 3. Imagen para el CTA de transición (problema -> solución)
// CAMBIO AQUÍ: Placeholder ahora sugiere un "Camino a la Acción" para guiar la selección de imagen.
const TRANSITION_IMAGE_URL = 'https://serikat.es/wp-content/uploads/2023/07/tecnologia-sostenible-serikat.jpg';
// 4. Imagen del mockup de la interfaz de la aplicación
const APP_MOCKUP_IMAGE_URL = 'https://media.discordapp.net/attachments/1387588959059837070/1427379769233772674/image.png?ex=68eea680&is=68ed5500&hm=a39c70ead4c201b2836a5b3ad3a6293cfc7295019c8d4751b569d11004332600&=&format=webp&quality=lossless';
// =========================================================

// =========================================================
// COMPONENTES DE ESTRUCTURA
// =========================================================

/**
 * Componente funcional para la barra de navegación (Navbar).
 */
const Navbar = ({ handleNavClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleItemClick = (e, targetId) => {
    e.preventDefault();
    setIsMenuOpen(false);
    handleNavClick(targetId);
  };

  const navItems = [
    { name: "Problema", id: "problema" },
    { name: "Características", id: "caracteristicas" },
    { name: "Misión", id: "mision" },
    { name: "Contacto", id: "contacto" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        
        <a href="#solucion" onClick={(e) => handleItemClick(e, 'solucion')} className="flex items-center space-x-2 transition duration-300 transform hover:scale-[1.03] focus:outline-none">
          <Leaf className="w-8 h-8 text-green-600 animate-pulse" />
          <span className="text-2xl font-extrabold text-gray-800 tracking-tight">EcoTrack <span className="text-green-600">Alpha</span></span>
        </a>

        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {navItems.map(item => (
            <a 
              key={item.id} 
              href={`#${item.id}`} 
              onClick={(e) => handleItemClick(e, item.id)}
              className="hover:text-green-600 transition duration-300 py-1 relative group"
            >
              {item.name}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        <a
          href="#solucion"
          onClick={(e) => handleItemClick(e, 'solucion')}
          className="px-6 py-2.5 bg-green-600 text-white font-semibold rounded-xl shadow-xl hover:bg-green-700 transition duration-300 transform hover:scale-[1.02] hidden sm:block focus:outline-none focus:ring-4 focus:ring-green-300"
          aria-label="Comenzar a monitorear mi huella"
        >
          Empezar Ahora
        </a>

        <button 
          className="md:hidden p-2 text-gray-600 hover:text-green-600 transition duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir menú de navegación"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-60 opacity-100 py-2' : 'max-h-0 opacity-0'}`}>
        <nav className="flex flex-col space-y-2 px-4 pb-4">
          {navItems.map(item => (
            <a 
              key={item.id} 
              href={`#${item.id}`} 
              onClick={(e) => handleItemClick(e, item.id)}
              className="py-2 px-3 text-gray-700 font-medium hover:bg-green-50 rounded-lg transition duration-200"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#solucion"
            onClick={(e) => handleItemClick(e, 'solucion')}
            className="mt-4 text-center py-2.5 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition duration-300"
            aria-label="Comenzar a monitorear mi huella"
          >
            Empezar Ahora
          </a>
        </nav>
      </div>
    </header>
  );
};

// =========================================================
// SECCIONES NARRATIVAS
// =========================================================

/**
 * 1. Sección: PROBLEMA y CONCIENCIA. (Problema: Nadie sabe su impacto real)
 * AHORA CON IMAGEN DE FONDO IMPACTANTE y tonos VERDES/AMARILLOS.
 */
const ProblemSection = ({ id, handleNavClick }) => (
    <section 
        id={id} 
        className="relative pt-40 pb-24 min-h-screen flex items-center justify-center text-center bg-cover bg-center"
        style={{ 
            backgroundImage: `url('${PROBLEM_IMAGE_URL}')`,
            backgroundAttachment: 'fixed', // Para un efecto más dramático
        }}
    >
        {/* Overlay dramático para que el texto resalte (Color Gris/Verde Oscuro) */}
        <div className="absolute inset-0 bg-gray-900 opacity-80"></div> 
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-sm uppercase tracking-widest font-semibold text-green-300 mb-4">
                LA REALIDAD QUE IGNORAMOS
            </h2>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight mb-6">
                ¿Sabes realmente cuál es <span className="text-green-400">tu huella</span> en el planeta?
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-10 font-light">
                Cada decisión, desde el desayuno hasta el transporte, deja una marca. La mayoría de nosotros no tenemos idea de cuán grande es ese impacto. <span className="font-bold text-gray-100">Vivimos a ciegas.</span>
            </p>

            {/* Botón con estilo Verde-Amarillo */}
            <button 
                onClick={() => handleNavClick('solucion')}
                className="inline-flex items-center mt-8 px-8 py-3 text-lg font-semibold rounded-xl text-gray-900 bg-green-400 shadow-lg shadow-green-400/50 hover:bg-green-200 transition duration-300 transform hover:scale-[1.05] focus:outline-none focus:ring-4 focus:ring-green-600"
            >
                Ver la Solución <ArrowRight className="w-5 h-5 ml-2" />
            </button>

            <ChevronDown className="w-10 h-10 text-green-400 animate-bounce mx-auto mt-20" />
            
        </div>
    </section>
);

/**
 * 2. Sección: TRANSICIÓN y EMPATÍA. (La frustración por no poder actuar)
 */
const TransitionSection = ({ id }) => (
    <section 
        id={id} 
        className="relative py-20 sm:py-32 text-center bg-cover bg-fixed bg-center"
        style={{ 
            backgroundImage: `url('${TRANSITION_IMAGE_URL}')`,
        }}
    >
        {/* Overlay oscuro para contraste */}
        <div className="absolute inset-0 bg-gray-900 opacity-80"></div> 
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
                Hay una frustración: querer <span className="text-green-500">actuar</span>, pero no saber <span className="text-green-500">por dónde empezar.</span>
            </h2>
            <p className="text-xl text-gray-300 mb-10 font-light italic">
                La intención verde necesita una herramienta inteligente.
            </p>
        </div>
    </section>
);

/**
 * 3. Sección: SOLUCIÓN y HERO (El gran reveal de EcoTrack).
 */
const HeroSection = ({ id }) => (
    <section 
      id={id} 
      className="relative pt-40 pb-24 text-center min-h-[90vh] flex items-center justify-center bg-cover bg-center"
      style={{ 
          backgroundImage: `url('${HERO_IMAGE_URL}')`,
      }}
    >
      {/* Overlay más sutil, enfocado al verde */}
      <div className="absolute inset-0 bg-green-900 opacity-60"></div> 
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Etiqueta / Badge */}
        <span className="inline-flex items-center bg-white/20 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6 shadow-md border border-white/30 transform hover:scale-[1.05] transition duration-300">
          <Gauge className="w-4 h-4 mr-2 text-green-300" />
          ¡EL MONITOREO QUE NECESITAS!
        </span>
        
        {/* Título Principal */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold text-white leading-tight mb-6 tracking-tight">
          Conoce <span className="text-green-400">EcoTrack.</span>
        </h1>
        
        {/* Subtítulo */}
        <p className="text-xl sm:text-2xl text-gray-200 mb-10 max-w-4xl mx-auto font-light">
          EcoTrack te da el poder de <span className="font-bold text-gray-50">medir, entender y reducir</span> tu huella ecológica diaria con datos precisos y acciones concretas.
        </p>
        
        {/* Mockup visual con imagen */}
        <div className="mt-16 flex justify-center">
            <div className="relative w-full max-w-xs h-auto p-4 bg-gray-900 rounded-3xl shadow-[0_35px_60px_-15px_rgba(16,185,129,0.7)] border-8 border-gray-800 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                    src={APP_MOCKUP_IMAGE_URL}
                    alt="Mockup de la interfaz principal de EcoTrack"
                    className="rounded-xl w-full h-auto object-cover"
                    // Fallback de imagen en caso de error
                    onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/400x800/9ca3af/ffffff?text=ERROR+CARGA+MOCKUP'; }}
                />
                {/* Detalle del 'notch' o barra superior del teléfono */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-gray-700 rounded-full"></div>
            </div>
        </div>
      </div>
    </section>
);


// =========================================================
// SECCIONES DIDÁCTICAS (MANTENEMOS LAS FEATURES)
// =========================================================

/**
 * Componente de tarjeta de característica individual.
 */
const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-green-200/50 transition duration-500 transform hover:translate-y-[-4px] border border-gray-100">
    <div className="mb-4 p-3 bg-green-100 rounded-xl inline-block shadow-md">
      <Icon className="w-8 h-8 text-green-600" />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

/**
 * 4. Sección: CARACTERÍSTICAS y MOCKUPS. (Las funciones didácticas de la App)
 */
const FeaturesSection = ({ id }) => {
  const features = [
    { icon: Zap, title: "Energía Inteligente", description: "Monitorea tu consumo eléctrico, identifica picos de uso y optimiza tu factura ecológica." },
    { icon: Waves, title: "Gestión Hídrica", description: "Visualiza tu uso de agua potable y recibe alertas para prevenir el desperdicio." },
    { icon: TrendingUp, title: "Análisis de CO2", description: "Convierte tus datos de consumo en métricas claras de CO2 equivalente y otros contaminantes." },
    { icon: Target, title: "Metas y Retos", description: "Establece objetivos de reducción y sigue tu progreso con insignias y recompensas virtuales." },
  ];

  return (
    <section id={id} className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Tu Kit de Herramientas Ecológicas</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            EcoTrack no solo mide; te equipa con todo lo necesario para transformar tus hábitos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

/**
 * 5. Sección: MISIÓN Y CTA FINAL (El llamado a la acción definitiva).
 */
const MissionSection = ({ id, handleNavClick }) => {
    const steps = [
        { icon: Leaf, title: "Conciencia", description: "Te mostramos el impacto real de cada una de tus acciones diarias." },
        { icon: BarChart2, title: "Medición", description: "Usamos datos precisos para calcular tu huella de carbono, agua y energía." },
        { icon: Handshake, title: "Colaboración", description: "Te conectamos con desafíos y comunidades para multiplicar tu impacto positivo." },
    ];
  return (
    <section id={id} className="py-20 sm:py-28 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Nuestra Misión: Tu Cambio es Posible</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Hacemos que la sostenibilidad sea accesible, personal y fácil de integrar en tu vida.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700 text-center transform hover:shadow-green-600/50 transition duration-500">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-600 text-white text-2xl font-bold mb-4 mx-auto shadow-lg">
                <step.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA final de la sección - Botón destacado */}
        <div className="text-center mt-20">
          <a
          href="https://cfabian1907z3.github.io/eco-track-alpha/"
          onClick={(e) => {
            e.preventDefault(); // evita navegación inmediata
            handleNavClick('solucion');
            window.open("https://cfabian1907z3.github.io/eco-track-alpha/", "_blank");
          }}
          className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-xl font-bold rounded-xl text-green-900 bg-green-400 shadow-2xl shadow-green-400/50 hover:bg-green-300 transition duration-300 transform hover:scale-[1.05] focus:outline-none focus:ring-4 focus:ring-green-300"
          aria-label="Regístrate y comienza tu viaje de sostenibilidad">
            Descargar la App Ahora
            <ArrowRight className="w-6 h-6 ml-2" />
          </a>
            <p className="text-sm text-gray-500 mt-4">Disponible pronto en iOS y Android.</p>
        </div>
      </div>
    </section>
  );
};

/**
 * Componente del pie de página (Footer).
 */
const Footer = ({ id }) => (
  <footer id={id} className="bg-gray-800 text-white py-12 border-t border-green-700">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-700 pb-8 mb-8">
        
        {/* Columna 1: Información de Contacto */}
        <div>
          <h4 className="text-xl font-bold mb-4 text-green-400 flex items-center">
            <Leaf className="w-5 h-5 mr-2" /> EcoTrack Alpha
          </h4>
          <p className="text-gray-400 mb-4 text-sm">
            Comprometidos con la transparencia y el planeta. Monitorea tu impacto y actúa.
          </p>
          <p className="text-sm font-semibold text-gray-300">
            Email: contacto@ecotrack.com
          </p>
        </div>
        
        {/* Columna 2: Enlaces Rápidos */}
        <div>
          <h4 className="text-xl font-bold mb-4 text-green-400">Enlaces Rápidos</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#problema" className="hover:text-green-400 transition">El Problema</a></li>
            <li><a href="#solucion" className="hover:text-green-400 transition">La Solución</a></li>
            <li><a href="#caracteristicas" className="hover:text-green-400 transition">Funciones</a></li>
          </ul>
        </div>
        
        {/* Columna 3: Redes Sociales */}
        <div>
          <h4 className="text-xl font-bold mb-4 text-green-400">Síguenos</h4>
          <p className="text-gray-400 mb-4 text-sm">
            Conviértete en un líder del cambio ecológico.
          </p>
  <div className="flex space-x-4 mt-6">
    {/* Ícono de Facebook */}
    <a
      href="https://www.facebook.com/tu-pagina"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
      // CLASE MODIFICADA: Ahora usa hover:bg-gray-600 en lugar de hover:bg-green-600
      className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition duration-300 transform hover:scale-125 hover:-translate-y-1 cursor-pointer text-white shadow-lg"
    >
      <FaFacebookF size={18} />
    </a>

    {/* Ícono de Twitter */}
    <a
      href="https://twitter.com/tu-perfil"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Twitter"
      // CLASE MODIFICADA: Ahora usa hover:bg-gray-600
      className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition duration-300 transform hover:scale-125 hover:-translate-y-1 cursor-pointer text-white shadow-lg"
    >
      <FaTwitter size={18} />
    </a>

    {/* Ícono de LinkedIn */}
    <a
      href="https://www.linkedin.com/in/tu-perfil"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      // CLASE MODIFICADA: Ahora usa hover:bg-gray-600
      className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition duration-300 transform hover:scale-125 hover:-translate-y-1 cursor-pointer text-white shadow-lg"
    >
      <FaLinkedinIn size={18} />
    </a>
  </div>
        </div>
      </div>
      
      <div className="text-center text-sm text-gray-500 pt-4">
        &copy; {new Date().getFullYear()} EcoTrack Alpha. Todos los derechos reservados.
      </div>
    </div>
  </footer>
);

/**
 * Componente principal de la aplicación.
 * Renderiza todas las secciones de la Landing Page en orden narrativo.
 */
export default function App() {
  
  // Función para manejar el scroll suave
  const handleNavClick = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="font-['Inter'] antialiased bg-white text-gray-900 min-h-screen overflow-x-hidden">
      <Navbar handleNavClick={handleNavClick} />
      <main>
        {/* ESTRUCTURA NARRATIVA */}
        <ProblemSection id="problema" handleNavClick={handleNavClick} />
        <TransitionSection id="transicion" />
        <HeroSection id="solucion" /> {/* La solución de alto impacto */}
        <FeaturesSection id="caracteristicas" />
        <MissionSection id="mision" handleNavClick={handleNavClick} />
      </main>
      <Footer id="contacto" />
    </div>
  );
}



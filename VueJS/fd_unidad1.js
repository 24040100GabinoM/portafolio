// Componente global para Unidad 1 (frontend)
window.FdUnidad1 = {
  template: `
  <div>
    <header>
      <div class="container">
        <h1>Portafolio Frameworks</h1>
        <p><strong>Alumnos:</strong> Abner Josias Torres Velez - Gabino Martinez Delgado</p>
        <p>TI Entornos Virtuales Negocios Digitales | 5EVND-A | Frameworks para Desarrollo Web</p>
      </div>
    </header>

    <nav class="barra">
      <ul class="links">
        <li><button class="nav-btn" data-target="inicio"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="35px" height="35px"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="#f5f5f5"/></svg></button></li>
        <li><button class="nav-btn" data-target="frontend">Proceso de Desarrollo de Frontend</button></li>
        <li><button class="nav-btn" data-target="backend">Proceso de Desarrollo de Backend</button></li>
        <li><button class="nav-btn" data-target="seguridad">Proceso de Seguridad e Implementación</button></li>
        <li><button class="nav-btn" data-target="informacion">Contacto</button></li>
      </ul>
    </nav>

    <main class="container">
      <h2>Unidad 1: Proceso de Desarrollo de Frontend</h2>

      <div class="intro">
        <h3>1. Fundamentos de Frontend</h3>
        <h4>a. Concepto de frameworks de Frontend</h4>
        <p>Un framework no es solo una biblioteca de funciones; es un entorno de trabajo completo que impone una arquitectura. Su propósito principal es resolver problemas recurrentes como la manipulación del DOM, el manejo de eventos y la sincronización de datos, permitiendo que el desarrollador se enfoque en la lógica de negocio y no en la configuración básica.</p>

        <h4>b. Tipos de frameworks existentes</h4>
        <p><strong>Basados en Componentes:</strong> Utilizan una arquitectura modular donde la interfaz se divide en piezas pequeñas, reutilizables y autónomas (React, Vue, Angular).</p>
        <p><strong>CSS Frameworks:</strong> Proporcionan un sistema de diseño preestablecido para asegurar la consistencia visual y la rapidez en el desarrollo del diseño (Bootstrap, Tailwind).</p>
        <p><strong>Frameworks de Renderizado (Meta-frameworks):</strong> Optimizan el rendimiento mediante técnicas como el Server Side Rendering (SSR) o el Static Site Generation (SSG), fundamentales para el SEO (Next.js para React, Nuxt.js para Vue).</p>

        <h4>c. Herramientas esenciales</h4>
        <p><strong>Gestores de Paquetes (NPM/Yarn):</strong> Actúan como un repositorio central para instalar dependencias externas de forma segura.</p>
        <p><strong>Linters y Formateadores (ESLint/Prettier):</strong> Garantizan que el código sea limpio y siga los estándares de la industria, evitando errores sintácticos antes de ejecutar el programa.</p>
        <p><strong>Control de Versiones (Git):</strong> Herramienta indispensable para el trabajo colaborativo y el seguimiento de cambios en el código fuente.</p>
        <p>Si seleccionamos Vue.js por su curva de aprendizaje equilibrada, las herramientas esenciales son: Node.js y npm/pnpm/yarn, Vite, Vue DevTools y VS Code con la extensión Volar.</p>

        <h4>d. Proceso de instalación y configuración</h4>
        <p>El flujo de trabajo moderno implica la instalación de Node.js, el scaffolding con herramientas como <code>npm create vue@latest</code> y la instalación de dependencias con <code>npm install</code>. Luego se inicia el servidor de desarrollo con <code>npm run dev</code>, que habilita Hot Module Replacement (HMR) para previsualizar cambios en tiempo real.</p>

        <h3>2. Diseño Frontend</h3>
        <h4>a. Elementos que integran el framework de Front-End</h4>
        <p>Motor de Renderizado, Gestión de Rutas (Router), Administrador de Estado, CLI y Manejo de Dependencias son componentes esenciales de un framework moderno.</p>

        <h4>b. Modelo MVVM, instancias, interpolaciones, directivas, filtros, propiedades y funciones</h4>
        <p>Modelo MVVM separa Model (datos), View (HTML) y ViewModel (vínculo reactivo). Las interpolaciones ({{ }}), directivas (v-if, v-for), filtros y propiedades permiten construir interfaces reactivas y mantenibles.</p>

        <h4>c. Local Storage, APIs y su consumo</h4>
        <p>Local Storage permite almacenar datos persistentes en el navegador. Las APIs se consumen mediante peticiones HTTP (fetch o axios), manejando promesas y procesando respuestas en JSON.</p>

        <h4>d. Elementos para el hospedaje del sitio web</h4>
        <p>Se requieren un servidor o servicio cloud (AWS, Vercel, Netlify), un dominio, certificado SSL y un pipeline de CI/CD para despliegues automáticos.</p>

        <h4>e. Contenidos que integran el sitio web</h4>
        <p>Formularios, contenido estructurado (encabezados y párrafos), tipografía, imágenes optimizadas, animaciones, botones, iconos, fondos, enlaces y videos forman parte del sitio y deben optimizarse para rendimiento y accesibilidad.</p>

        <h4>f. Diseños de Interfaces (UI), Experiencias (UX) y Diseño de Interacción (IXD) del sitio responsivo</h4>
        <p>UX (arquitectura y necesidades del usuario), UI (diseño visual), IXD (respuesta a gestos y clics). Usar wireframes, mockups y prototipos antes de implementar el código.</p>

        <h4>g. Identificar el framework de diseño responsivo a utilizar</h4>
        <p>Opciones: Tailwind CSS (utilidades), Bootstrap (componentes preconstruidos) o Material Design (estándares visuales). Para este proyecto se propone un framework basado en Grid y Flexbox.</p>
      </div>

    </main>

    <footer>
      <p>Abner Josias Torres Velez | Gabino Martinez Delgado | Universidad Tecnológica de Coahuila (UTC)</p>
      <p>Materia: Frameworks | 5to Cuatrimestre</p>
    </footer>
  </div>
  `
};

// Componente global para Unidad 2 (backend)
window.FdUnidad2 = {
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
      <h2>Unidad 2: Proceso de Desarrollo de Backend</h2>
      <div class="intro">
       <h3>1. Fundamentos de Backend</h3>
        <h4>a) Concepto de Frameworks de Backend Web</h4>
        <p>Un framework de backend es un conjunto estructurado de herramientas,
        bibliotecas y convenciones que permiten desarrollar la lógica del lado 
        del servidor de una aplicación web.</p>
        <h4>b) El backend es responsable de:</h4>
        <p>
        <ul>
          <li>Procesar solicitudes HTTP</li>
          <li>Gestionar la lógica de negocio</li>
          <li>Interactuar con bases de datos</li>
          <li>Autenticar usuarios</li>
          <li>Generar respuestas para el frontend</li>
        </ul>
        </p>
        <h4>Un framework backend proporciona:</h4>
        <p>
        <ul>
          <li>Arquitectura predefinida (generalmente MVC).</li>
          <li>Sistema de rutas.</li>
          <li>ORM para bases de datos.</li>
          <li>Manejo de sesiones.</li>
          <li>Middleware.</li>
          <li>Seguridad integrada.</li>
        </ul>
        </p>
        <p>Su finalidad es acelerar el desarrollo, mantener organización del código y aplicar buenas prácticas de ingeniería de software.</p>
        <h4>c) Tipos de frameworks existentes</h4>
        <p>Los frameworks backend se clasifican principalmente según el lenguaje de programación que utilizan:</p><br>
        <h4>Tipos de frameworks en PHP:</h4>
        <p>
        <ul>
            <li>Laravel</li>
            <li>Symfony</li>
            <li>CodeIgniter</li>
        </ul>
        <h4>Frameworks en JavaScript (Node.js):</h4>
        <p>
        <ul>
            <li>Express.js</li>
            <li>NestJS</li>
        </ul>
        </p>
        <h4>Frameworks en Python:</h4>
        <p>
        <ul>
            <li>Django</li>
            <li>Flask</li>
        </ul>
        </p>
        <h4>Frameworks en Java:</h4>
        <p>
           <ul>
              <li>Spring Boot</li>
            </ul>
        <h4>Frameworks en Ruby:</h4>
        <p>
           <ul>
                <li>Ruby on Rails</li>
            </ul>
        </p>
          <p>Cada uno ofrece ventajas en rendimiento, escalabilidad, comunidad, curva de aprendizaje y ecosistema.</p>

          <h4>c) Herramientas para el Framework Seleccionado (Laravel)</h4>
          <p>Seleccionaremos Laravel como framework de referencia por su popularidad y estructura robusta.</p>
          <br>
          <p><strong>Herramientas necesarias:</strong></p>
          <ul>
            <li>PHP 8.x</li>
            <li>Composer (gestor de dependencias)</li>
            <li>Servidor local (XAMPP o Apache/Nginx)</li>
            <li>Base de datos (MySQL)</li>
            <li>Node.js (para assets frontend)</li>
            <li>Visual Studio Code</li>
            <li>Git</li>
          </ul>
          <br>
          <p><strong>Laravel incluye:</strong></p>
          <ul>
            <li>Eloquent ORM</li>
            <li>Sistema de migraciones</li>
            <li>Motor de plantillas Blade</li>
            <li>Artisan CLI</li>
            <li>Middleware</li>
          </ul>

          <h4>d) Proceso de Instalación y Configuración (Laravel)</h4>
          <ol>
            <li><strong>Instalar PHP y servidor local</strong>
              <p>Instalar XAMPP o configurar Apache/Nginx manualmente.</p>
            </li>
            <br>
            <li><strong>Instalar Composer</strong>
              <p>Composer permite instalar dependencias automáticamente.</p>
            </li>
            <br>
            <li><strong>Crear proyecto Laravel</strong>
              <p>Ejemplo:</p>
              <pre><code>composer create-project laravel/laravel nombre_proyecto</code></pre>
            </li>
            <br>
            <li><strong>Configurar archivo .env</strong>
              <p>Definir conexión a base de datos:</p>
              <pre><code>DB_DATABASE=nombre_db 
DB_USERNAME=root
DB_PASSWORD=</code></pre>
            <br>
            </li>
            <li><strong>Generar clave de aplicación</strong>
              <pre><code>php artisan key:generate</code></pre>
            </li>
            <br>
            <li><strong>Ejecutar servidor</strong>
              <pre><code>php artisan serve</code></pre>
              <p>Acceso en navegador: <a href="http://127.0.0.1:8000">http://127.0.0.1:8000</a></p>
            </li>
          </ol>

          <h3>2. Diseño Backend</h3>
          <h4>a) Elementos que integran el Framework</h4>
          <h5>I) ¿Qué es MVC?</h5>
          <p>MVC significa Modelo – Vista – Controlador.</p>
          <ul> 
            <li><strong>Modelo (Model):</strong> Maneja la lógica de datos y conexión con la base de datos.</li>
            <li><strong>Vista (View):</strong> Interfaz que ve el usuario.</li>
            <li><strong>Controlador (Controller):</strong> Intermediario entre modelo y vista.</li>
            <br>
            <p><strong>Ventajas:</strong></p>
            <li>Separación de responsabilidades.</li>
            <li>Código más organizado.</li>
            <li>Escalabilidad.</li>
            <br>
          <h5>II) Migraciones</h5>
          <p>Las migraciones son archivos que permiten crear y modificar tablas de base de datos mediante código.</p>
          <br>
          <p><strong>Ejemplo:</strong></p>
          <pre><code>php artisan make:migration create_users_table</code></pre>
          <br>
          <p><strong>Permiten:</strong></p>
            <li>Versionar la base de datos.</li>
            <li>Controlar cambios estructurales.</li>
            <li>Trabajar en equipo sin conflictos.</li>
          <br>
          <h5>III) Modelo de base de datos</h5>
          <p>Los modelos representan tablas.</p>
          <p>En Laravel se usa Eloquent ORM.</p>
          <br>
          <p><strong>Ejemplo</strong></p>
          <pre><code>php artisan make:model User</code></pre>
          <br>
          <p><strong>Funciones:</strong></p>
            <li>CRUD automático.</li>
            <li>Relaciones (uno a uno, uno a muchos, muchos a muchos).</li>
            <li>Consultas simplificadas.</li>
            <br>
           <h5>IV) Rutas</h5>
          <p>Ruta: El camino (GET /usuarios/perfil).</p>
          <p>Vista: El destino. En el backend moderno, la "Vista" suele ser un Template Engine (que genera HTML dinámico) o un JSON (si es una API).</p>


         <p><strong>Controladores:</strong>
         <br>
         Aquí vive la lógica de validación. Ejemplo: Si el usuario intenta comprar algo, el controlador verifica si tiene saldo antes de dejarlo pasar al Modelo.</p>
         <h4> b) Diseño de UI, UX e IXD</h4>
         <p><strong> UI (User Interface)</strong></p>
         <p>Diseño visual:</p>
         <li>Colores</li>
         <li>Tipografía</li>
         <li>Botones</li>
         <li>Formularios</li>
         <li>Layout responsivo.</li>
         <br>
         <p><strong>Debe ser:</strong></p>
         <li>Clara</li>
         <li>Minimalista</li>
         <li>Consistente</li>

         <h4>UX (User Experience)</h4>
         <p><strong>Experiencia de usuario:</strong></p>
         <li>Facilidad de navegación.</li>
         <li>Tiempo de carga.</li>
         <li>Fluidez.</li>
         <li>Accesibilidad.</li>
         <br>
         <h4> IXD (Interaction Design)</h4>
         <p><strong>Diseño de interacción:</strong></p>
         <li>Animaciones sutiles.</li>
         <li>Feedback visual (hover, click).</li>
         <li>Confirmaciones</li>
         <br>
         <p><strong>Ejemplo:</strong></p>
         <li>Validacion en tiempo real.</li>
         <li>Alertas Dinamicas.</li>
         <h3>3. Desarrollo de backend</h3>
         <h4>a)Definir el Gestor de Base de Datos</h4>
         <p><strong>Seleccionemos:</strong></p>
         <li>MySQL</li>
         <br>
         <p><strong>Caracteristicas:</strong></p>
          <li>Relacional</li>
          <li>SQL estándar.</li>
          <li>Alto rendimiento</li>
          <li>Seguridad</li>
          <li>Compatible en laravel</li>
         <h4>b) Modelos Conceptuales de Base de Datos</h4>
         <p><strong>Se definen mediante:</strong></p>
          <li>Diagramas Entidad-Relación (ER).</li>
          <li>Normalización (1FN, 2FN, 3FN).</li>
          <p><strong>Ejemplo:</strong></p>
          <br>
          <p><strong>Entidad Usuario:</strong></p>
          <li>id (PK)</li>
          <li>nombre</li>
          <li>email</li>
          <li>Contraseña</li>
          <li>created_at</li>
          <p><strong>Relación:</strong></p>
          <p>Usuario → Publicaciones (1:N)</p>
         <h4>c) Diseño de Interfaces de Usuario</h4>
          <p><strong>Para sitio responsivo:</strong></p>
          <li>Framework CSS como Bootstrap.</li>
          <li>Diseño Mobile First.</li>
          <li>Breakpoints.</li>
          <li>Grid system.</li>
          <li>Formularios validados.</li>
          <p><strong>Estructura básica:</strong></p>
          <li>Header</li>
          <li>Navbar.</li>
          <li>Contenido dinámico</li>
          <li>Footer</li>
         <h4>d) Funcionalidad del Sitio con el Framework</h4>
         <p><strong>Con Laravel se implementa:</strong></p>
         <li>Autenticación.</li>
          <li>Registro/Login.</li>
          <li>CRUD completo.</li>
          <li>Validación de formularios.</li>
          <li>Middleware de seguridad.</li>
          <li>Enrutamiento dinámico.</li>
          <li>API RESTful si es necesario.</li>
          <p><strong>Flujo típico:</strong></p>
          <li>Usuario envía formulario.</li>
          <li>Ruta dirige al controlador.</li>
          <li>Controlador valida.</li>
          <li>Modelo guarda datos.</li>
          <li>Vista muestra respuesta</li>







          </ul>
          </div>
    </main>

    <footer>
      <p>Abner Josias Torres Velez | Gabino Martinez Delgado | Universidad Tecnológica de Coahuila (UTC)</p>
      <p>Materia: Frameworks | 5to Cuatrimestre</p>
    </footer>
  </div>
  `
};

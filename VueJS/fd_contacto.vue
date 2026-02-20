<template>
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
      <h2>Próximamente</h2>
      <p>Sección de contacto. Contenido por agregar en el futuro.</p>
    </main>

    <footer>
      <p>Abner Josias Torres Velez | Gabino Martinez Delgado | Universidad Tecnológica de Coahuila (UTC)</p>
      <p>Materia: Frameworks | 5to Cuatrimestre</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'FdContacto'
}
</script>

<style scoped>
/* No estilos nuevos: se usa styles/styles.css */
</style>

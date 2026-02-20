// Lógica central de navegación (delegación de eventos)
(function(){
    function inPhpFolder(){
        return location.pathname.includes('/PHP/');
    }

    function goToPage(file){
        if(!file) return;
        // Si estamos dentro de la carpeta PHP, las rutas relativas a otras PHP deben omitirse del prefijo
        const path = inPhpFolder() ? file.replace(/^PHP\//, '') : file;
        window.location.href = path;
    }

    function handleTarget(target){
        if(!target) return;
        if(target === 'inicio'){
            // Si ya estamos en el index (no en /PHP/), hacemos scroll al top, si estamos en PHP volvemos al index
            if(inPhpFolder()){
                // desde /PHP/ subir a index.html en la carpeta padre
                window.location.href = '../index.html';
            } else {
                // ya en index -> scroll al inicio
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
            return;
        }

        const mapping = {
            'frontend': 'PHP/unidad1.php',
            'backend' : 'PHP/unidad2.php',
            'seguridad': 'PHP/unidad3.php',
            'informacion': 'PHP/contacto.php'
        };

        const file = mapping[target];
        if(file) goToPage(file);
    }

    // Delegación de eventos para botones de navbar y botones de los cards
    document.addEventListener('click', function(e){
        const navBtn = e.target.closest('.nav-btn');
        if(navBtn){
            const tgt = navBtn.dataset.target;
            handleTarget(tgt);
            e.preventDefault();
            return;
        }

        const cardBtn = e.target.closest('.card-btn');
        if(cardBtn){
            const tgt = cardBtn.dataset.target;
            handleTarget(tgt);
            e.preventDefault();
            return;
        }
    }, false);

    // Si la página se carga y la ruta es index sin archivo (ej. /porta/), el botón inicio debe hacer scroll
    // No es necesario más código aquí porque manejamos en tiempo de click.

})();

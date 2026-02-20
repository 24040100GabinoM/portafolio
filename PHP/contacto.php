<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contacto</title>
    <link rel="stylesheet" href="../styles/styles.css">
    <style>#app{min-height:60vh}</style>
</head>
<body>
    <div id="app">Cargando...</div>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script>
    (function(){
        const BASE = window.location.origin + '/portafolio';

        function showError(msg){
            console.error(msg);
            const el = document.getElementById('app');
            if(el) el.innerText = 'Error cargando componente: ' + msg;
        }

        function loadScript(src, cb){
            const s = document.createElement('script');
            s.src = src;
            s.async = true;
            s.onload = () => cb();
            s.onerror = () => showError('No se pudo cargar script: '+src);
            document.head.appendChild(s);
        }

        if(!window.Vue){
            showError('Vue no está definido. Comprueba la URL del CDN (esperaba window.Vue).');
            return;
        }

        // Usar ruta relativa desde la carpeta PHP para cargar el componente (más robusto)
        // Añadimos un parámetro `ts` con timestamp para evitar caché del navegador durante desarrollo
        const compUrl = '../VueJS/fd_contacto.js?ts=' + Date.now();
        console.log('Cargando componente JS desde', compUrl);
        loadScript(compUrl, function(){
            if(!window.FdContacto){
                showError('Componente `FdContacto` no encontrado en '+compUrl);
                return;
            }
            try{
                Vue.createApp(window.FdContacto).mount('#app');
            }catch(err){
                showError(err && err.message ? err.message : String(err));
            }
        });

    })();
    </script>

    <script src="../JS/logica.js"></script>
</body>
</html>

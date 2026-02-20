<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Unidad 1 - Proceso de Desarrollo de Frontend</title>
    <link rel="stylesheet" href="../styles/styles.css">
    <style>/* pequeño ajuste para que el mount ocupe espacio */
    #app{min-height:60vh}
    </style>
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

        const compUrl = BASE + '/VueJS/fd_unidad1.js';
        console.log('Cargando componente JS desde', compUrl);
        loadScript(compUrl, function(){
            if(!window.FdUnidad1){
                showError('Componente `FdUnidad1` no encontrado en '+compUrl);
                return;
            }
            try{
                Vue.createApp(window.FdUnidad1).mount('#app');
            }catch(err){
                showError(err && err.message ? err.message : String(err));
            }
        });

    })();
    </script>

    <script src="../JS/logica.js"></script>
</body>
</html>

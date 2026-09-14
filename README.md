# Hacker-Web-Simulation

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=111) ![Canvas API](https://img.shields.io/badge/Canvas_API-111111?logo=html5&logoColor=white) ![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white) ![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?logo=githubactions&logoColor=white)

Terminal visual de ficción; no ejecuta ataques ni minería.

## Ejecutar

Requiere Node.js 22 o superior. No hay dependencias de paquetes.

```sh
git clone https://github.com/romangon10/Hacker-Web-Simulation.git
cd Hacker-Web-Simulation
npm start
```

Abrí `http://127.0.0.1:3000`. Para usar otro puerto, configurá `PORT`. Serví la página por HTTP; los proyectos con módulos ES no funcionan abriendo el HTML con `file://`.

## Funcionalidad implementada

- Pausa, reanudación y reinicio del estado y contador.
- Animación adaptable al tamaño de pantalla y pausada en pestañas ocultas.
- Modelo de simulación separado del DOM, con pruebas deterministas.
- Movimiento reducido y registro accesible.

## Estructura

- `index.html`: contenido y controles.
- `style.css`: estilos y adaptación de pantalla.
- `script.js`: interacción con el navegador.
- `tools/serve.mjs`: servidor local con lista explícita de archivos públicos.
- `tools/build.mjs`: copia de los archivos públicos a `dist/`.
- `test/`: verificaciones automatizadas.

## Verificación y publicación

```sh
npm test
npm run build
```

El resultado `dist/` puede alojarse en un servicio estático. El build no publica la página por sí mismo. Las pruebas comprueban referencias locales y sintaxis; los proyectos con lógica de simulación incluyen pruebas de esa lógica. No se ha realizado verificación visual automatizada en un navegador.

## Alcance

Frontend de portfolio. No hay backend, base de datos, autenticación ni recolección de datos. Los controles cambian únicamente el estado temporal de la página. Las mejoras futuras deben acompañarse de sus propias pruebas y documentación.

## Autor

[Román González](https://github.com/romangon10)

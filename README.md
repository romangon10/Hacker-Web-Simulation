# Hacker-Web-Simulation

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=111) ![Playwright](https://img.shields.io/badge/Playwright-2EAD33?logo=playwright&logoColor=white) ![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white) ![GitHub Actions](https://img.shields.io/badge/CI-passing-2EAD33?logo=githubactions&logoColor=white)

Terminal visual de ficción; no ejecuta ataques ni minería.

## Ejecutar

Requiere Node.js 22 o superior.

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
- Panel de estado que deja claro que el entorno es local, seguro y sin conexión a redes.

## Estructura

- `index.html`: contenido y controles.
- `style.css`: estilos y adaptación de pantalla.
- `script.js`: interacción con el navegador.
- `tools/serve.mjs`: servidor local con lista explícita de archivos públicos.
- `tools/build.mjs`: copia de los archivos públicos a `dist/`.
- `test/`: verificaciones automatizadas.

## Estrategia QA

La suite combina pruebas unitarias y end-to-end:

| Nivel | Cobertura |
| --- | --- |
| Unitarias | Secuencia de eventos, cálculo determinista, reinicio y valores límite |
| Smoke E2E | Carga, título, contenido principal y estado seguro |
| Funcionales E2E | Pausa, reanudación, reinicio del registro y contador |
| Accesibilidad E2E | Roles, estado anunciado y preferencia de movimiento reducido |

Casos automatizados principales: `QA-SMOKE-001`, `QA-FUNC-001`, `QA-FUNC-002` y `QA-A11Y-001`.

## Verificación y publicación

```sh
npm test
npm run test:e2e
npm run test:qa
npm run build
```

`npm test` ejecuta las pruebas unitarias. `npm run test:e2e` abre Chromium mediante Playwright y comprueba los recorridos críticos como un usuario. GitHub Actions ejecuta ambas capas en cada push y pull request. El resultado `dist/` puede alojarse en un servicio estático; el build no publica la página por sí mismo.

## Alcance

Frontend de portfolio. No hay backend, base de datos, autenticación ni recolección de datos. Los controles cambian únicamente el estado temporal de la página. Las mejoras futuras deben acompañarse de sus propias pruebas y documentación.

## Autor

[Román González](https://github.com/romangon10)

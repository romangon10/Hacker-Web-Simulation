# Hacker Web Simulation

[![Quality](https://github.com/romangon10/Hacker-Web-Simulation/actions/workflows/quality.yml/badge.svg)](https://github.com/romangon10/Hacker-Web-Simulation/actions/workflows/quality.yml)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=111)
![Canvas API](https://img.shields.io/badge/Canvas_API-111111?logo=html5&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white)

An interactive fictional terminal built for the browser. It does **not** perform attacks, mining or real system operations.

## Features

- Pause, resume and reset controls for the simulation state.
- Responsive Canvas animation that adapts to the viewport.
- Animation suspension when the browser tab is hidden.
- Simulation logic separated from the DOM for deterministic testing.
- Reduced-motion support and an accessible activity log.
- Explicit public-file allowlist in the local server.

## Run locally

Requires **Node.js 22 or later**. The project has no third-party runtime dependencies.

```sh
git clone https://github.com/romangon10/Hacker-Web-Simulation.git
cd Hacker-Web-Simulation
npm start
```

Open `http://127.0.0.1:3000`. Set `PORT` to use another port.

## Quality assurance

```sh
npm test
npm run build
```

| Quality gate | Coverage |
| --- | --- |
| Automated tests | Simulation state and deterministic logic |
| Syntax validation | Browser and Node.js JavaScript |
| Build validation | Required assets copied into `dist/` |
| Repository CI | Tests and build run through GitHub Actions |
| Manual checks | Responsive layout, controls and reduced motion |

## Structure

| Path | Responsibility |
| --- | --- |
| `index.html` | Semantic interface and controls |
| `style.css` | Visual system and responsive layout |
| `script.js` | Browser events, Canvas rendering and accessibility |
| `simulation.js` | Testable simulation state |
| `tools/serve.mjs` | Local HTTP server with explicit public assets |
| `tools/build.mjs` | Static production build |
| `test/` | Automated verification |

## Deployment

The `dist/` directory can be hosted by any static-site provider after running `npm run build`. Opening the source directly through `file://` is not supported because the project uses ES modules.

## Scope and safety

This is a visual portfolio simulation. It has no backend, authentication, database, telemetry or personal-data collection. Controls only modify temporary browser state.

## Author

Created by [Roman Nicolas Gonzalez](https://github.com/romangon10) · [LinkedIn](https://www.linkedin.com/in/romannicolasgonzalez/)

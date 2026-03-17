// 🎥 Efecto Matrix
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const chars = "01アカサタナハマ";
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#0f0";
  ctx.font = fontSize + "px monospace";
  drops.forEach((y, i) => {
    const text = chars[Math.floor(Math.random() * chars.length)];
    const x = i * fontSize;
    ctx.fillText(text, x, y * fontSize);
    if (y * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  });
}
setInterval(drawMatrix, 33);

// 💻 Terminal fake
const terminal = document.getElementById("terminal");
const comandos = [
  "> Accediendo a sistema global...",
  "> Iniciando escaneo de redes ocultas...",
  "> Cifrando canales de comunicación...",
  "> Conectando con billetera BTC...",
  "> Iniciando minería...",
];

let index = 0;
let btcBalance = 0;

function mostrarLinea() {
  if (index < comandos.length) {
    const linea = document.createElement("div");
    linea.innerHTML = `<span class="rainbow">${comandos[index]}</span>`;
    terminal.appendChild(linea);
    index++;
    setTimeout(mostrarLinea, 1200);
  } else {
    // Simular minería de bitcoins
    const btcDiv = document.createElement("div");
    btcDiv.id = "btc-mining";
    terminal.appendChild(btcDiv);

    const interval = setInterval(() => {
      btcBalance += Math.random() * 0.01;
      btcDiv.innerHTML = `<span class="rainbow">> BTC Minado: ${btcBalance.toFixed(5)} ฿</span>`;
    }, 800);

    // Esperando comandos
    const final = document.createElement("div");
    final.innerHTML = '<br><span>> Esperando comandos... <span class="blinker">█</span></span>';
    terminal.appendChild(final);

    // Botón final
    const btn = document.createElement("button");
    btn.className = "btn-fake";
    btn.innerText = "Desactivar Sistema";
    btn.onclick = () => {
      clearInterval(interval);
      alert("💣 ¡BOOM! Era una broma hacker. 😎");
    };
    terminal.appendChild(btn);
  }
}

setTimeout(mostrarLinea, 2000);

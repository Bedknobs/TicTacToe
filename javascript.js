let turno = 0;
const tablero = [];

const btnPulsado = (e, pos) => {
  if (tablero[pos]) return; // Evita cambiar una casilla ya ocupada

  turno++;
  const btn = e.target;
  const img = btn.querySelector("img");
  const color = turno % 2 ? "./img/flower.png" : "./img/lotus.png";

  if (img) {
    img.src = color; // Cambia la imagen en el botón
  }

  tablero[pos] = color; // Guarda la jugada en el array

  if (haGanado()) {
    setTimeout(() => {
      const ganador = color.includes("flower") ? "🌸 La Flor" : "🌿 El Loto";
      alert(`¡${ganador} ha ganado! 🎉`);
    }, 500);
  }
};

const haGanado = () => {
  return (
    (tablero[0] && tablero[0] == tablero[1] && tablero[0] == tablero[2]) ||
    (tablero[3] && tablero[3] == tablero[4] && tablero[3] == tablero[5]) ||
    (tablero[6] && tablero[6] == tablero[7] && tablero[6] == tablero[8]) ||
    (tablero[0] && tablero[0] == tablero[3] && tablero[0] == tablero[6]) ||
    (tablero[1] && tablero[1] == tablero[4] && tablero[1] == tablero[7]) ||
    (tablero[2] && tablero[2] == tablero[5] && tablero[2] == tablero[8]) ||
    (tablero[0] && tablero[0] == tablero[4] && tablero[0] == tablero[8]) ||
    (tablero[2] && tablero[2] == tablero[4] && tablero[2] == tablero[6])
  );
};

document
  .querySelectorAll("button")
  .forEach((btn, i) => btn.addEventListener("click", (e) => btnPulsado(e, i)));

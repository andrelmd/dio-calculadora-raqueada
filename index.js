function calcularNivel(vitorias) {
  let nivel;

  if (vitorias <= 10) {
    nivel = "Ferro";
  } else if (vitorias >= 11 && vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
    nivel = "Lendário";
  } else {
    nivel = "Imortal";
  }
  return nivel;
}

function calcularSaldoVitorias(vitorias, derrotas) {
  return vitorias - derrotas;
}

const vitorias = 75;
const derrotas = 25;

const nivel = calcularNivel(vitorias);
const saldoVitorias = calcularSaldoVitorias(vitorias, derrotas);

console.log(`O Herói tem saldo de ${saldoVitorias} está no nível de ${nivel}`);

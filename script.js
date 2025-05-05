// Contadores de rolagem
let rollCounts = {
  habilidade: 0,
  energia: 0,
  sorte: 0
};

// Função utilitária para gerar número aleatório entre min e max (inclusive)
function rolarDado(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Habilidade: D6 + 6 (até 3 vezes)
document.getElementById("rollD6_1").addEventListener("click", function () {
  if (rollCounts.habilidade >= 3) {
    alert("Você já rolou o dado de HABILIDADE 3 vezes!");
    return;
  }

  let roll = rolarDado(1, 6);
  let total = roll + 6;

  document.getElementById("d6Result1").innerText = roll;
  document.getElementById("totalResult1").innerText = total;

  rollCounts.habilidade++;
});

// Energia: 2D6 + 12 (até 3 vezes)
document.getElementById("roll2D6").addEventListener("click", function () {
  if (rollCounts.energia >= 3) {
    alert("Você já rolou os dados de ENERGIA 3 vezes!");
    return;
  }

  let roll1 = rolarDado(1, 6);
  let roll2 = rolarDado(1, 6);
  let total = roll1 + roll2 + 12;

  document.getElementById("d6Result2D6").innerText = `${roll1} + ${roll2}`;
  document.getElementById("totalResult2D6").innerText = total;

  rollCounts.energia++;
});

// Sorte: D6 + 6 (até 3 vezes)
document.getElementById("rollD6_2").addEventListener("click", function () {
  if (rollCounts.sorte >= 3) {
    alert("Você já rolou o dado de SORTE 3 vezes!");
    return;
  }

  let roll = rolarDado(1, 6);
  let total = roll + 6;

  document.getElementById("d6Result2").innerText = roll;
  document.getElementById("totalResult2").innerText = total;

  rollCounts.sorte++;
});

// Botão de salvar
document.getElementById("salvarBtn").addEventListener("click", function () {
  const nome = document.getElementById("nome").value.trim();
  const habilidade = document.getElementById("totalResult1").innerText;
  const energia = document.getElementById("totalResult2D6").innerText;
  const sorte = document.getElementById("totalResult2").innerText;

  if (!nome || habilidade === "___" || energia === "___" || sorte === "___") {
    alert("Seu Troll de inteligência -3. Tem que preencher toda a ficha!");
    return;
  }

  const ficha = {
    nome: nome,
    habilidade: habilidade,
    energia: energia,
    sorte: sorte
  };

  const fichaJSON = JSON.stringify(ficha, null, 2); // formato bonitinho
  const blob = new Blob([fichaJSON], { type: "application/json" });

  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "ficha-aventuras-fantasticas.json";
  link.click();
});

const display = document.getElementById("display");

function inserir(valor) {
  if (display.innerText === "0" || display.innerText === "Erro") {
    display.innerText = valor;
  } else {
    display.innerText += valor;
  }
}

function limpar() {
  display.innerText = "0";
}

function apagar() {
  if (display.innerText.length > 1) {
    display.innerText = display.innerText.slice(0, -1);
  } else {
    display.innerText = "0";
  }
}

function calcular() {
  try {
    display.innerText = eval(display.innerText);
  } catch {
    display.innerText = "Erro";
  }
}

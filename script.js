var quantidadeAguaPorMinuto = 10; // ml
var irrigacaoLigada = false;

function ligarIrrigacao() {
    irrigacaoLigada = true;
    document.getElementById("status-irrigacao").textContent = "Irrigando";
}

function desligarIrrigacao() {
    irrigacaoLigada = false;
    document.getElementById("status-irrigacao").textContent = "Não irrigando";
}

function atualizarDados(dados) {
    document.getElementById("temperatura").textContent = dados.temperatura.toFixed(2);
    document.getElementById("umidade").textContent = dados.umidade.toFixed(2);
    document.getElementById("condicao-solo").textContent = dados.condicaoSolo;

    if (irrigacaoLigada) {
        var quantidadeAgua = calcularQuantidadeAgua(dados.umidade);
        document.getElementById("quantidade-agua").textContent = quantidadeAgua.toFixed(2);
    } else {
        document.getElementById("quantidade-agua").textContent = "--";
    }
}

function calcularQuantidadeAgua(umidade) {
    var quantidadeAguaPorHora = quantidadeAguaPorMinuto * 60; // ml/h
    var fatorUmidade = umidade / 100;

    return quantidadeAguaPorHora * fatorUmidade;
}

function simularLeituraSensores() {
    var dadosSimulados = {
        temperatura: Math.random() * 30 + 20,
        umidade: Math.random() * 60 + 40,
        condicaoSolo: (Math.random() > 0.5) ? "Úmido" : "Seco"
    };

    atualizarDados(dadosSimulados);
}

document.getElementById("botao-ligar").addEventListener("click", ligarIrrigacao);
document.getElementById("botao-desligar").addEventListener("click", desligarIrrigacao);

// Atualiza os dados dos sensores a cada 5 segundos (simulação)
setInterval(simularLeituraSensores, 5000);

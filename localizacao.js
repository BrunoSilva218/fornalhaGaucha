// Pergunta o estado do usuário
function perguntarEstado() {
    const estado = prompt("Em qual estado você mora?");
    if (!estado) return;

    // Armazena
    localStorage.setItem("estadoUsuario", estado);

    // Depois pergunta o bairro
    perguntarBairro();
}

// Pergunta o bairro
function perguntarBairro() {
    const bairro = prompt("Em qual bairro você mora?");
    if (!bairro) return;

    // Armazena
    localStorage.setItem("bairroUsuario", bairro);

    // Depois mostra a franquia mais próxima
    mostrarFranquia();
}

// Mostra mensagem final
function mostrarFranquia() {
    const estado = localStorage.getItem("estadoUsuario");
    const bairro = localStorage.getItem("bairroUsuario");

    // Distância fictícia
    const distanciaKm = (Math.random() * 20 + 1).toFixed(1);

    alert(
        `Você mora no estado: ${estado}\n` +
        `Bairro: ${bairro}\n\n` +
        `Temos uma franquia localizada a ${distanciaKm} km de você!`
    );
}

// Executa automaticamente ao abrir o site:
window.onload = function () {
    // Só pergunta se ainda não respondeu
    if (!localStorage.getItem("estadoUsuario") || !localStorage.getItem("bairroUsuario")) {
        perguntarEstado();
    } else {
        mostrarFranquia();
    }
};

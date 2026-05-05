function calcular() {
    // Pegar os valores dos inputs
    const producao = parseFloat(document.getElementById('producao').value);
    const pacote = parseFloat(document.getElementById('pacote').value);
    const fardo = parseFloat(document.getElementById('fardo').value);
    const peso1 = parseFloat(document.getElementById('peso1').value);
    const peso2 = parseFloat(document.getElementById('peso2').value);

    // Validação simples
    if (isNaN(producao) || isNaN(pacote) || isNaN(fardo) || isNaN(peso1) || isNaN(peso2)) {
        alert("Por favor, preencha todos os campos com valores válidos.");
        return;
    }

    if (pacote <= 0 || fardo <= 0) {
        alert("As quantidades por pacote/fardo devem ser maiores que zero.");
        return;
    }

    // Lógica do código C
    const quantidadeP = Math.floor(producao / pacote);
    const quantidadeF = Math.floor(producao / fardo);
    const totalP = quantidadeP * peso1;
    const totalF = quantidadeF * peso2;
    const total = totalP + totalF;

    // Exibir resultado
    const container = document.getElementById('resultado-container');
    const resElement = document.getElementById('resultado');
    const detalhesElement = document.getElementById('detalhes');

    container.classList.remove('hidden');
    resElement.innerText = total.toFixed(2) + "kg";

    detalhesElement.innerHTML = `
        <p>Qtd. Pacotes: ${quantidadeP}</p>
        <p>Qtd. Fardos: ${quantidadeF}</p>
        <p>Peso Pacotes: ${totalP.toFixed(2)}kg | Peso Fardos: ${totalF.toFixed(2)}kg</p>
    `;

    // Rolar para o resultado em telas pequenas
    container.scrollIntoView({ behavior: 'smooth' });
}

function preencherTeste() {
    document.getElementById('producao').value = 1000;
    document.getElementById('pacote').value = 10;
    document.getElementById('fardo').value = 50;
    document.getElementById('peso1').value = 0.05;
    document.getElementById('peso2').value = 0.25;
    
    // Opcional: calcular automaticamente ao preencher
    calcular();
}

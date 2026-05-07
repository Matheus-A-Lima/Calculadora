// Theme Toggle Logic
const themeToggleBtn = document.getElementById('theme-toggle');
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    themeToggleLightIcon.classList.remove('hidden');
} else {
    document.documentElement.classList.remove('dark');
    themeToggleDarkIcon.classList.remove('hidden');
}

themeToggleBtn.addEventListener('click', function() {
    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
});

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

    // Lógica do código C (ajustada para números reais)
    const quantidadeP = producao / pacote;
    const quantidadeF = producao / fardo;
    const totalP = quantidadeP * peso1;
    const totalF = quantidadeF * peso2;
    const total = totalP + totalF;

    // Exibir resultado
    const container = document.getElementById('resultado-container');
    const resElement = document.getElementById('resultado');
    const detalhesElement = document.getElementById('detalhes');

    container.classList.remove('hidden');
    resElement.innerText = total.toFixed(3) + "kg";

    detalhesElement.innerHTML = `
        <p>Qtd. Pacotes: ${quantidadeP.toFixed(2)}</p>
        <p>Qtd. Fardos: ${quantidadeF.toFixed(2)}</p>
        <p>Peso Pacotes: ${totalP.toFixed(3)}kg | Peso Fardos: ${totalF.toFixed(3)}kg</p>
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

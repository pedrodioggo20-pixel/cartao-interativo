// Pega os elementos do HTML pelo ID
const botao = document.getElementById('botaoInterativo');
const titulo = document.getElementById('titulo');
const mensagem = document.getElementById('mensagem');
const corpo = document.body; // Pega o corpo da página para mudar o fundo

// Variável para controlar o estado (se já clicou ou não)
let estado = 0;

// Adiciona um "ouvinte de evento" ao botão para saber quando ele é clicado
botao.addEventListener('click', function() {
    
    estado++; // Aumenta o contador do estado
    
    if (estado === 1) {
        // Primeira Ação
        titulo.textContent = "🥳 Surpresa!";
        mensagem.textContent = "Eu amo o seu sorriso, o jeito que você me ouve e a sua energia incrível. Obrigado por fazer parte da minha vida!";
        botao.textContent = "Clique para o próximo passo...";
        corpo.style.backgroundColor = '#d1c4e9'; // Muda o fundo para um roxo suave
        
    } else if (estado === 2) {
        // Segunda Ação
        titulo.textContent = "🌟 Por que te amo?";
        mensagem.textContent = "Eu te amo mais a cada dia, e queria te lembrar que você é o meu melhor presente. Quer sair hoje à noite?";
        botao.textContent = "Finalizar a mensagem!";
        corpo.style.backgroundColor = '#b2dfdb'; // Muda o fundo para um verde-água suave
        
    } else {
        // Ação Final
        titulo.textContent = "😍 Te Amo!";
        mensagem.textContent = "Espero que tenha gostado! Agora é só me dar a resposta 😉";
        botao.style.display = 'none'; // Esconde o botão
        corpo.style.backgroundColor = '#ffcc80'; // Muda o fundo para um laranja suave
    }
});
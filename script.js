document.addEventListener('DOMContentLoaded', () => {
    const naoButton = document.getElementById('naoButton');
    const simButton = document.getElementById('simButton');
    const musica = document.getElementById('musica');
    const mensagemFinal = document.getElementById('mensagemFinal');
    const container = document.querySelector('.container');

    // Defina o volume da música (0.3 = 30% do volume) para dispositivos móveis
    musica.volume = 0.3;

    naoButton.addEventListener('mousemove', () => {
        const containerRect = container.getBoundingClientRect();
        const buttonRect = naoButton.getBoundingClientRect();

        const maxX = containerRect.width - buttonRect.width;
        const maxY = containerRect.height - buttonRect.height;

        const x = Math.random() * maxX;
        const y = Math.random() * maxY;

        naoButton.style.left = `${x}px`;
        naoButton.style.top = `${y}px`;

        // Mostrar o botão "Sim" ao primeiro movimento do botão "Não"
        simButton.style.display = 'block';
    });

    simButton.addEventListener('click', () => {
        // Tocar a música
        musica.play();

        // Exibir a mensagem
        mensagemFinal.style.display = 'block';

        // Desativar os botões para evitar interação adicional
        simButton.disabled = true;
        naoButton.disabled = true;
    });
});

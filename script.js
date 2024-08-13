document.addEventListener('DOMContentLoaded', () => {
    const naoButton = document.getElementById('naoButton');
    const simButton = document.getElementById('simButton');
    const musica = document.getElementById('musica');
    const mensagemFinal = document.getElementById('mensagemFinal');
    const container = document.querySelector('.container');


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


        simButton.style.display = 'block';
    });

    simButton.addEventListener('click', () => {

        musica.play();

        mensagemFinal.style.display = 'block';


        
        simButton.style.display = 'none';
        naoButton.style.display = 'none';

        document.getElementById("titulo").style.visibility = "hidden";
    });
});

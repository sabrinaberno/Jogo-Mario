const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
};

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudsPosition = clouds.offsetLeft;


    if (pipePosition <= 140 && pipePosition > 20 && marioPosition < 110) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './imgs/game-over.png';
        mario.style.width  = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);
    }

},10);

document.addEventListener('keydown', jump);
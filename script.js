// Optional: Add interactive effects such as falling snowflakes
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    document.body.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

setInterval(createSnowflake, 300);

const style = document.createElement('style');
style.innerHTML = `
    .snowflake {
        position: absolute;
        top: 0;
        width: 10px;
        height: 10px;
        background: white;
        border-radius: 50%;
        opacity: 0.8;
        animation: fall 5s linear infinite;
    }
    @keyframes fall {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(100vh);
        }
    }
`;
document.head.appendChild(style);

const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("span");

function showCurrentTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    clockTitle.innerText = 
    `${hours < 10 ? `0${hours}` : `${hours}`}:${
        minutes < 10 ? `0${minutes}` : `${minutes}`}:${
            seconds < 10 ? `0${seconds}` : `${seconds}`}
    `;
}

function main() {
    showCurrentTime();
    setInterval(showCurrentTime, 1000);
}

main();
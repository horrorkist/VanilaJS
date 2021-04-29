const body = document.querySelector("body");
const imgNum = 5;

function paintImg(num) {
    const img = new Image();
    img.src = `images/${num + 1}.jpg`;
    img.addEventListener("load", function() {
        img.classList.add("bgImg");
        body.appendChild(img);
    });
}

function main() {
    const randNum = Math.floor(Math.random() * imgNum);
    paintImg(randNum);
}

main();
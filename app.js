const button = document.querySelector('button');
const h1 = document.querySelector('h1');

button.addEventListener('click', function () {
    const newColor = newColorMaker();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
})

const newColorMaker = function () {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    if ((r + g + b) < 200) {
        h1.style.color = "white";
        button.style.color = "white";
    } else {
        h1.style.color = "black";
        button.style.color = "black";
    }
    return `rgb(${r},${g},${b})`;
}



const runMan = () => {
    let box = document.querySelector('#running-man');
    let width = box.clientWidth;
    const end = width - 80;
    const root = document.querySelector(":root");
    let count = 10;
    
    const moveMan = setInterval(() => {
        count++;;
        root.style.setProperty("--position", `${count}px`);
        let image = document.getElementById("image");

        if (count % 2 == 0) {
            image.src = "images/stickman2.jpg";
        } else {
            image.src = "images/stickman.jpg";
        }     

        if (count >= end) {
            clearInterval(moveMan);
        }

    }, 250);
};

const setThermometer = () => {
    const end = parseInt(document.getElementById("txt-funds").value);
    const root = document.querySelector(":root");
    let count = 0;
    const total = 10000;
    let percent = 0;

    const updateThermometer = setInterval(() => {
        count++;
        percent = (count * 100)/total;
        root.style.setProperty("--amount", `${percent}%`);

        if (count >= end) {
            clearInterval(updateThermometer);
        }

    }, 1);
};

window.onload = () => {
    document.getElementById("display-button").onclick = setThermometer;
    document.getElementById("image").onclick = runMan;
}
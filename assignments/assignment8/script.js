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
}

window.onload = () => {
    document.getElementById("display-button").onclick = setThermometer;
}
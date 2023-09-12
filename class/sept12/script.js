const changeText = () => {
    const helloP = document.getElementById("date");
    helloP.innerHTML = "Hi, Fred";
    helloP.classList.add("special");
}

const showJasper = () => {
    document.getElementById("jasper").classList.remove("hide");
}

const hideJasper = () => {
    document.getElementById("jasper").classList.add("hide");
}

window.onload = () => {
    document.getElementById("button-click").onclick = changeText;
    document.getElementById("button-show").onclick = showJasper;
    document.getElementById("button-hide").onclick = hideJasper;

    //Used to override original text in <p>
    //const helloP = document.getElementById("date");
    //helloP.innerHTML = "Hi";
}



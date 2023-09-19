const animate = () => {
    // document.getElementById("square").classList.toggle("move-square");
    const square = document.getElementById("square");
    const button = document.getElementById("begin-button");

    //is it currently animating
    if(square.classList.contains("move-square")) {
        square.classList.remove("move-square");
        button.innerHTML = "Start";
    } else {
        square.classList.add("move-square");
        button.innerHTML = "Stop";
    }
};

const displayName = () => {
    const firstName = document.getElementById("txt-first-name").value;
    console.log("Hello " + firstName + "!");
}

window.onload = () => {
    document.getElementById("begin-button").onclick = animate;
    document.getElementById("button-show-name").onclick = displayName;
};
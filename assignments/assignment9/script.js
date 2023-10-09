const displayQuotes = () => {
    const quotes = [
        "\"The computer was born to solve problems that did not exist before.\" — Bill Gates",
        "\"Before software should be reusable, it should be usable.\"— Ralph Johnson",
        "\"A program is never less than 90% complete, and never more than 95% complete.\"— Terry Baker",
        "\"Design is where science and art break even.\" - Robin Matthews",
        "\"Everybody should learn to program a computer, because it teaches you how to think.\" - Steve Jobs"
    ]

    const quoteArea = document.getElementById("quotes");
    let i = 0;

    quoteArea.innerHTML = quotes[i];

    const rotateQuotes = setInterval( () => {
        i++;
        if (i >= quotes.length) {
            i = 0;
        }
        quoteArea.innerHTML = quotes[i];
    }, 2000);
};

let count = 1;

const drawRainbow = () => {
    const firstColor = document.querySelector(
        `#rainbow :nth-child(${count})`
    );
    const secondColor = firstColor.nextElementSibling;
    const thirdColor = secondColor.nextElementSibling;
    const fourthColor = thirdColor.nextElementSibling;
    const fifthColor = fourthColor.nextElementSibling;
    const sixthColor = fifthColor.nextElementSibling;
    
    firstColor.classList.add("red");
    const draw = setInterval(() => {
        if(count == 1) {
            secondColor.classList.add("orange");
        } else if (count == 2) {
            thirdColor.classList.add("yellow");
        } else if (count == 3) {
            fourthColor.classList.add("green");
        } else if (count == 4) {
            fifthColor.classList.add("blue");
        } else if (count == 5) {
            sixthColor.classList.add("purple");
        } 

        if(sixthColor.classList.contains("purple")) {
            document.getElementById("gold").classList.remove("hidden");
        }

        count++;
        if (count == 6) {
            clearInterval(draw);
        }
    }, 1000 );
};



window.onload = () => {
    displayQuotes();
    document.getElementById("rainbow-button").onclick = drawRainbow;
};
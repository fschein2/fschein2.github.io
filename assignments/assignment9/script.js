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

const drawRainbow = () => {

};

window.onload = () => {
    displayQuotes();
    document.getElementById("rainbow-button").onclick(drawRainbow);
};
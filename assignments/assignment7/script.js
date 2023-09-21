const toggleNav = () => {
    document.getElementById("main-items").classList.toggle("hide-small");
};

const showExercise1 = () => {
    document.getElementById("fundraiser").classList.add("hide2");
    document.getElementById("oldest").classList.remove("hide1");
};

const showExercise2 = () => {
    document.getElementById("oldest").classList.add("hide1");
    document.getElementById("fundraiser").classList.remove("hide2");
};

const displayOrder = () => {
    const age1 = document.getElementById("txt-age1").value;
    const age2 = document.getElementById("txt-age2").value;
    const age3 = document.getElementById("txt-age3").value;
    const name1 = document.getElementById("txt-name1").value;
    const name2 = document.getElementById("txt-name2").value;
    const name3 = document.getElementById("txt-name3").value;

    if(age1 == null || age2 == null|| age3 == null) {
        document.getElementById("comparison").innerHTML("Not good")
    }
};

/* Need to make it load with exercise 1 on screen */
window.onload = () => {
    document.getElementById("hamburger").onclick = toggleNav;
    document.getElementById("exercise1").onclick = showExercise1;
    document.getElementById("exercise2").onclick = showExercise2;
    document.getElementById("compare-button").onclick = displayOrder;
};
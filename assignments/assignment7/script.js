const toggleNav = () => {
    document.getElementById("main-items").classList.toggle("hide-small");
};

const showExercise1 = () => {
    document.getElementById("fundraiser").classList.add("hide2");
    document.getElementById("oldest").classList.remove("hide1");
    document.getElementById("exercise1").classList.add("selected1");
    document.getElementById("exercise2").classList.remove("selected2"); 
};

const showExercise2 = () => {
    document.getElementById("oldest").classList.add("hide1");
    document.getElementById("fundraiser").classList.remove("hide2");
    document.getElementById("exercise1").classList.remove("selected1");
    document.getElementById("exercise2").classList.add("selected2");
};

const displayOrder = () => {
    const age1 = parseInt(document.getElementById("txt-age1").value);
    const age2 = parseInt(document.getElementById("txt-age2").value);
    const age3 = parseInt(document.getElementById("txt-age3").value);
    const name1 = document.getElementById("txt-name1").value;
    const name2 = document.getElementById("txt-name2").value;
    const name3 = document.getElementById("txt-name3").value;
    /* need to make it compare and list names by age order o-y
       if invalid data is in age cells show error message */
    if(isNaN(age1)) {
        /* create a hidden class for the error message and make it appear
        next to the appropriate age */
    } else if(age1 < 0) {

    }
};

/* Need to make it load with exercise 1 on screen */
window.onload = () => {
    document.getElementById("hamburger").onclick = toggleNav;
    document.getElementById("exercise1").onclick = showExercise1;
    document.getElementById("exercise2").onclick = showExercise2;
    document.getElementById("compare-button").onclick = displayOrder;
};
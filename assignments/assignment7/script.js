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
    const comparison = document.getElementById("comparison");

    if(isNaN(age1) || isNaN(age2) || isNaN(age3)) {
        comparison.innerHTML = "At least one value for age is not a number";
    } else if(age1 < 0 || age2 < 0 || age3 < 0) {
        comparison.innerHTML = "At least one value for age is less than 0";
    } 

    if(age1 != age2 && age1 != age3 && age2 != age3) {
        if(age1 > age2 && age2 > age3) {
            comparison.innerHTML = `${name1}, ${name2}, ${name3}.`;
        } else if(age1 > age3 && age3 > age2) {
            comparison.innerHTML = `${name1}, ${name3}, ${name2}.`;
        } else if(age2 > age1 && age1 > age3) {
            comparison.innerHTML = `${name2}, ${name1}, ${name3}.`;
        } else if(age2 > age3 && age3 > age1) {
            comparison.innerHTML = `${name2}, ${name3}, ${name1}.`;
        } else if(age3 > age1 && age1 > age2) {
            comparison.innerHTML = `${name3}, ${name1}, ${name2}.`;
        } else if(age3 > age2 && age2 > age1) {
            comparison.innerHTML = `${name3}, ${name2}, ${name1}.`;
        }
    } else if(age1 == age2 && age2 == age3) {
        comparison.innerHTML = `${name1}, ${name2}, ${name3}.`;
    } else if(age1 == age2 && age2 != age3) {
        if(age1 > age3) {
            comparison.innerHTML = `${name1}, ${name2}, ${name3}.`;
        } else if(age3 > age1) {
            comparison.innerHTML = `${name3}, ${name1}, ${name2}.`;
        }
    } else if(age1 == age3 && age3 != age2) {
        if(age1 > age2) {
            comparison.innerHTML = `${name1}, ${name3}, ${name2}.`;
        } else if(age2 > age1) {
            comparison.innerHTML = `${name2}, ${name1}, ${name3}.`;
        }
    } else if(age2 == age3 && age3 != age1) {
        if(age2 > age1) {
            comparison.innerHTML = `${name2}, ${name3}, ${name1}.`;
        } else if(age1 > age2) {
            comparison.innerHTML = `${name1}, ${name2}, ${name3}.`;
        }
    }
};

const fillThermometer = () => {
    const fundsRaised = parseInt(document.getElementById("txt-funds").value);
    const root = document.querySelector(":root");

    if(fundsRaised < 2500) {
        root.style.setProperty("--amount", "0%");
    } else if(fundsRaised < 5000 && fundsRaised >= 2500) {
        root.style.setProperty("--amount", "25%");
    } else if(fundsRaised < 7500 && fundsRaised >= 5000) {
        root.style.setProperty("--amount", "50%");
    } else if(fundsRaised < 10000 && fundsRaised >= 7500) {
        root.style.setProperty("--amount", "75%");
    } else if(fundsRaised >= 10000) {
        root.style.setProperty("--amount", "100%");
    }
};

/* Need to make it load with exercise 1 on screen */
window.onload = () => {
    document.getElementById("hamburger").onclick = toggleNav;
    document.getElementById("exercise1").onclick = showExercise1;
    document.getElementById("exercise2").onclick = showExercise2;
    document.getElementById("compare-button").onclick = displayOrder;
    document.getElementById("display-button").onclick = fillThermometer;
};
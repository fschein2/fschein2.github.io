const toggleNav = () => {
    document.getElementById("main-items").classList.toggle("hide-small");
};

window.onload = () => {
    document.getElementById("hamburger").onclick = toggleNav;
};
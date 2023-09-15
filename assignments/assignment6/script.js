// Hide and Seek

const showSirBigSpur = () => {
    document.getElementById("sir-big-spur").classList.remove("hide");
};

const hideSirBigSpur = () => {
    document.getElementById("sir-big-spur").classList.add("hide");
};

// Animate

const animate = () => {
    document.getElementById("anim-image").classList.add("anim-spur");
};

// Input

const addComment = () => {
    productName = document.getElementById("product-name").value;
    comment = document.getElementById("comment").value;
    rating = document.getElementById("rating").value;
    userName = document.getElementById("user-name").value;

    const currentDiv = document.getElementById("replace");
    newDiv = document.createElement("div");
    newContent = document.createTextNode(productName + "\n" + rating + "/5 stars " + comment + "\nby " + userName);
    newDiv.appendChild(newContent);
    document.body.insertBefore(newDiv, currentDiv);
};


// Window Onload

window.onload = () => {
    document.getElementById("show-button").onclick = showSirBigSpur;
    document.getElementById("hide-button").onclick = hideSirBigSpur;
    document.getElementById("anim-button").onclick = animate;
    document.getElementById("comment-button").onclick = addComment;
}
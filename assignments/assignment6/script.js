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
    
    const productName = document.getElementById("product-name").value;
    const comment = document.getElementById("comment").value;
    const rating = document.getElementById("rating").value;
    const userName = document.getElementById("user-name").value;
    

    var div = document.createElement("div");
    div.style.margin = "5px";
    div.style.borderWidth = "1px";
    div.style.borderStyle = "solid";
    div.style.borderColor = "cornflowerblue";
    div.style.backgroundColor = "blanchedalmond";
    div.style.color = "black";
    div.style.padding = "5px";
    div.innerHTML = productName + "\n" + rating + "/5 stars " 
                    + comment + "\nby " + userName;
    /* div.innerHTML = <section class="top">productName</section> 
       then style the class in the css to style each part individually
       section out each part of the comment */
    document.getElementById("input").appendChild(div);
};


// Window Onload

window.onload = () => {
    document.getElementById("show-button").onclick = showSirBigSpur;
    document.getElementById("hide-button").onclick = hideSirBigSpur;
    document.getElementById("anim-button").onclick = animate;
    document.getElementById("comment-button").onclick = addComment;
}
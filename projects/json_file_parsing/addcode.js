const addCode = (e) => {
    e.preventDefault();

    const form = document.getElementById("add-code-form");
    const type = form.elements["txt-code-type"].value;
    const explanation = form.elements["txt-explanation"].value;
    const link = form.elements["code-link"].value;
    const image = form.elements["code-image"].value;

    console.log(type);
    console.log(explanation);
    console.log(link);
    console.log(image);

    const result = document.getElementById("code-result");
    result.innerHTML = "Your code has been submitted and will be added upon review.";
};

document.getElementById("add-code-form").onsubmit = addCode;
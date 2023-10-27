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
    result.innerHTML = `Your code has been submitted and will be added upon review.
                        <br>Type of Code: ${type}<br>Explanation: ${explanation}
                        <br>Link: ${link}<br>Image: ${image}`;
};

const loadCode = async () => {
    const url = "";

    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
};

const showCode = async () => {
    const codeList = await loadCode();
    const codeDiv = document.getElementById("code-style");

    codeList.forEach((code) => {
        codeDiv.append(getCodeItem(code));
    });
};

const getCodeItem = (code) => {
    console.log(code.classType);
};

document.getElementById("add-code-form").onsubmit = addCode;
showCode();

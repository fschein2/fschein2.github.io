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
    const url = "https://fschein2.github.io/json/javaCode.json";

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
    const div = document.createElement("div");

    const h1 = document.createElement("h1");
    div.append(h1);
    h1.innerHTML = `Language: ${code.language}`;

    const img = document.createElement("img");
    div.append(img);
    img.src = `https://fschein2.github.io/javaCodeImages/${code.image}`;

    const h3 = document.createElement("h3");
    div.append(h3);
    h3.innerHTML = "Explanation:";

    const p = document.createElement("p");
    div.append(p);
    p.innerHTML = code.explanation;

    const a = document.createElement("a");
    div.append(a);
    a.innerHTML = `<strong>Link</strong>`;
    a.href = code.link;

    return div;
};

document.getElementById("add-code-form").onsubmit = addCode;
showCode();
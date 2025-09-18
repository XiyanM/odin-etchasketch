let squaresmain = document.querySelector(".squaresmain");
let btn = document.querySelector(".btn");

function buildGrid(n) {
    squaresmain.innerHTML = "";
    document.documentElement.style.setProperty("--var", n);
    const total = n * n;
    const frag = document.createDocumentFragment();
    for (let i = 0; i < total; i++) {
        let box = document.createElement("div");
        box.classList.add("box");
        frag.appendChild(box);
    }
    squaresmain.appendChild(frag);
}

btn.addEventListener("click", () => {
    let input = prompt("How many squares per row?");
    buildGrid(input);
})

squaresmain.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("box")) {
        e.target.style.backgroundColor = "red";
    }
})


buildGrid(16)
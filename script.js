let squaresmain = document.querySelector(".squaresmain")

for (let i = 0; i<256; i++){
    let box = document.createElement("div")
    box.setAttribute("class", "box")
    squaresmain.append(box)
    }

    let squares = document.querySelectorAll(".box")
    squares.forEach(square => {square.addEventListener("mouseover", ()=>{
        square.style.backgroundColor="red";
    })
})

let btn = document.querySelector(".btn")
btn.addEventListener("click", ()=>{
    let number = prompt("How many squares per row?");
    squaresmain.innerHTML="";
    for (let i =0; i<number*number;i++){
        let box = document.createElement("div");
        box.setAttribute("class", "box");
        squaresmain.append(box);
        box.style.height = (500 / number);
        box.style.width = (500 / number);
    }
})


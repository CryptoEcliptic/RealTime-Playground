export function createChickens(groupSize) {
    let size = parseInt(groupSize);
    let parentEl = document.getElementById("chicken-container");
    while (parentEl.firstChild) {
        parentEl.removeChild(parentEl.firstChild);
    }
    console.log("ChCreate")
    for (let i = 0; i < size; i++) {
        let imgChickenElem = document.createElement("img");
        imgChickenElem.src = "/images/fchicken_smallf.jpg";
        imgChickenElem.classList.add("w3-circle");
        imgChickenElem.alt = "Chicken";
        parentEl.appendChild(imgChickenElem);
    }
}
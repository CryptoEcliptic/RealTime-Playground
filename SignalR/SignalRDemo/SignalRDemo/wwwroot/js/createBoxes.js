import { hasSuchElement } from "./helpers.js";

export function createBoxes(boxCount) {
    const urls = {
        0: "/images/royalmailboxSm.jpg",
        1: "/images/royalmailboxSm.jpg",
        2: "/images/royalmailboxSm.jpg",
        3: "/images/KFCchickenSm.jpg",
    };
    let parentEl = document.getElementById("box-container");
    hasSuchElement(parentEl);

    while (parentEl.firstChild) {
        parentEl.removeChild(parentEl.firstChild);
    }

    for (let i = 0; i < boxCount; i++) {
        let btn = document.createElement("button");
        btn.classList.add("btn");
        btn.setAttribute("data-toggle", "modal");
        btn.setAttribute("data-target", "#exampleModal");
        let imgBoxElem = document.createElement("img");
        imgBoxElem.src = urls[i % 4];
        imgBoxElem.classList.add("w3-circle");
        imgBoxElem.alt = "Box";
        btn.appendChild(imgBoxElem);
        parentEl.appendChild(btn);
    }
}

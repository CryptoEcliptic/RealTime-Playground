import { hasSuchElement } from "./helpers.js";

export function createChickens(groupSize) {
    let size = parseInt(groupSize);
    let parentEl = document.getElementById("chicken-container");
   
    hasSuchElement(parentEl);

    while (parentEl.firstChild) {
        parentEl.removeChild(parentEl.firstChild);
    }
    for (let i = 0; i < size; i++) {
        let btn = document.createElement("button");
        btn.classList.add("btn");

        let audioEl = document.createElement("audio")
        let src = document.createElement("soucre");
        src.setAttribute("src", "~/sounds/raven_sound.wav");
        src.setAttribute("type", "audio/mpeg");
        audioEl.appendChild(src);
        

        let imgChickenElem = document.createElement("img");
        imgChickenElem.src = "/images/fchicken_smallf.jpg";
        imgChickenElem.classList.add("w3-circle");
        imgChickenElem.alt = "Chicken";

        btn.appendChild(audioEl);
        btn.appendChild(imgChickenElem)

        parentEl.appendChild(btn);
    }
}
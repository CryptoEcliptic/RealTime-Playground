import { hasSuchElement } from "./helpers.js";

export function createChickens(groupSize) {
    let soundUrls = {
        0: '/sounds/BabyChicksChirpingSounds.wav',
        1: '/sounds/raven_sound.wav',
        2: '/sounds/RoosterSoundEffect.wav',
        3: '/sounds/duckSound.wav',
        4: '/sounds/PenguinSounds.wav',
        5: '/sounds/owlSound.wav',
    }
    let size = parseInt(groupSize);
    let parentEl = document.getElementById("chicken-container");
   
    hasSuchElement(parentEl);

    while (parentEl.firstChild) {
        parentEl.removeChild(parentEl.firstChild);
    }
    for (let i = 0; i < size; i++) {
        let btn = document.createElement("button");
        btn.classList.add("btn");
        btn.classList.add("soundBtn");

        let imgChickenElem = document.createElement("img");
        imgChickenElem.src = "/images/fchicken_smallf.jpg";
        imgChickenElem.classList.add("w3-circle");
        imgChickenElem.alt = "Chicken";

        btn.appendChild(imgChickenElem)
        btn.addEventListener("click", (e) => {
            var audio = new Audio(soundUrls[i % 6]);
            audio.play(); })
        parentEl.appendChild(btn);
    }

   
}
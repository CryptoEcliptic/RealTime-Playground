import { hasSuchElement } from "./helpers.js";

export function seedModalWindow(targetElement) {
    let modal = document.getElementById("text-modal");
    hasSuchElement(modal);
    hasSuchElement(targetElement);

    if (targetElement.className === "w3-circle") {
        textContent(modal);
    }
}

function textContent(modal) {
    console.log(modal);
    modal.textContent = "Hello from the modal"
}
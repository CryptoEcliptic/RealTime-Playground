import { hasSuchElement } from "./helpers.js";

export function seedModalWindow(message) {
    let modal = document.getElementById("text-modal");
    hasSuchElement(modal);

    textContent(modal, message);
}

function textContent(modal, message) {
    modal.textContent = message;
}
import { hasSuchElement } from "./helpers.js";

export function switchTrainCars(boxCount) {
    let cars = document.getElementsByClassName("train-car");
    let size = parseInt(boxCount);
    //if (size > 1) {
        for (let i = 3; i >= 0; i--) {
            let currentCar = cars[i];
            if (currentCar.children[0].src.endsWith("/images/train-car.jpg")) {
                currentCar.children[0].src = "/images/full-car-box.jpg";
                return;
            }
        }
    //}
}

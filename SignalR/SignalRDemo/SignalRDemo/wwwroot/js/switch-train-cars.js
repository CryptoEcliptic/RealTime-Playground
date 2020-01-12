import { hasSuchElement } from "./helpers.js";

export function switchTrainCars(boxCount) {
    let cars = document.getElementsByClassName("train-car");
    let size = parseInt(boxCount);
    if (size > 1) {
        for (let i = 3; i >= 0; i--) {
            let currentCar = cars[i].children[0];
            let src = currentCar.src;
            //if (currentCar.src == "~/images/train-car.jpg") {
            //    currentCar.src = "~/images/full-car-box.jpg";
            //    console.log("Inside")
            //}
            console.log(currentCar);
        }
    }
  
}

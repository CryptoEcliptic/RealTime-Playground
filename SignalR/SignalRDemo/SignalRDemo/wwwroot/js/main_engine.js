import { createChickens } from "./createChickens.js"
import { createBoxes } from "./createBoxes.js"
"use strict";
var connection = new signalR.HubConnectionBuilder().withUrl("/dataHub").build();
console.log(connection);
let parent = document.getElementById("date-time");
let pElMinutes = document.createElement("p");
let pElDays = document.createElement("p");
let pElChickens = document.createElement("p");
let pElChickensGroup = document.createElement("p");
let pBoxElem = document.createElement("p");
let pBoxGroupElem = document.createElement("p");
let index = 0;

connection.on("ReceiveStatusUpdate", function (minutes, days, chickens, chickensGroup, boxes, boxGroup) {
    pElMinutes.textContent = minutes + " " + index;
    pElDays.textContent = days;
    pElChickens.textContent = chickens;
    pElChickensGroup.textContent = chickensGroup;
    pBoxElem.textContent = boxes;
    pBoxGroupElem.textContent = boxGroup;
    turnChicken();
    index++;
    if (index % 5 === 0) {
        createChickens(chickensGroup);
        createBoxes(boxGroup)
    }
});
parent.appendChild(pElDays);
parent.appendChild(pElMinutes);
parent.appendChild(pElChickens);
parent.appendChild(pElChickensGroup);
parent.appendChild(pBoxElem);
parent.appendChild(pBoxGroupElem);

connection.start().then(function () {
    connection.invoke("SendDateTime").catch(function (err) {
        return console.error(err.toString());
    });
});

let turn = 0;
function turnChicken() {
    let chicken = document.getElementById("rotating-chicken");
    turn += 60;
    chicken.style.transform = "rotate(" + (turn % 360) + "deg)"
}





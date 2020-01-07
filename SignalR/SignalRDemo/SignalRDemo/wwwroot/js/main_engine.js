import { createChickens } from "./createChickens.js"
import { createBoxes } from "./createBoxes.js"
import { seedModalWindow } from "./modalWindowSeeder.js"
import { hasSuchElement } from "./helpers.js";
"use strict";

var connection = new signalR.HubConnectionBuilder().withUrl("/dataHub").build();
console.log(connection);

//Creating main DOM objects
let parent = document.getElementById("date-time");
hasSuchElement(parent);

let pElMinutes = document.createElement("p");
let pElDays = document.createElement("p");
let pElChickens = document.createElement("p");
let pElChickensGroup = document.createElement("p");
let pBoxElem = document.createElement("p");
let pBoxGroupElem = document.createElement("p");

connection.on("ReceiveStatusUpdate", function (minutes, days, chickens, chickensGroup, boxes, boxGroup) {
    pElMinutes.textContent = minutes;
    pElDays.textContent = days;
    pElChickens.textContent = chickens;
    pElChickensGroup.textContent = chickensGroup;
    pBoxElem.textContent = boxes;
    pBoxGroupElem.textContent = boxGroup;
    createChickens(chickensGroup);
    createBoxes(boxGroup);

});

connection.on("ReceiveTextMessage", function (message) {
    seedModalWindow(message);
});

parent.appendChild(pElDays);
parent.appendChild(pElMinutes);
parent.appendChild(pElChickens);
parent.appendChild(pElChickensGroup);
parent.appendChild(pBoxElem);
parent.appendChild(pBoxGroupElem);
//End creating main DOM objects

//Starting signalR connection with Hub methods invocation
connection.start().then(function () {
    setInterval(function () {
        connection.invoke("SendDateTime").catch(function (err) {
            return console.error(err.toString());
        });
    }, 1000);
   
    document.addEventListener('click', function (e) {
        e = e || window.event;
        var target = e.target || e.srcElement;
        connection.invoke("SendMessage").catch(function (err) { //TODO SendMessage hub method should be invoked from here.
            return console.error(err.toString());
        }, false);
    });
});

//Below code is for Pterosaur element rotation
let turn = 0;
setInterval(function () {
    turnChicken();
}, 70)

function turnChicken() {
    let chicken = document.getElementById("rotating-chicken");
    hasSuchElement(chicken);
    turn += 1;
    chicken.style.transform = "rotate(" + (turn % 360) + "deg)"
};
//End of code for Pterosaur element rotation



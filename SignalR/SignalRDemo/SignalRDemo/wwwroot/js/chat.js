"use strict";

var connection = new signalR.HubConnectionBuilder().withUrl("/dataHub").build();
console.log(connection);
let parent = document.getElementById("date-time");
let pElMinutes = document.createElement("p");
let pElDays = document.createElement("p");
let pElChickens = document.createElement("p");
let pElChickensGroup = document.createElement("p");
let index = 0;

connection.on("ReceiveStatusUpdate", function (minutes, days, chickens, chickensGroup) {
    pElMinutes.textContent = minutes + " " + index;
    pElDays.textContent = days;
    pElChickens.textContent = chickens;
    pElChickensGroup.textContent = chickensGroup;

    if (index % 60 == 0) {
        createChickens(chickensGroup);
    }
    index++;


});

parent.appendChild(pElDays);
parent.appendChild(pElMinutes);
parent.appendChild(pElChickens);
parent.appendChild(pElChickensGroup);

connection.start().then(function () {
    connection.invoke("SendDateTime").catch(function (err) {
        return console.error(err.toString());
    });
});
function createChickens(groupSize) {
    let size = parseInt(groupSize);
    let parentEl = document.getElementById("chicken-container");
    while (parentEl.firstChild) {
        parentEl.removeChild(parentEl.firstChild);
    }
    for (let i = 0; i < size; i++) {
        let imgChickenElem = document.createElement("img");
        imgChickenElem.src = "/images/fchicken_smallf.jpg";
        imgChickenElem.classList.add("w3-circle");
        imgChickenElem.alt = "Chicken";
       
        parentEl.appendChild(imgChickenElem);
    }
   
}




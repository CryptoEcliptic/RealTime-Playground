"use strict";

var connection = new signalR.HubConnectionBuilder().withUrl("/dataHub").build();
console.log(connection);
let parent = document.getElementById("date-time");
let pElMinutes = document.createElement("p");
let pElDays = document.createElement("p");
let pElChickens = document.createElement("p");
let pElChickensGroup = document.createElement("p");
let index = 1;

connection.on("ReceiveStatusUpdate", function (minutes, days, chickens, chickensGroup) {
    pElMinutes.textContent = minutes + " " + index++;
    pElDays.textContent = days;
    pElChickens.textContent = chickens;
    pElChickensGroup.textContent = chickensGroup;
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


// Write your JavaScript code here!

// const { myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");
import { myFetch, pickPlanet, addDestinationInfo } from "./scriptHelper.js";


window.addEventListener("load", function () {
    let form = document.querySelector('form[data-testid="testForm"]');
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let pilotName = document.querySelector("input[name=pilotName]");
        let copilotName = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoMass = document.querySelector("input[name=cargoMass]");

        let pilotStatus = document.getElementById("pilotStatus");
        let copilotStatus = document.getElementById("copilotStatus");

        if (
            pilotName.value === "" ||
            copilotName.value === "" ||
            fuelLevel.value === "" ||
            cargoMass.value === ""
        ) {
            alert("All fields are required!");
        } else {
            pilotStatus.textContent = `Pilot ${pilotName.value} is ready for launch`;
            copilotStatus.textContent = `Co-pilot ${copilotName.value} is ready for launch`;

            let fuelIsReady = false;
            let cargoIsReady = false;

            if (parseInt(fuelLevel.value) < 10000) {
                //parseInt converts a sring to a number so we can compare it
                faultyItems.style.visibility = "visible";
                fuelStatus.textContent = "Fuel level too low for launch";
                launchStatus.textContent = "Shuttle not ready for launch";
                launchStatus.style.color = "red";

            } else {
                fuelStatus.textContent = "Fuel level high enough for launch";
                fuelIsReady = true;
            }

            if (parseInt(cargoMass.value) > 10000) {
                faultyItems.style.visibility = "visible";
                cargoStatus.textContent = "Cargo mass too high for launch";
                launchStatus.textContent = "Shuttle not ready for launch";
                launchStatus.style.color = "red";

            } else {
                cargoStatus.textContent = "Cargo mass low enough for launch";
                cargoIsReady = true;
            }

            if(fuelIsReady && cargoIsReady) {
                launchStatus.textContent = "Shuttle is ready for launch";
                launchStatus.style.color = "green";
                faultyItems.style.visibility = "hidden";
            } else {
                faultyItems.style.visibility = "visible";
            }
        }
    });
});

window.addEventListener("load", function () {
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse
        .then(function (result) {
            listedPlanets = result;
            let randomPlanet = pickPlanet(listedPlanets);
            console.log(randomPlanet);
            addDestinationInfo(document, randomPlanet.name, randomPlanet.diameter, randomPlanet.star, randomPlanet.distance, randomPlanet.moons, randomPlanet.image);

        })
});

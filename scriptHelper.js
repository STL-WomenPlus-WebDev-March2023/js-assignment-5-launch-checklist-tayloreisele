// Write your helper functions here!
// require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, image) {
    let missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML = `
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${image}">
                 `;
}

function validateInput(testInput, fieldName) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else {
        if (fieldName === "pilotName" || fieldName === "copilotName") {
            return "Is a string";
        } else {
            return "Is a Number";
        }
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

}

async function myFetch() {
    let fetchURL = "https://handlers.education.launchcode.org/static/planets.json";
    let planetsReturned;

    planetsReturned = await fetch(fetchURL).then(function (response) {
        return response.json();
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random() * planets.length);
    return planets[index];
}

// module.exports.addDestinationInfo = addDestinationInfo;
// module.exports.validateInput = validateInput;
// module.exports.formSubmission = formSubmission;
// module.exports.pickPlanet = pickPlanet;
// module.exports.myFetch = myFetch;

export { addDestinationInfo, validateInput, formSubmission, pickPlanet, myFetch };


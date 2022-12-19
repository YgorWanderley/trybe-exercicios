const header = document.getElementById("header-container");
header.style.backgroundColor = "green";

const emergencyTasks = document.getElementsByClassName("emergency-tasks")[0];
emergencyTasks.style.backgroundColor = "rgb(255, 159, 132)";

const noEmergencyTasks = document.getElementsByClassName("no-emergency-tasks")[0];
noEmergencyTasks.style.backgroundColor = "blue";

const bgUrgency = document.querySelectorAll(".emergency-tasks h3");
for (let index = 0; index < bgUrgency.length; index += 1) {
    bgUrgency[index].style.backgroundColor = "rgb(165, 0, 243)";
}
const bgNoUrgency = document.querySelectorAll(".no-emergency-tasks h3");
for (let index = 0; index < bgNoUrgency.length; index += 1) {
    bgNoUrgency[index].style.backgroundColor = 'rgb(35, 37, 37)';
}
const footer = document.getElementById("footer-container");
    footer.style.backgroundColor = "black";
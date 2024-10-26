let name = "Jeff";
let age = 19;
const handler = "@jeffreyalburo";
let course = "Information Technology";
let year = "1st Year";
let motto = "mototoy"
const institution = "University of Science and Technology of Southern Philippines";
const newImageSrc = "img/a.jpg";
// Function to update card details

const updateCardDetails = () => {
    document.querySelector(".name").textContent = name;
    document.querySelector(".handler").textContent = handler;
    document.querySelector(".institution").textContent = institution;
    document.getElementById("age").textContent = age;
    document.getElementById("course").textContent = course;
    document.getElementById("year").textContent = year;
    document.getElementById("motto").textContent = motto;
    document.querySelector(".id-card-header img").src = newImageSrc;
}

// Event listener for the button to update card details
document.getElementById("updateButton").addEventListener("click", () => {
    updateCardDetails();
    alert("Card details updated!");
})
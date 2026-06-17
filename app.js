// --- DARK MODE LOGIC ---

// Get the main body of the webpage and the button
let bodyTag = document.body;
let toggleButton = document.getElementById("theme-toggle");

// Step 1: Check if the user already chose a theme before (stored in their browser)
let savedTheme = localStorage.getItem("website_theme");

// Step 2: If they have a saved theme, let's apply it as soon as the page loads!
if (savedTheme === "dark") {
    bodyTag.setAttribute("data-theme", "dark");
    toggleButton.textContent = "☀️";
} else if (savedTheme === "light") {
    bodyTag.setAttribute("data-theme", "light");
    toggleButton.textContent = "🌙";
}

// Step 3: Decide what happens when someone clicks the button
toggleButton.onclick = function () {

    // Look at what theme is currently active right now
    let currentTheme = bodyTag.getAttribute("data-theme");

    // Step 4: If the theme is "dark", switch it to "light" and save it
    if (currentTheme === "dark") {
        bodyTag.setAttribute("data-theme", "light");
        toggleButton.textContent = "🌙";
        localStorage.setItem("website_theme", "light"); // Save to local storage
    }
    // Step 5: Otherwise, switch it to "dark" and save it
    else {
        bodyTag.setAttribute("data-theme", "dark");
        toggleButton.textContent = "☀️";
        localStorage.setItem("website_theme", "dark"); // Save to local storage
    }
};

// --- CONTACT FORM LOGIC ---

// Find the contact form in the HTML
let myForm = document.getElementById("contact-form");

// Run this function when the user submits the form
myForm.onsubmit = function (event) {

    // Prevent the page from reloading on submit
    event.preventDefault();

    // Get the input elements
    let nameInput = document.getElementById("name");
    let emailInput = document.getElementById("email");
    let messageInput = document.getElementById("message");

    // Check if name is empty
    if (nameInput.value.trim() === "") {
        alert("Error: Please enter your name!");
        nameInput.style.borderColor = "red";

        // Check if email is empty
    } else if (emailInput.value.trim() === "") {
        alert("Error: Please enter your email!");
        emailInput.style.borderColor = "red";

        // Check if message is empty
    } else if (messageInput.value.trim() === "") {
        alert("Error: Please enter your message!");
        messageInput.style.borderColor = "red";

        // If everything is filled out
    } else {
        // Reset borders back to normal
        nameInput.style.borderColor = "";
        emailInput.style.borderColor = "";
        messageInput.style.borderColor = "";

        // Show a popup message saying it was successful
        alert("Message Sent Successfully!");

        // Clear the text fields in the form
        myForm.reset();
    }
};
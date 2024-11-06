document.addEventListener("DOMContentLoaded", function () {
    var toggleButton = document.getElementById("toggle-skills-button");
    var skillsFieldset = document.getElementById("skills-fieldset");
    var resumeForm = document.getElementById("resume-form");
    var resumeOutput = document.getElementById("resume-output");
    var resumeContent = document.getElementById("resume-content");
    // Initially hide the skills section
    skillsFieldset.style.display = "block";
    toggleButton.addEventListener("click", function () {
        if (skillsFieldset.style.display === "none") {
            skillsFieldset.style.display = "block";
            toggleButton.textContent = "Hide Skills Section";
        }
        else {
            skillsFieldset.style.display = "none";
            toggleButton.textContent = "Show Skills Section";
        }
    });
    resumeForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission
        // Get form values
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var education = document.getElementById("education").value;
        var experience = document.getElementById("experience").value;
        var skills = document.getElementById("skills").value;
        // Display the resume
        resumeContent.innerHTML = "\n            <p><strong>Name:</strong> ".concat(name, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n            <p><strong>Education:</strong> ").concat(education, "</p>\n            <p><strong>Experience:</strong> ").concat(experience, "</p>\n            <p><strong>Skills:</strong> ").concat(skills, "</p>\n        ");
        resumeOutput.style.display = "block"; // Show the resume output
    });
});

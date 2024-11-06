document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggle-skills-button");
    const skillsFieldset = document.getElementById("skills-fieldset");
    const resumeForm = document.getElementById("resume-form");
    const resumeOutput = document.getElementById("resume-output");
    const resumeContent = document.getElementById("resume-content");
    const profilePicInput = document.getElementById("profile-pic");
    const profilePicPreview = document.getElementById("profile-pic-preview");

    // Toggle Skills Section
    toggleButton.addEventListener("click", () => {
        if (skillsFieldset.style.display === "none") {
            skillsFieldset.style.display = "block";
            toggleButton.textContent = "Hide Skills Section";
        } else {
            skillsFieldset.style.display = "none";
            toggleButton.textContent = "Show Skills Section";
        }
    });

    // Handle Profile Picture Preview
    profilePicInput.addEventListener("change", (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                profilePicPreview.src = e.target.result;
                profilePicPreview.style.display = "block";
            };
            reader.readAsDataURL(file); // Convert image to base64
        } else {
            profilePicPreview.style.display = "none";
        }
    });

    // Handle Form Submission and Resume Generation
    resumeForm.addEventListener("submit", (event) => {
        event.preventDefault();

        // Get form values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const education = document.getElementById("education").value;
        const experience = document.getElementById("experience").value;
        const skills = document.getElementById("skills").value;
        const profilePicSrc = profilePicPreview.src;

        // Display the resume content
        resumeContent.innerHTML = `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Education:</strong> ${education}</p>
            <p><strong>Experience:</strong> ${experience}</p>
            <p><strong>Skills:</strong> ${skills}</p>
            ${profilePicSrc ? `<img src="${profilePicSrc}" alt="Profile Picture" style="max-width: 150px; margin-top: 10px;">` : ''}
        `;

        // Show the resume output
        resumeOutput.style.display = "block";
    });
});

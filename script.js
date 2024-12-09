// Grab the form and resume container elements
var resumeForm = document.getElementById('resumeForm');
var resumeOutput = document.getElementById('resumeOutput');
// Listen for the form submit event
resumeForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    // Grab the user input values from the form
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var location = document.getElementById('location').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value.split(',').map(function (skill) { return skill.trim(); });
    // Generate the dynamic resume content with editable sections
    var resumeHTML = "\n        <h3>Personal Information</h3>\n        <p><strong>Name:</strong> <span class=\"editable\" contenteditable=\"true\">".concat(name, "</span></p>\n        <p><strong>Email:</strong> <span class=\"editable\" contenteditable=\"true\">").concat(email, "</span></p>\n        <p><strong>Phone:</strong> <span class=\"editable\" contenteditable=\"true\">").concat(phone, "</span></p>\n        <p><strong>Location:</strong> <span class=\"editable\" contenteditable=\"true\">").concat(location, "</span></p>\n\n        <h3>Education</h3>\n        <p class=\"editable\" contenteditable=\"true\">").concat(education.replace(/\n/g, '<br>'), "</p>\n\n        <h3>Work Experience</h3>\n        <p class=\"editable\" contenteditable=\"true\">").concat(experience.replace(/\n/g, '<br>'), "</p>\n\n        <h3>Skills</h3>\n        <ul>\n            ").concat(skills.map(function (skill) { return "<li class=\"editable\" contenteditable=\"true\">".concat(skill, "</li>"); }).join(''), "\n        </ul>\n    ");
    // Display the generated resume in the resume output div
    resumeOutput.innerHTML = resumeHTML;
    // Make the fields editable directly on the page
    var editableElements = document.querySelectorAll('.editable');
    // Listen for content changes in editable elements
    editableElements.forEach(function (element) {
        element.addEventListener('input', function () {
            // You can add logic here to auto-save changes or perform real-time updates
            console.log('Edited content:', element.textContent);
        });
    });
});

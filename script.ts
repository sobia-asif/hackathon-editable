// Grab the form and resume container elements
const resumeForm = document.getElementById('resumeForm') as HTMLFormElement;
const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement;

// Listen for the form submit event
resumeForm.addEventListener('submit', (event) => {
    event.preventDefault();  // Prevent form submission

    // Grab the user input values from the form
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const location = (document.getElementById('location') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',').map(skill => skill.trim());

    // Generate the dynamic resume content with editable sections
    const resumeHTML = `
        <h3>Personal Information</h3>
        <p><strong>Name:</strong> <span class="editable" contenteditable="true">${name}</span></p>
        <p><strong>Email:</strong> <span class="editable" contenteditable="true">${email}</span></p>
        <p><strong>Phone:</strong> <span class="editable" contenteditable="true">${phone}</span></p>
        <p><strong>Location:</strong> <span class="editable" contenteditable="true">${location}</span></p>

        <h3>Education</h3>
        <p class="editable" contenteditable="true">${education.replace(/\n/g, '<br>')}</p>

        <h3>Work Experience</h3>
        <p class="editable" contenteditable="true">${experience.replace(/\n/g, '<br>')}</p>

        <h3>Skills</h3>
        <ul>
            ${skills.map(skill => `<li class="editable" contenteditable="true">${skill}</li>`).join('')}
        </ul>
    `;

    // Display the generated resume in the resume output div
    resumeOutput.innerHTML = resumeHTML;

    // Make the fields editable directly on the page
    const editableElements = document.querySelectorAll('.editable');

    // Listen for content changes in editable elements
    editableElements.forEach(element => {
        element.addEventListener('input', () => {
            // You can add logic here to auto-save changes or perform real-time updates
            console.log('Edited content:', element.textContent);
        });
    });
});

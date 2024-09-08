"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    var profilepictureinput = document.getElementById('profilepicture');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    var usernameElement = document.getElementById('username');
    if (profilepictureinput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement && usernameElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var username = usernameElement.value;
        var uniquePath = "resumes/".concat(username.replace(/\s+/g, '_'), "_cv.html");
        var profilepictureFile = (_a = profilepictureinput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilepictureURL = profilepictureFile ? URL.createObjectURL(profilepictureFile) : '';
        var resumeOutput = "\n\n  <h2>Resume</h2>\n  ".concat(profilepictureURL ? "<img src =\"".concat(profilepictureURL, "\" alt=\"Profile Picture\" class=\"profilepicture\">") : "", "\n  <p><strong>Name:</strong><span id = \"edit-name\" class=\"editable\"> ").concat(name_1, " </span> </p>\n  <p><strong>Email:</strong><span id = \"edit-edit\" class=\"editable\"> ").concat(email, " </span> </p>\n  <p><strong>Phone Number:</strong><span id = \"edit-phone\" class=\"editable\"> ").concat(phone, " </span> </p>\n\n  <h3>Education</h3>\n  <p id = \"edit-education\" class=\"editable\">").concat(education, "</p>\n\n<h3>Experience</h3>\n  <p id = \"edit-experience\" class=\"editable\">").concat(experience, "</p>\n\n  <h3>Skills</h3>\n  <p id = \"edit-skills\" class=\"editable\">").concat(skills, "</p>\n  ");
        var downloadLink = document.createElement('a');
        downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput);
        downloadLink.download = uniquePath;
        downloadLink.textContent = 'Download Your 2024 Resume';
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.appendChild(downloadLink);
            resumeOutputElement.style.display = "block";
        }
    }
    else {
        console.error('One Or More Output Elements Are Missing');
    }
});

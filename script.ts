import { jsPDF } from 'jspdf';

document.getElementById('resumeForm')?.addEventListener('submit', function(event){
    event.preventDefault();

const profilepictureinput = document.getElementById('profilepicture') as HTMLInputElement;
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;

    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;
    const usernameElement = document.getElementById('username') as HTMLInputElement;

   
    


if (profilepictureinput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement && usernameElement){
    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value; 
    const education = educationElement.value; 
    const experience = experienceElement.value; 
    const skills = skillsElement.value;
    const username = usernameElement.value;
    const uniquePath = `resumes/${username.replace(/\s+/g, '_')}_cv.html`

     

const profilepictureFile = profilepictureinput.files?.[0]
const profilepictureURL = profilepictureFile? URL.createObjectURL(profilepictureFile) : '';

  const resumeOutput = `

  <h2>Resume</h2>
  ${profilepictureURL ? `<img src ="${profilepictureURL}" alt="Profile Picture" class="profilepicture">` : ""}
  <p><strong>Name:</strong><span id = "edit-name" class="editable"> ${name} </span> </p>
  <p><strong>Email:</strong><span id = "edit-edit" class="editable"> ${email} </span> </p>
  <p><strong>Phone Number:</strong><span id = "edit-phone" class="editable"> ${phone} </span> </p>

  <h3>Education</h3>
  <p id = "edit-education" class="editable">${education}</p>

<h3>Experience</h3>
  <p id = "edit-experience" class="editable">${experience}</p>

  <h3>Skills</h3>
  <p id = "edit-skills" class="editable">${skills}</p>
  `;

  const downloadLink = document.createElement('a')
  downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput)
downloadLink.download = uniquePath;
downloadLink.textContent = 'Download Your 2024 Resume';


  const resumeOutputElement = document.getElementById('resumeOutput')
  if(resumeOutputElement){
    resumeOutputElement.innerHTML = resumeOutput;

resumeOutputElement.appendChild(downloadLink)

resumeOutputElement.style.display = "block";
  } 
}else{
    console.error('One Or More Output Elements Are Missing');
    
}
})




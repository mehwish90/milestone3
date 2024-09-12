const resume =document .getElementById('resume')as HTMLFormElement
const dedisplay=document.getElementById('display')as HTMLDivElement
//handle form submission
resume.addEventListener('submit', (event:Event)=>{
    event.preventDefault();

//collect input
const name=(document.getElementById('name') as HTMLInputElement).value
const email=(document.getElementById('email') as HTMLInputElement).value
const phone=(document.getElementById('phone') as HTMLInputElement).value
const education=(document.getElementById('education') as HTMLInputElement).value
const skills=(document.getElementById('skills') as HTMLInputElement).value
const experience=(document.getElementById('experience') as HTMLInputElement ).value

//generate resume
const resumeHTML=`
<h2><b>Resume</b></h2>
<h3>Personal Info</h3>
<p><b>Name:</b> ${name}</P>

<p><b>Phone Num:</b> ${phone}</P>
<p><b>Email:</b> ${email}</P>
<h3>Education:</h3>
<p><b>${education}</b></h3>

<h3>Skills:</h3>
<p><b>${skills}</b></h3>

<h3>Experiece:</h3>
<p><b>${experience}</b></h3>
`;
//display
if(dedisplay)
{dedisplay.innerHTML=resumeHTML}
else{console.error(`display element missing`)}
} )
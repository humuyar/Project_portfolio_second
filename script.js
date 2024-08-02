// hambergurMenu
const hamburgerMenu = document.getElementById('hamburger-menu');
const mobileMenu = document.getElementById('mobile-menu');

hamburgerMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});
// professional skill
const professionaSskill = document.getElementById('professional-skill');
const mobileMenu1 = document.getElementById('mobile-menu1');

professionaSskill.addEventListener('click', () => {
  mobileMenu1.classList.toggle('hidden');
});
// Language
const languages = document.getElementById('languages');
const mobileMenu2 = document.getElementById('mobile-menu2');

languages.addEventListener('click', () => {
  mobileMenu2.classList.toggle('hidden');
});
// soft skill
const softskill = document.getElementById('soft-skill');
const mobileMenu3 = document.getElementById('mobile-menu3');

softskill.addEventListener('click', () => {
  mobileMenu3.classList.toggle('hidden');
});
// close button for humbergurmenu
const closebutton = document.getElementById('close-button');
closebutton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});
// for professional skill
const closebutton1 = document.getElementById('close-button1');
closebutton1.addEventListener('click', () => {
  mobileMenu1.classList.toggle('hidden');
});
// for language
const closebutton2 = document.getElementById('close-button2');
closebutton2.addEventListener('click', () => {
  mobileMenu2.classList.toggle('hidden');
});
// for soft skill
const closebutton3 = document.getElementById('close-button3');
closebutton3.addEventListener('click', () => {
  mobileMenu3.classList.toggle('hidden');
});
// home page  content
const homecontent = document.getElementById('home-content');
homecontent.innerHTML = `
<p class="colorw txt1 txt">
Salaam Alikum!
</p>
<p class="colorw txt1">
I'm Humaira Qabooli
</p>
<p class="colorw txt1">
Glad To See You:)
</p>
`;
// about page content
const aboutcontent = document.getElementById('about-content');
aboutcontent.innerHTML = `
<pre class="colorw">
My name is Humaira Qabooli.
I'm a WEB Developer.
I'm curently working with 
vscode and github.
my goal is to make 
a proffesional web page that 
will people interest with it.
</pre>
`;
// When the user clicks on div, open the popup
function myFunction() {
  const popup = document.getElementById('myPopup');
  popup.classList.toggle('show');
  myFunction(onclick);
}

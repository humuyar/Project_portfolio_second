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
<pre class="colorw pre">
My name is Humaira Qabooli.
I'm a WEB Developer.
I'm curently working with 
vscode and github.
my goal is to make 
a proffesional web page that 
will people interest with it.
</pre>
`;
// script.js
// Sample project data
const projects = [
  {
    title: 'documentation page',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: 'assecc/WhatsApp Image 2024-08-01 at 8.09.44 AM.jpeg',
    technologies: ['html', 'css'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    title: 'palindrome checker',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: 'assecc/WhatsApp Image 2024-08-01 at 7.54.03 AM.jpeg',
    technologies: ['html', 'css', 'javaScript'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    title: 'roman numeral converter',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: 'assecc/WhatsApp Image 2024-08-01 at 7.54.03 AM (1).jpeg',
    technologies: ['html', 'css', 'javaScript'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    title: 'US number validator',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: 'assecc/WhatsApp Image 2024-08-01 at 7.54.04 AM.jpeg',
    technologies: ['html', 'css', 'javaScript'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    title: 'cash register',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: 'assecc/WhatsApp Image 2024-08-01 at 8.04.40 AM.jpeg',
    technologies: ['html', 'css', 'javaScript'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    title: 'pokman project',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: 'assecc/WhatsApp Image 2024-08-01 at 8.00.35 AM.jpeg',
    technologies: ['html', 'css', 'javaScript'],
    liveLink: '#',
    sourceLink: '#',
  },
];

// Function to create project cards
function createCards() {
  const container = document.getElementById('slider-container');
  projects.forEach((project, index) => {
    const card1 = document.createElement('div');
    card1.className = 'card1';
    card1.innerHTML = `
      <img src="${project.image}" alt="${project.title}">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="technologies">
        ${project.technologies.map((tech) => `<span>${tech}</span>`).join(' ')}
      </div>
      <button onclick="openPopup(${index})">See Project</button>
    `;
    container.appendChild(card1);
  });
}

// Function to handle slider navigation
let currentIndex = 0;

function showSlide(index) {
  const container = document.getElementById('slider-container');
  const totalSlides = projects.length;
  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }

  const cardWidth = container.querySelector('.card1').offsetWidth;
  container.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

document.querySelector('.next-btn').addEventListener('click', () => showSlide(currentIndex + 1));
document.querySelector('.prev-btn').addEventListener('click', () => showSlide(currentIndex - 1));

// Function to open popup
function openPopup(index) {
  const popup = document.getElementById('popup');
  const popupContent = document.getElementById('popup-content-inner');
  const project = projects[index];
  popupContent.innerHTML = `
    <h2>${project.title}</h2>
    <p>${project.description}</p>
    <div class="technologies">
      ${project.technologies.map((tech) => `<span>${tech}</span>`).join(' ')}
    </div>
    <a href="${project.liveLink}" target="_blank">Live Version</a>
    <a href="${project.sourceLink}" target="_blank">Source Code</a>
  `;
  popup.style.display = 'flex';
}

document.getElementById('someButton').addEventListener('click', () => openPopup(0));

// Function to close popup
document.getElementById('close-btn').addEventListener('click', () => {
  document.getElementById('popup').style.display = 'none';
});

// Initialize cards
createCards();
showSlide(currentIndex);

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const nameField = document.getElementById('name');
  const emailField = document.getElementById('email');
  const subjectField = document.getElementById('subject');
  const messageField = document.getElementById('message');
  const errorMessage = document.getElementById('errorMessage');

  // Load data from localStorage
  const formData = JSON.parse(localStorage.getItem('formData')) || {};
  if (formData.name) nameField.value = formData.name;
  if (formData.email) emailField.value = formData.email;
  if (formData.subject) subjectField.value = formData.subject;
  if (formData.message) messageField.value = formData.message;

  // Save data to localStorage on input change
  [nameField, emailField, subjectField, messageField].forEach((field) => {
    field.addEventListener('input', () => {
      formData[field.id] = field.value;
      localStorage.setItem('formData', JSON.stringify(formData));
    });
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    errorMessage.style.display = 'none';

    const name = nameField.value.trim();
    const email = emailField.value.trim().toLowerCase();
    const subject = subjectField.value.trim();
    const message = messageField.value.trim();

    if (!name || !email || !subject || !message) {
      errorMessage.textContent = 'All fields are required.';
      errorMessage.style.display = 'block';
      return;
    }

    // Validate email
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (!emailPattern.test(email)) {
      errorMessage.textContent = 'Please enter a valid email address.';
      errorMessage.style.display = 'block';
      return;
    }
    // If validation is OK, submit the form
    form.submit();
  });
});

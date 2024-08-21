  // Hamburger Menu
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const mobileMenu = document.getElementById('mobile-menu');
  hamburgerMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
  document.getElementById('close-button').addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // Dropdown Menus
  document.getElementById('professional-skill').addEventListener('click', () => {
    document.getElementById('mobile-menu1').classList.toggle('hidden');
  });
  document.getElementById('languages').addEventListener('click', () => {
    document.getElementById('mobile-menu2').classList.toggle('hidden');
  });
  document.getElementById('soft-skill').addEventListener('click', () => {
    document.getElementById('mobile-menu3').classList.toggle('hidden');
  });
  document.getElementById('close-button1').addEventListener('click', () => {
    document.getElementById('mobile-menu1').classList.toggle('hidden');
  });
  document.getElementById('close-button2').addEventListener('click', () => {
    document.getElementById('mobile-menu2').classList.toggle('hidden');
  });
  document.getElementById('close-button3').addEventListener('click', () => {
    document.getElementById('mobile-menu3').classList.toggle('hidden');
  });

document.addEventListener('DOMContentLoaded', () => {
  // Navbar Scroll Spy
  const navLinks = document.querySelectorAll('.navbar a');
  const sections = document.querySelectorAll('section');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) {
        link.classList.add('active');
      }
    });
  });


  // Content Population
  document.getElementById('home-content').innerHTML = `
    <p class="colorw txt1 txt">Salaam Alikum!</p>
    <p class="colorw txt1">I'm Sodaba Rauf</p>
    <p class="colorw txt1">Glad To See You :)</p>
  `;
  document.getElementById('about-content').innerHTML = `
    <pre class="colorw">
My name is Humaira "Qabooli".
I'm a WEB Developer.
I'm currently working with
VSCode and GitHub.
My goal is to make
a professional web page that
will interest people.
    </pre>
  `;

  // Sample project data
  const projects = [
    {
      title: 'documentation page',
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      image: 'assecc/WhatsApp Image 2024-08-01 at 8.09.44 AM.jpeg',
      technologies: ['html', 'css'],
      liveLink: 'https://humuyar.github.io/project-technical-documentation-page/',
      sourceLink: 'https://github.com/humuyar/project-technical-documentation-page',
    },
    {
      title: 'palindrome checker',
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      image: 'assecc/WhatsApp Image 2024-08-01 at 7.54.03 AM.jpeg',
      technologies: ['html', 'css', 'javaScript'],
      liveLink: 'https://humuyar.github.io/project_palindrome_checker/',
      sourceLink: 'https://github.com/humuyar/project_palindrome_checker',
    },
    {
      title: 'roman numeral converter',
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      image: 'assecc/WhatsApp Image 2024-08-01 at 7.54.03 AM (1).jpeg',
      technologies: ['html', 'css', 'javaScript'],
      liveLink: 'https://humuyar.github.io/roman-numeral-converter/',
      sourceLink: 'https://github.com/humuyar/roman-numeral-converter',
    },
    {
      title: 'US number validator',
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      image: 'assecc/WhatsApp Image 2024-08-01 at 7.54.04 AM.jpeg',
      technologies: ['html', 'css', 'javaScript'],
      liveLink: 'https://humuyar.github.io/Build_a_telephone_number_validator/',
      sourceLink: 'https://github.com/humuyar/Build_a_telephone_number_validator',
    },
    {
      title: 'cash register',
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      image: 'assecc/WhatsApp Image 2024-08-01 at 8.04.40 AM.jpeg',
      technologies: ['html', 'css', 'javaScript'],
      liveLink: 'https://humuyar.github.io/project_cash_register/',
      sourceLink: 'https://github.com/humuyar/project_cash_register',
    },
    {
      title: 'pokman project',
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      image: 'assecc/WhatsApp Image 2024-08-01 at 8.00.35 AM.jpeg',
      technologies: ['html', 'css', 'javaScript'],
      liveLink: 'https://humuyar.github.io/project-pokemon-search-app/',
      sourceLink: 'https://github.com/humuyar/project-pokemon-search-app',
    },
  ];

  // Function to create project cards
  const createCards = () => {
    const container = document.getElementById('slider-container');
    projects.forEach((project, index) => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="technologies">
          ${project.technologies.map((tech) => `<span>${tech}</span>`).join(' ')}
        </div>
        <button onclick="openProjectPopup(${index})">See Project</button>
      `;
      container.appendChild(card);
    });
  };

  // Slider Navigation
  let currentIndex = 0;
  const showSlide = (index) => {
    const container = document.getElementById('slider-container');
    const totalSlides = projects.length;
    const cardWidth = container.querySelector('.card').offsetWidth + 20;

    if (index >= totalSlides) {
      currentIndex = 0;
    } else if (index < 0) {
      currentIndex = totalSlides - 1;
    } else {
      currentIndex = index;
    }
    container.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  };

  document.querySelector('.next-btn').addEventListener('click', () => showSlide(currentIndex + 1));
  document.querySelector('.next-btn').addEventListener('touchstart', () => showSlide(currentIndex + 1));
  document.querySelector('.prev-btn').addEventListener('click', () => showSlide(currentIndex - 1));
  document.querySelector('.prev-btn').addEventListener('touchstart', () => showSlide(currentIndex - 1));

  // Project Popup Modal
  window.openProjectPopup = (index) => {
    const popup = document.getElementById('popup1');
    const popupContent = document.getElementById('popup-content-inner');
    const project = projects[index];
    popupContent.innerHTML = `
      <h2>${project.title}</h2>
      <p>${project.description}</p>
      <div class="technologies">
        ${project.technologies.map((tech) => `<span>${tech}</span>`).join(' ')}
      </div>
      <a href="${project.liveLink}" target="_blank" class="btn">Live Version</a>
      <a href="${project.sourceLink}" target="_blank" class="btn">Source Code</a>
    `;
    popup.style.display = 'flex';
    console.log('buttonClick');
  };

  document.getElementById('close-btn').addEventListener('click', () => {
    document.getElementById('popup1').style.display = 'none';
  });

  // Initialize cards and slider
  createCards();
  showSlide(currentIndex);

  // Certificate Popup functionality
  const toggleCertificatePopup = () => {
    const popup = document.getElementById('myPopup');
    popup.classList.toggle('show');
  };

  const certificateButton = document.getElementById('open-certificate-popup');
  const closeCertificateButton = document.getElementById('close-certificate-popup');

  certificateButton.addEventListener('click', toggleCertificatePopup);
  certificateButton.addEventListener('touchstart', toggleCertificatePopup);
  closeCertificateButton.addEventListener('click', toggleCertificatePopup);
  closeCertificateButton.addEventListener('touchstart', toggleCertificatePopup);

  // Form handling
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

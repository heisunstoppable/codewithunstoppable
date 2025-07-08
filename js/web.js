window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})
new Typed("#typed", {
    strings: ["I'm a Front-End Developer.", "I'm a Web Designer"],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});

const swiper = new Swiper('.swiper', {
    slidesPerView: 4,
    spaceBetween: 15,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      600: { slidesPerView: 2 },
      900: { slidesPerView: 3 },
      1200: { slidesPerView: 4 },
    },
    pagination: {
    el: '.swiper-pagination',
  },
});
function openLightbox(src) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  lightboxImg.src = src;
  lightbox.style.display = 'flex';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

//contact form script//

const form = document.getElementById('contactForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');
  const successMessage = document.getElementById('successMessage');

  function validateName() {
    if (nameInput.value.trim() === '') {
      nameError.style.display = 'block';
      return false;
    } else {
      nameError.style.display = 'none';
      return true;
    }
  }
  function validateEmail() {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      emailError.style.display = 'block';
      return false;
      } else {
        emailError.style.display = 'none';
        return true;
      }
    }

    function validateMessage() {
      if (messageInput.value.trim() === '') {
        messageError.style.display = 'block';
        return false;
      } else {
        messageError.style.display = 'none';
        return true;
      }
    }

    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    messageInput.addEventListener('input', validateMessage);

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const isNameValid = validateName();
      const isEmailValid = validateEmail();
      const isMessageValid = validateMessage();

      if (isNameValid && isEmailValid && isMessageValid) {
        successMessage.style.display = 'block';
        form.reset();
        setTimeout(() => successMessage.style.display = 'none', 3000);
      }
    });
    
    
    // animation for body movement
    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show-on-scroll');
      }
    });
  });
  document.querySelectorAll('.hidden-on-load').forEach(el => observer.observe(el));


  // preloader javascript
  window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    preloader.style.pointerEvents = 'none';
    setTimeout(() => preloader.style.display = 'none', 500);
  });

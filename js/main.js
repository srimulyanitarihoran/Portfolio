// toggle navbar
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () =>  {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')

}

window.onscroll = () =>{
    // remove toggle icon
menuIcon.classList.remove('bx-x')
navbar.classList.remove('active')
}

// typed js
const typed = new Typed('.multiple-text', {
    strings: ['Aspiring Software Enginer', 'UI/UX Designer', 'Product Manager'] ,
    typeSpeed: 100,
    backspeed: 100,
    backDelay: 100,
    loop: true
}) ;

function toggleSkills() {
    var skillsSection = document.getElementById("skillsSection");
    skillsSection.classList.toggle("active");
}


AOS.init({
    duration: 1200,  // Durasi default untuk semua animasi
  });

  const hobbyItems = document.querySelectorAll('.hobby-item');

  hobbyItems.forEach(item => {
      const description = item.querySelector('.hobby-description');
      const icon = item.querySelector('.hobby-icon');
  
      item.addEventListener('mouseenter', () => {
          gsap.to(description, { opacity: 1, y: 0, duration: 0.5 });
          gsap.to(icon, { scale: 1.1, duration: 0.5 });
      });
  
      item.addEventListener('mouseleave', () => {
          gsap.to(description, { opacity: 0, y: 20, duration: 0.5 });
          gsap.to(icon, { scale: 1, duration: 0.5 });
      });
  });

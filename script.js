const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark');
  document.body.classList.toggle('light');
});

const musicBtn = document.getElementById('musicBtn');
const audio = document.getElementById('audio');
const musicCover = document.getElementById('musicCover');
let rotation = 0;
let rotateInterval;

musicBtn.addEventListener('click', () => {
  if(audio.paused){
    audio.play();
    musicBtn.innerHTML = '<i class="fas fa-pause"></i>';
    rotateInterval = setInterval(() => {
      rotation += 1;
      musicCover.style.transform = `rotate(${rotation}deg)`;
    }, 20);
  } else {
    audio.pause();
    musicBtn.innerHTML = '<i class="fas fa-play"></i>';
    clearInterval(rotateInterval);
  }
});

const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const links = document.querySelectorAll('.nav-links li a');
links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({behavior:'smooth'});
    navLinks.classList.remove('active');
  });
});

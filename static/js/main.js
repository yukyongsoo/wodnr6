// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNav() {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateActiveNav);

// Fade-in animation on load
window.addEventListener('load', function() {
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
  });
  
  setTimeout(() => {
    fadeElements.forEach(el => {
      el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
  }, 100);
});

// Gallery lightbox
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');

galleryItems.forEach(item => {
  item.addEventListener('click', function() {
    const caption = this.getAttribute('data-caption');
    const img = this.querySelector('img');
    
    if (img) {
      // 실제 이미지가 있는 경우
      lightboxImg.src = img.src;
      lightboxImg.style.display = 'block';
    } else {
      // placeholder인 경우
      lightboxImg.style.display = 'none';
    }
    
    lightbox.style.display = 'flex';
    lightboxCaption.textContent = caption;
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
  });
});

// Close lightbox
lightbox.addEventListener('click', function() {
  this.style.display = 'none';
  document.body.style.overflow = 'auto';
});

// Prevent default on hash links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
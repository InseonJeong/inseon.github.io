// Detects section in view and adds active class to sidebar link
document.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section');
  const sidebarLinks = document.querySelectorAll('.sidebar-link');

  let currentSection = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 60) {
      currentSection = section.getAttribute('id');
    }
  });

  sidebarLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(currentSection)) {
      link.classList.add('active');
    }
  });
});

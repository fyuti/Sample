document.addEventListener('DOMContentLoaded', function() {
  const contactLink = document.querySelector('a[href="#contact-us-section"]');
  const aboutLink = document.querySelector('a[href="#about-me-section"]');
  const contactSection = document.getElementById('contact-us-section');
  const aboutSection = document.getElementById('about-me-section');

  // Show the contact form when the "Contact Us" link is clicked
  contactLink.addEventListener('click', function(e) {
    e.preventDefault();
    contactSection.style.display = 'block';
    aboutSection.style.display = 'none';
  });

  // Show the About Me section when the "About Me" link is clicked
  aboutLink.addEventListener('click', function(e) {
    e.preventDefault();
    aboutSection.style.display = 'block';
    contactSection.style.display = 'none';
  });

  // Optional: Reset to show Contact Us section by default
  contactSection.style.display = 'block';
});

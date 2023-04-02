// Get all the navigation links
const links = document.querySelectorAll('nav a');

// Get all the sections
const sections = document.querySelectorAll('section');

// Add click event listeners to the navigation links
links.forEach(link => {
  link.addEventListener('click', event => {
    // Prevent the default link behavior
    event.preventDefault();
    
    // Remove the active class from all links
    links.forEach(link => link.classList.remove('active'));
    
    // Add the active class to the clicked link
    link.classList.add('active');
    
    // Hide all sections
    sections.forEach(section => section.classList.remove('active'));
    
    // Show the section that corresponds to the clicked link
    const target = link.getAttribute('href');
    const section = document.querySelector(target);
    section.classList.add('active');
  });
});

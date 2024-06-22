const hamMenu = document.querySelector('.ham-menu');

const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener ('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
} )

// functionality.js

// Function to handle smooth scrolling
function scrollToContacts() {
    const contactsSection = document.getElementById('contacts');
    contactsSection.scrollIntoView({ behavior: 'smooth' });
}

// Add event listener for clicking on "Get in touch" link
document.addEventListener('DOMContentLoaded', function() {
    const getInTouchLink = document.querySelector('.off-screen-menu a[href="#contacts"]');
    if (getInTouchLink) {
        getInTouchLink.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor behavior
            scrollToContacts();

            hamMenu.classList.remove('active');
            offScreenMenu.classList.remove('active');
        });
    }
});

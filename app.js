// Get the navbar element
const navbar = document.getElementById('navbar');

// Variable to store the last scroll position
let lastScrollTop = 2;

// Function to handle the scroll event
window.addEventListener('scroll', function () {
    // Get the current scroll position
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Check if the user is scrolling down
    if (scrollTop > lastScrollTop) {
        // Scrolling down: make the navbar fully black
        navbar.style.backgroundColor = 'rgb(0, 0, 0)';
    } else {
        // Scrolling up: check if the user is at the top of the page
        if (scrollTop >= 0) {
            // At the top: make the navbar transparent again
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        }
    }

    // Update the last scroll position
    lastScrollTop = scrollTop;
});


// <<<<<<<<<<<<<<<<<================= COMMAND FOR DROPDOWN ========================>>>>>>>>>>>>>>

const dropdown = document.querySelector('.dropdown');
const dropdownContent = document.querySelector('.dropdown-items');

let timeoutId;

// Show dropdown on hover
dropdown.addEventListener('mouseenter', () => {
    clearTimeout(timeoutId); // Clear any existing timeout
    dropdownContent.style.display = 'flex';
});

// Hide dropdown after a delay on unhover
dropdown.addEventListener('mouseleave', () => {
    timeoutId = setTimeout(() => {
        dropdownContent.style.display = 'none';
    }, 300); // 300ms delay before hiding
});

// Keep dropdown visible if hovering over the dropdown content
dropdownContent.addEventListener('mouseenter', () => {
    clearTimeout(timeoutId); // Clear the timeout if hovering over content
});

dropdownContent.addEventListener('mouseleave', () => {
    timeoutId = setTimeout(() => {
        dropdownContent.style.display = 'none';
    }, 300); // 300ms delay before hiding
});

const sidenavLinks = document.querySelector(".sidenav-links");
const bars = document.querySelector(".sidenav-menu-btn");

bars.addEventListener("click",()=>{
    sidenavLinks.style.display = sidenavLinks.style.display == "block" ? "none" : "block";
})
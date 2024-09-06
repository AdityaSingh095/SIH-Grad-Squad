// Toggle Navigation Menu for Mobile
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Smooth Scroll to Sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation Function
function validateForm(formId) {
    const form = document.getElementById(formId);
    let isValid = true;

    // Example: Check required inputs
    form.querySelectorAll('input[required]').forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('error');
            isValid = false;
        } else {
            input.classList.remove('error');
        }
    });

    // Add custom validation checks as needed
    if (!isValid) {
        alert("Please fill in all required fields.");
    }

    return isValid;
}

// Toggle Dropdown Menus
function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    dropdown.classList.toggle('show');
}

// Close Dropdowns when clicking outside
window.addEventListener('click', function (event) {
    if (!event.target.matches('.dropdown-toggle')) {
        const dropdowns = document.querySelectorAll('.dropdown-content');
        dropdowns.forEach(dropdown => {
            if (dropdown.classList.contains('show')) {
                dropdown.classList.remove('show');
            }
        });
    }
});

// Common Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
    }

    // Handle form submissions
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', function (e) {
            const formId = this.getAttribute('id');
            if (!validateForm(formId)) {
                e.preventDefault(); // Prevent form submission if invalid
            }
        });
    });
    
    // Other common event listeners can be added here
});

// Responsive Navbar - Close on Link Click (for small screens)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});

// Function to Load More Items (e.g., jobs or events)
function loadMoreItems(containerId, itemsClass, loadButtonId) {
    const container = document.getElementById(containerId);
    const items = container.getElementsByClassName(itemsClass);
    const loadButton = document.getElementById(loadButtonId);
    let visibleItems = 3;

    // Initially show only a few items
    for (let i = 0; i < items.length; i++) {
        if (i < visibleItems) {
            items[i].style.display = 'block';
        } else {
            items[i].style.display = 'none';
        }
    }

    // Load more items on button click
    loadButton.addEventListener('click', () => {
        visibleItems += 3;
        for (let i = 0; i < items.length; i++) {
            if (i < visibleItems) {
                items[i].style.display = 'block';
            }
        }
        // Hide button if all items are visible
        if (visibleItems >= items.length) {
            loadButton.style.display = 'none';
        }
    });
}

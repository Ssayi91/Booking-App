document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    mobileMenuBtn?.addEventListener('click', function() {
        mobileMenuBtn.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Scroll animations
    const fadeElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(element => {
        observer.observe(element);
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Active link highlighting
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Booking Form Handling
    const bookingForm = document.getElementById('booking-form');
    bookingForm?.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Add your form submission logic here
        alert('Thank you for booking! We will contact you shortly to confirm your appointment.');
        bookingForm.reset();
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Google Maps Integration
    function initMap() {
        // Your location - replace with your actual coordinates
        const location = { lat: -34.397, lng: 150.644 }; // Example coordinates
        
        // The map, centered at your location
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 15,
            center: location,
            styles: [
                {
                    "featureType": "all",
                    "elementType": "geometry.fill",
                    "stylers": [{"weight": "2.00"}]
                },
                {
                    "featureType": "all",
                    "elementType": "geometry.stroke",
                    "stylers": [{"color": "#9c9c9c"}]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.text",
                    "stylers": [{"visibility": "on"}]
                },
                {
                    "featureType": "landscape",
                    "elementType": "all",
                    "stylers": [{"color": "#f2f2f2"}]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry.fill",
                    "stylers": [{"color": "#ffffff"}]
                },
                {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": [{"visibility": "off"}]
                },
                {
                    "featureType": "road",
                    "elementType": "all",
                    "stylers": [{"saturation": -100}, {"lightness": 45}]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "all",
                    "stylers": [{"visibility": "simplified"}]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels.icon",
                    "stylers": [{"visibility": "off"}]
                },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [{"color": "#46bcec"}, {"visibility": "on"}]
                }
            ]
        });

        // The marker, positioned at your location
        const marker = new google.maps.Marker({
            position: location,
            map: map,
            title: "SalonBook",
            animation: google.maps.Animation.DROP
        });

        // Info window content
        const contentString = 
            '<div class="info-window">' +
            '<h3>SalonBook</h3>' +
            '<p>123 Beauty Street, City, Country</p>' +
            '<p>Tel: +1 234 567 8900</p>' +
            '</div>';

        const infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        // Add click event to marker
        marker.addListener("click", () => {
            infowindow.open(map, marker);
        });
    }

    // Initialize map when window loads
    if (document.getElementById('map')) {
        window.initMap = initMap;
        // Check if Google Maps API is already loaded
        if (window.google && window.google.maps) {
            initMap();
        }
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax');
    
    parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Add this to your existing main.js
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.querySelector('.nav-links');
    
    // Add animation delay to nav items
    document.querySelectorAll('.nav-links li').forEach((link, index) => {
        link.style.setProperty('--i', index);
    });

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Animate hamburger menu
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
});
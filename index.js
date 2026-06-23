
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const breakpoints = [10, 20, 250, 500, 750, 1000, 1250, 1500, 1750, 2000, 2250, 2500, 2750, 3000, 3250];

function scrollFunction() {
    const y = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
    const textEl = document.getElementById("text");
    
    // Manage classes
    breakpoints.forEach(bp => {
        if (y > bp) {
            document.body.classList.add(`scroll-over-${bp}`);
        } else {
            document.body.classList.remove(`scroll-over-${bp}`);
        }
    });

    // Handle scroll hints
    if (y === 0) {
        document.getElementById("arrow").style.display = "block";
    } else {
        document.getElementById("arrow").style.display = "none";
    }

    // Button display
    if (y > 3250) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }

    // Text changes
    if (y > 3250) {
        textEl.innerHTML = "Thank You! :)";
    } else if (y > 3000) {
        textEl.innerHTML = "House With Garage and Lawn";
    } else if (y > 2750) {
        textEl.innerHTML = "House With Garage & a car in it :P";
    } else if (y > 2250) {
        textEl.innerHTML = "House With Garage";
    } else if (y > 250) {
        textEl.innerHTML = "House";
    } else if (y > 10) {
        textEl.innerHTML = "Keep scrolling...";
    } else {
        textEl.innerHTML = "Scroll slowly for better experience...";
    }
}

window.onscroll = function () {
    scrollFunction();
};

// Initial trigger to set classes right away
window.addEventListener('DOMContentLoaded', () => {
    scrollFunction();
});

document.getElementById('closeAlertBtn').addEventListener('click', () => {
    const alertEl = document.getElementById('customAlert');
    alertEl.style.opacity = '0';
    alertEl.style.transition = 'opacity 0.3s ease';
    setTimeout(() => alertEl.style.display = 'none', 300);
});

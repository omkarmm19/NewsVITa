var swiper = new Swiper(".Myswiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    centerSlide: "true",
    fade:"true",
    grabcursor:'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const closeButtons = document.querySelectorAll('.popup-close-btn');
const popupBoxes = document.querySelectorAll('.popup-box');

// Function to show the popup
function showPopup(popupId) {
    const popup = document.getElementById(`popup-${popupId}`);
    if (popup) {
        popup.style.display = 'flex'; // Show the popup
        setTimeout(() => {
            popup.scrollTop = 0; // Reset scroll position to top after rendering
        }, 0);
    }
}

// Function to hide the popup
function hidePopup() {
    popupBoxes.forEach(popup => {
        popup.style.display = 'none'; // Hide all popups
    });
}

// Add event listeners to the buttons
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', function() {
        const popupId = this.getAttribute('data-popup'); // Get the popup ID from data attribute
        showPopup(popupId); // Show the corresponding popup
    });
});

// Event listeners for close buttons
closeButtons.forEach(button => {
    button.addEventListener('click', hidePopup);
});

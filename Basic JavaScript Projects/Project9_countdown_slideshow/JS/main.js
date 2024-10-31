let slideIndex = 1;
showSlides(slideIndex);

// Set countdown time (in seconds)
let countdownTime = 5;
let countdownInterval;

// Initialize the first countdown
startCountdown();

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
  resetCountdown();
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
  resetCountdown();
}

// Main function to show slides
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  // Wrap slideIndex within bounds
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  // Remove "active" class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Display the current slide and highlight the current dot
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Countdown function to automatically move to the next slide
function startCountdown() {
  // Display initial countdown time
  document.getElementById("countdownDisplay").innerText = `Next slide in ${countdownTime} seconds`;

  countdownInterval = setInterval(function() {
    countdownTime--;
    document.getElementById("countdownDisplay").innerText = `Next slide in ${countdownTime} seconds`;

    // When countdown reaches zero, go to the next slide
    if (countdownTime <= 0) {
      plusSlides(1);
      resetCountdown();
    }
  }, 1000); // Update countdown every second
}

// Reset the countdown
function resetCountdown() {
  clearInterval(countdownInterval); // Stop the previous countdown
  countdownTime = 5; // Reset countdown time
  startCountdown(); // Start a new countdown
}

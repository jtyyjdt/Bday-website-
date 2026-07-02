/* ===================================
   K & K Birthday Website
   SCRIPT.JS PART 1
=================================== */

// Loader

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").style.display = "none";

    }, 1800);

});

// Start Button

const startButton = document.getElementById("startButton");

startButton.addEventListener("click", () => {

    document.getElementById("countdown").scrollIntoView({

        behavior: "smooth"

    });

});

// Countdown

const birthdayDate = new Date("August 8, 2026 00:00:00").getTime();

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const unlockMessage = document.getElementById("unlockMessage");

unlockMessage.style.display = "none";

const countdown = setInterval(() => {

    const now = new Date().getTime();

    const distance = birthdayDate - now;

    if (distance <= 0) {

        clearInterval(countdown);

        days.innerHTML = "00";
        hours.innerHTML = "00";
        minutes.innerHTML = "00";
        seconds.innerHTML = "00";

        unlockMessage.style.display = "block";

        return;

    }

    days.innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24));

    hours.innerHTML = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    minutes.innerHTML = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    seconds.innerHTML = Math.floor((distance % (1000 * 60)) / 1000);

}, 1000);
/* ===================================
   SCRIPT.JS PART 2
   Music + Floating Hearts
=================================== */

// ===============================
// Music Button
// ===============================

const musicButton = document.getElementById("musicButton");
const birthdayMusic = document.getElementById("birthdayMusic");

let isPlaying = false;

musicButton.addEventListener("click", () => {

    if (!isPlaying) {

        birthdayMusic.play();

        musicButton.innerHTML = "⏸ Pause Our Song";

        isPlaying = true;

    } else {

        birthdayMusic.pause();

        musicButton.innerHTML = "🎵 Play Our Song";

        isPlaying = false;

    }

});

// ===============================
// Floating Hearts
// ===============================

const heartsContainer = document.getElementById("hearts-container");

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("floating-heart");

    heart.innerHTML = ["❤️", "💖", "💕", "💗", "💘"][Math.floor(Math.random() * 5)];

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize = (20 + Math.random() * 20) + "px";

    heart.style.animationDuration = (6 + Math.random() * 5) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 11000);

}

// Create a new heart every 500ms

setInterval(createHeart, 500);
/* ===================================
   SCRIPT.JS PART 3
   Scroll Animation + Final Effects
=================================== */

// ===============================
// Scroll Reveal Animation
// ===============================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            entry.target.style.transition = "all 1s ease";

        }

    });

},

{
    threshold: 0.15
}

);

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";

    observer.observe(section);

});

// ===============================
// Auto Scroll To Birthday
// ===============================

if (new Date().getTime() >= birthdayDate) {

    setTimeout(() => {

        document.getElementById("birthday").scrollIntoView({

            behavior: "smooth"

        });

    }, 2500);

}

// ===============================
// Console Message ❤️
// ===============================

console.log("❤️ Happy Birthday K ❤️");
console.log("Made with Love by K");
/* ===================================
   PREMIUM EFFECTS
=================================== */

// Typing Effect
const intro = document.querySelector(".intro-text");

if (intro) {

    const text = intro.innerText;

    intro.innerText = "";

    let i = 0;

    function typeWriter() {

        if (i < text.length) {

            intro.innerHTML += text.charAt(i);

            i++;

            setTimeout(typeWriter, 45);

        }

    }

    setTimeout(typeWriter, 1000);

}

// Button Ripple Effect
document.querySelectorAll("button").forEach(button => {

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        ripple.className = "ripple";

        ripple.style.left = e.offsetX + "px";
        ripple.style.top = e.offsetY + "px";

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);

    });

});

// Birthday Surprise Popup
setTimeout(() => {

    if (new Date().getTime() >= birthdayDate) {

        alert("🎉 Happy Birthday K ❤️\n\nMay all your dreams come true! 💖");

    }

}, 3000);

// Extra Floating Hearts
setInterval(() => {

    createHeart();

}, 2500);

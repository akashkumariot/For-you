// ---------------------------------------------------------
// YAHAN AAP APNA MESSAGE EDIT KAREIN
// ---------------------------------------------------------
const correctPassword = "303129"; 
const startDate = new Date("2018-08-29T00:00:00"); 

// Yahan jitna bada message likhna hai likho, koi tension nahi!
const textToType = `Meri Jaan Mera Jahan🌎

I love you So much very very Much 😚💋 Meri khushiyon Ki Chabhi ❤️ mere Hasne ki Wajha 💕 Sorry Ye msg Trika se late kr rha hu btw mujhe kuch surprising dena tha tumko to sorry Babu Thanks to you Mujhe itna samjhne ke liye hume bahuttt time ho gya Sath mai 2714 din niche time bhi likha hai dekhna 😁 tumhre Alwa to mai kisi ko chahta bhi nh hu tum hi Ho huemsha  se mere liye Mera sab kuch tumne jitna sath diya hai sacchi koi nh deta Babu 😚 iske Liye thankyou babu Baki huemsha khub sara pyaar krunga tumse kabhi bhi dukhi nh hone dunga babu 😚💋💕😘 Love you Babu bahutttttttttttt Bahutttttttttttt sala 💋 Ganda vala meri randi 😚💕🥵🥵🤤 meri hotty biwi 🥵 Hyeee tumhra figure meri Jaan khda hi ho jata hai dekh kr 💦🥵 Bahutttt hot lgti ho bina kapdo ke baccha tum 🙈 Meri Pyari havsan 🥵🙈💋 I love you so Much Baccha ❤️💋❤️💋`;
// ---------------------------------------------------------

// 1. Password Check
function checkPassword() {
    const input = document.getElementById("pass-input").value;
    const errorMsg = document.getElementById("pass-error");
    
    if (input === correctPassword) {
        document.getElementById("password-screen").style.display = "none";
        document.getElementById("start-btn").style.display = "block"; 
    } else {
        errorMsg.textContent = "Galat Password! Try again 😢";
    }
}

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.body.appendChild(heart);
    setTimeout(() => { heart.remove(); }, 5000);
}

// Global variable to track if music started
let musicStarted = false;

function startExperience() {
    document.getElementById('start-btn').style.display = 'none';
    document.getElementById('card').style.display = 'block';
    
    // Play Music
    const music = document.getElementById("bg-music");
    music.play().catch(e => console.log("Music error: " + e));
    musicStarted = true;

    // Start Hearts
    setInterval(createHeart, 300);

    // Start Timer
    setInterval(updateTimer, 1000);

    // Start Typing
    typeWriter();
}

// 2. Typing Logic (Fast & Auto-Scroll)
let i = 0;

const speed = 40; 
const msgElement = document.getElementById("message");

function typeWriter() {
    if (i < textToType.length) {
        msgElement.innerHTML += textToType.charAt(i) === '\n' ? '<br>' : textToType.charAt(i);
        i++;
        
        // --- AUTO SCROLL LINE (Ye screen ko apne aap neeche le jayegi) ---
        const card = document.getElementById("card");
        card.scrollTop = card.scrollHeight;
        // -------------------------------------------------------------

        setTimeout(typeWriter, speed);
    } else {
        msgElement.innerHTML += '<span class="cursor">|</span>';
    }
}

// 3. Timer Logic
function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("timer").innerHTML = 
        `${days} Days : ${hours} Hrs : ${minutes} Min : ${seconds} Sec`;
}

// 4. Music Control on Tab Switch / Phone Lock
document.addEventListener("visibilitychange", function() {
    const music = document.getElementById("bg-music");
    if (document.hidden) {
        music.pause();
    } else {
        if (musicStarted) {
            music.play();
        }
    }
});

// 5. Swipe Down to Refresh
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', function(event) {
    touchStartY = event.changedTouches[0].screenY;
}, false);

document.addEventListener('touchend', function(event) {
    touchEndY = event.changedTouches[0].screenY;
    handleSwipe();
}, false);

function handleSwipe() {
    if (touchEndY - touchStartY > 150) {
        if (window.scrollY === 0) {
            location.reload();
        }
    }
}
// ========================================
// SLIDE NAVIGATION
// ========================================

let currentSlide = 0;

const slides = document.querySelectorAll(".slide");

function nextSlide() {

    if (currentSlide < slides.length - 1) {

        slides[currentSlide].classList.remove("active");

        currentSlide++;

        slides[currentSlide].classList.add("active");

        resetNoButton();

    }

}

// ========================================
// RUNAWAY NO BUTTON
// ========================================

const noButtons = document.querySelectorAll(".noBtn");

const funnyTexts = [

    "Nope 🙈",
    "Catch me 😂",
    "Nice try 😜",
    "Not today 😆",
    "Almost 👀",
    "Think again 🤭",
    "You wish 😏",
    "Mission says YES 😎"

];

noButtons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        moveButton(button);

    });

});

function moveButton(button){

    const padding = 120;

    const x = Math.random() * (window.innerWidth - padding * 2) + padding;

    const y = Math.random() * (window.innerHeight - padding * 2) + padding;

    button.style.left = x + "px";

    button.style.top = y + "px";

    button.innerHTML = funnyTexts[Math.floor(Math.random()*funnyTexts.length)];

}

function resetNoButton(){

    noButtons.forEach(button=>{

        button.innerHTML="Nope 🙈";

        button.style.left="60%";

        button.style.top="65%";

    });

}

// ========================================
// FLOATING ICONS
// ========================================

const icons = [

    "🏡",
    "🔑",
    "🔍"

];

function createFloatingIcon(){

    const icon=document.createElement("div");

    icon.className="icon";

    icon.innerHTML=icons[Math.floor(Math.random()*icons.length)];

    icon.style.left=Math.random()*100+"vw";

    icon.style.animationDuration=(8+Math.random()*6)+"s";

    icon.style.fontSize=(25+Math.random()*20)+"px";

    document.getElementById("floatingIcons").appendChild(icon);

    setTimeout(()=>{

        icon.remove();

    },15000);

}

setInterval(createFloatingIcon,1200);

// ========================================
// CONFETTI
// ========================================

function launchConfetti(){

    const colors=[

        "#ff69b4",
        "#87ceeb",
        "#ffffff",
        "#ffd700",
        "#98fb98",
        "#ffb6c1"

    ];

    for(let i=0;i<250;i++){

        const piece=document.createElement("div");

        piece.className="confetti";

        piece.style.left=Math.random()*100+"vw";

        piece.style.background=colors[Math.floor(Math.random()*colors.length)];

        piece.style.animationDuration=(2+Math.random()*2)+"s";

        piece.style.animationDelay=(Math.random())+"s";

        document.body.appendChild(piece);

        setTimeout(()=>{

            piece.remove();

        },5000);

    }

}

// ========================================
// CELEBRATION
// ========================================

function celebrate(){

    launchConfetti();

    slides[currentSlide].style.display="none";

    document.getElementById("celebration").classList.add("show");

}
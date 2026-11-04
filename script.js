// ===========================================
// Happy Birthday - My Dearest Sia ❤️
// Created by Dureman
// Foundation Script
// ===========================================

// ----------------------------
// Loading Screen
// ----------------------------
/*==================================
LOADER
==================================*/


/* BIRTHDAY HEART LOADER ANIMATION */
(() => {
    const loader = document.getElementById("loader");
    const canvas = document.getElementById("heartCanvas");
    const fill = document.getElementById("loadingFill");
    const message = document.getElementById("loaderMessage");

    if (!loader || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const colors = [
        "#ff1744", "#ff9100", "#ffee00",
        "#00e676", "#00e5ff", "#2979ff",
        "#d500f9", "#ff4081"
    ];

    let frame;
    let started = false;

    function draw(progress) {
        const rect = canvas.getBoundingClientRect();
        if (!rect.width || !rect.height) return;

       
const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;
const dpr = Math.min(
    window.devicePixelRatio || 1,
    isSmallScreen ? 1 : 2
);

const pixelWidth = Math.round(rect.width * dpr);
const pixelHeight = Math.round(rect.height * dpr);

if (canvas.width !== pixelWidth || canvas.height !== pixelHeight) {
    canvas.width = pixelWidth;
    canvas.height = pixelHeight;
}

ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        const w = rect.width;
        const h = rect.height;
        ctx.clearRect(0, 0, w, h);

        const scale = Math.min(w / 38, h / 31) * 0.88;
        const cx = w / 2;
        const cy = h / 2 + scale * 2;

        function point(t) {
            return {
                x: 16 * Math.pow(Math.sin(t), 3),
                y: 13 * Math.cos(t)
                    - 5 * Math.cos(2 * t)
                    - 2 * Math.cos(3 * t)
                    - Math.cos(4 * t)
            };
        }

        const total = 700;
        const count = Math.floor(total * progress);

        // Rainbow heart outline
        for (let i = 0; i < count; i++) {
            const t = (i / total) * Math.PI * 2;
            const p = point(t);
            const x = cx + p.x * scale;
            const y = cy - p.y * scale;

            ctx.beginPath();
            ctx.fillStyle = colors[i % colors.length];
            ctx.shadowBlur = 9;
            ctx.shadowColor = ctx.fillStyle;
            ctx.arc(x, y, 2, 0, Math.PI * 2);
            ctx.fill();
        }

        // Rainbow rays appear as the heart draws
        ctx.shadowBlur = 0;
        const rayTotal = 180;
const rays = Math.floor(rayTotal * progress);

        for (let i = 0; i < rays; i++) {
            const t = (i / rayTotal) * Math.PI * 2;
            const p = point(t);

            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.lineTo(cx + p.x * scale, cy - p.y * scale);
            ctx.strokeStyle = colors[i % colors.length];
            ctx.globalAlpha = 0.65;
            ctx.lineWidth = 0.8;
            ctx.stroke();
        }

        ctx.globalAlpha = 1;

        // Twinkling star particles around the heart
        if (progress >= 1) {
            for (let i = 0; i < 18; i++) {
                const angle = i * 2.399;
                const radius = scale * (10 + (i % 5) * 2);
                const x = cx + Math.cos(angle) * radius;
                const y = cy + Math.sin(angle) * radius * 0.7;

                if (x < 5 || x > w - 5 || y < 5 || y > h - 5) continue;

                ctx.fillStyle = colors[i % colors.length];
                ctx.font = "12px sans-serif";
                ctx.fillText("✦", x, y);
            }
        }
    }

    function start() {
        if (started) return;
        started = true;

        const duration = 4800;
        const startTime = performance.now();

        function animate(now) {
    const progress = Math.min((now - startTime) / duration, 1);

    // Draw the heart using the current animation progress
    draw(progress);

    // Keep the loading bar synchronized with the heart
    if (fill) {
        fill.style.width = `${progress * 100}%`;
    }

    if (progress < 1) {
        frame = requestAnimationFrame(animate);
    } else {
        // Ensure the final frame is fully drawn
        draw(1);

        if (fill) {
            fill.style.width = "100%";
        }

        if (message) {
            message.textContent = "Your special surprise is ready ❤️";
        }

        setTimeout(() => {
            loader.classList.add("hide");
        }, 700);
    }
}

        frame = requestAnimationFrame(animate);
    }

    window.addEventListener("load", start, { once: true });

    // Fallback in case the page has already finished loading
    if (document.readyState === "complete") {
        start();
    }
})();

// ----------------------------
// Typing Effect
// ----------------------------

const typingText = document.getElementById("typing");

const messages = [
    "Every beautiful memory begins with a smile ❤️",
    "You are truly one of a kind ✨",
    "May your smile always shine 🌸",
    "Happy Birthday, My Dearest Sia ❤️"
];

let messageIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const current = messages[messageIndex];

    if (!deleting) {

        typingText.textContent =
            current.substring(0, charIndex++);

        if (charIndex > current.length) {

            deleting = true;

            setTimeout(typeEffect, 1700);

            return;
        }

    } else {

        typingText.textContent =
            current.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            messageIndex++;

            if (messageIndex >= messages.length)
                messageIndex = 0;
        }

    }

    setTimeout(typeEffect, deleting ? 30 : 70);

}

if (typingText) {
    typeEffect();
}

// ----------------------------
// Smooth Reveal Animation
// ----------------------------

const revealItems = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");
        }

    });

}, {
    threshold: 0.15
});


revealItems.forEach(section => {

    observer.observe(section);

});


// ----------------------------
// Button Ripple Effect
// ----------------------------

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {

    btn.addEventListener("mousemove", e => {

        const x = e.offsetX;
        const y = e.offsetY;

        btn.style.setProperty("--x", x + "px");
        btn.style.setProperty("--y", y + "px");

    });

});


// ----------------------------
// Scroll Progress
// ----------------------------

window.addEventListener("scroll", () => {

    const winScroll = window.scrollY;

    const height =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress = (winScroll / height) * 100;

    document.getElementById("progressBar").style.width =
        progress + "%";

});

// ===========================================
// More Features Coming
// ===========================================

// ❤️ Floating Hearts
// ✨ Sparkles
// 🎉 Confetti
// 🎆 Fireworks
// 🎈 Balloons
// 📸 Gallery
// 💌 Letter Animation
// 🎂 Cake
// 🎵 Music Player
// 🌙 Final Surprise
/* ===================================
   Random Stars
=================================== */

const stars = document.getElementById("stars");
if(stars){
for(let i=0;i<120;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDelay=Math.random()*5+"s";

star.style.opacity=Math.random();

stars.appendChild(star);

}
}
/* =================================
   Floating Hearts
================================= */

const heartContainer = document.getElementById("hearts");

function createHeart(){
if (!heartContainer) return;
const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(18+Math.random()*25)+"px";

heart.style.animationDuration=(6+Math.random()*6)+"s";

heart.style.color=[
"#ff4d6d",
"#ff6b81",
"#ff8fa3",
"#ffc2d1",
"#ffd6e0"
][Math.floor(Math.random()*5)];

heartContainer.appendChild(heart);

setTimeout(()=>{
heart.remove();
},12000);

}

setInterval(createHeart,900);



/* ==========================
   Fireflies - Optimized
========================== */

const fireflyContainer = document.getElementById("fireflies");
const isMobile = window.matchMedia("(max-width: 768px)").matches;

if (fireflyContainer) {
    const fireflyCount = isMobile ? 6 : 25;

    for (let i = 0; i < fireflyCount; i++) {
        const fly = document.createElement("div");
        fly.className = "firefly";
        fly.style.left = Math.random() * 100 + "vw";
        fly.style.top = Math.random() * 100 + "vh";
        fly.style.animationDuration = (4 + Math.random() * 6) + "s";
        fly.style.animationDelay = Math.random() * 5 + "s";
        fireflyContainer.appendChild(fly);
    }
}

/* ==========================
   Sparkles - Optimized
========================== */

const sparkleContainer = document.getElementById("sparkles");

if (sparkleContainer) {
    const sparkleCount = isMobile ? 15 : 80;

    for (let i = 0; i < sparkleCount; i++) {
        const s = document.createElement("div");
        s.className = "sparkle";
        s.style.left = Math.random() * 100 + "vw";
        s.style.top = Math.random() * 100 + "vh";
        s.style.animationDelay = Math.random() * 3 + "s";
        sparkleContainer.appendChild(s);
    }
}

/*==========================
Cursor Glow
==========================*/

const glow=document.querySelector(".cursor-glow");

if(glow){

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});

}
/*===============================
Letter Fade Animation
===============================*/

const letters=document.querySelectorAll(".letter-paper");

const observer2=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate([

{

opacity:0,

transform:"translateY(80px)"

},

{

opacity:1,

transform:"translateY(0)"

}

],{

duration:1500,

fill:"forwards"

});
observer2.unobserve(entry.target);
}

});

});

letters.forEach(letter=>{

observer2.observe(letter);

});
/*==============================
Gallery Animation
==============================*/

const cards=document.querySelectorAll(".gallery-card");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const x=e.offsetX/card.offsetWidth-.5;

const y=e.offsetY/card.offsetHeight-.5;

card.style.transform=
`perspective(1000px) rotateY(${x*12}deg) rotateX(${-y*12}deg)`;
});

card.addEventListener("mouseleave",()=>{

card.style.transform=
"rotateY(0) rotateX(0)";

});

});
/*==========================
Music Player
==========================*/

const music=document.getElementById("bgMusic");

const playBtn=document.getElementById("playBtn");

const disc=document.querySelector(".disc");
if(music && playBtn && disc){
playBtn.onclick=()=>{

if(music.paused){

music.play();

disc.classList.add("playing");

playBtn.innerHTML="⏸ Pause Music";

}

else{

music.pause();

disc.classList.remove("playing");

playBtn.innerHTML="▶ Play Music";

}

}
}
/*==========================
Gift Opening
==========================*/

const giftBtn=document.getElementById("openGift");

const giftBox=document.getElementById("giftBox");

const giftMessage=document.getElementById("giftMessage");
if(giftBtn && giftBox && giftMessage){
giftBtn.onclick=()=>{

giftBox.classList.add("open");

giftBtn.style.display="none";

setTimeout(()=>{

giftMessage.style.display="block";

},900);

}
}
/*==================================
Confetti
==================================*/

const confettiContainer =
document.getElementById("confetti");

function launchConfetti(){
if(!confettiContainer) return;
const colors=[
"#FFD166",
"#FF4D6D",
"#9D4EDD",
"#ffffff",
"#6EE7B7",
"#F9A8D4"
];

for(let i=0;i<180;i++){

const piece=
document.createElement("div");

piece.className="confetti";

piece.style.left=
Math.random()*100+"vw";

piece.style.background=
colors[Math.floor(Math.random()*colors.length)];

piece.style.animationDuration=
(3+Math.random()*3)+"s";

piece.style.animationDelay=
Math.random()*0.6+"s";

piece.style.transform=
`rotate(${Math.random()*360}deg)`;

confettiContainer.appendChild(piece);

setTimeout(()=>{

piece.remove();

},6500);

}

}
/*==================================
Fireworks
==================================*/

const fireworks =
document.getElementById("fireworks");

function launchFireworks(){
if(!fireworks) return;
const colors=[
"#FFD166",
"#FF4D6D",
"#ffffff",
"#9D4EDD",
"#7EE8FA",
"#6EE7B7"
];

for(let b=0;b<8;b++){

setTimeout(()=>{

const centerX=Math.random()*window.innerWidth;

const centerY=
150+
Math.random()*
(window.innerHeight/2);

for(let i=0;i<45;i++){

const p=document.createElement("div");

p.className="firework";

const angle=Math.random()*360;

const distance=
80+
Math.random()*120;

const x=
Math.cos(angle*Math.PI/180)
*distance+"px";

const y=
Math.sin(angle*Math.PI/180)
*distance+"px";

p.style.left=centerX+"px";

p.style.top=centerY+"px";

p.style.background=
colors[Math.floor(Math.random()*colors.length)];

p.style.setProperty("--x",x);

p.style.setProperty("--y",y);

fireworks.appendChild(p);

setTimeout(()=>{

p.remove();

},1000);

}

},b*450);

}

}
/*==================================
Floating Balloons
==================================*/

const balloonContainer =
document.getElementById("balloons");

function createBalloon(){
if(!balloonContainer) return;
const balloon =
document.createElement("div");

balloon.className="balloon";

balloon.style.left =
Math.random()*100+"vw";

balloon.style.background = [
"#ff4d6d",
"#ffd166",
"#9d4edd",
"#6ee7b7",
"#7ee8fa",
"#ff99cc"
][Math.floor(Math.random()*6)];

balloon.style.animationDuration =
(10+Math.random()*8)+"s";

balloonContainer.appendChild(balloon);

setTimeout(()=>{
balloon.remove();
},18000);

}

setInterval(createBalloon,1800);
/*==================================
Rose Petals
==================================*/

const petalContainer =
document.getElementById("petals");

function createPetal(){
if(!petalContainer) return;
const petal =
document.createElement("div");

petal.className="petal";

petal.style.left =
Math.random()*100+"vw";

petal.style.animationDuration =
(8+Math.random()*6)+"s";

petal.style.animationDelay =
Math.random()*2+"s";

petal.style.transform =
`rotate(${Math.random()*360}deg)`;

petalContainer.appendChild(petal);

setTimeout(()=>{
petal.remove();
},14000);

}

setInterval(createPetal,500);
/*==================================
Lightbox Gallery
==================================*/


const galleryImages =
document.querySelectorAll(".gallery-card img");

const lightbox =
document.getElementById("lightbox");

const lightboxImg =
document.getElementById("lightboxImage");

const closeBtn =
document.querySelector(".close-lightbox");

const prevBtn =
document.querySelector(".prev-image");

const nextBtn =
document.querySelector(".next-image");

let currentIndex=0;
if(
lightbox &&
lightboxImg &&
closeBtn &&
prevBtn &&
nextBtn &&
galleryImages.length
){
galleryImages.forEach((img,index)=>{

img.addEventListener("click",()=>{

currentIndex=index;

showImage();

});

});

function showImage(){

lightbox.classList.add("active");

lightboxImg.src=
galleryImages[currentIndex].src;

lightboxImg.alt=
galleryImages[currentIndex].alt;

}

closeBtn.onclick=()=>{

lightbox.classList.remove("active");

}

nextBtn.onclick=()=>{

currentIndex++;

if(currentIndex>=galleryImages.length){

currentIndex=0;

}

showImage();

}

prevBtn.onclick=()=>{

currentIndex--;

if(currentIndex<0){

currentIndex=galleryImages.length-1;

}

showImage();

}

document.addEventListener("keydown",(e)=>{

if(!lightbox.classList.contains("active")) return;

if(e.key==="Escape"){

lightbox.classList.remove("active");

}

if(e.key==="ArrowRight"){

nextBtn.click();

}

if(e.key==="ArrowLeft"){

prevBtn.click();

}

});
}
/*=========================
Timeline Animation
=========================*/

const timelineCards =
document.querySelectorAll(".timeline-card");

const timelineObserver =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.2
});

timelineCards.forEach(card=>{

timelineObserver.observe(card);

});
/*==================================
Birthday Cake
==================================*/

const wishBtn=document.getElementById("wishBtn");

const flames=document.querySelectorAll(".flame");

const wishMessage=document.getElementById("wishMessage");
if(wishBtn && wishMessage){

wishBtn.onclick=()=>{

flames.forEach(flame=>{

flame.classList.add("off");

});

setTimeout(()=>{

wishMessage.style.display="block";

launchConfetti();

launchFireworks();

},700);

wishBtn.style.display="none";
}
}
/*=========================
Final Fade Animation
=========================*/

const finalSection =
document.querySelector(".final-content");

const finalObserver =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate([

{

opacity:0,

transform:"translateY(100px)"

},

{

opacity:1,

transform:"translateY(0)"

}

],{

duration:1800,

fill:"forwards"

});

}

});

},{
threshold:.3
});

if(finalSection){

finalObserver.observe(finalSection);

}
/*==================================
GLOBAL REVEAL
==================================*/

const revealElements =
document.querySelectorAll(".reveal,.reveal-left,.reveal-right,.reveal-scale");

const revealObserver =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

},{
threshold:.15
});

revealElements.forEach(el=>{

revealObserver.observe(el);

});

/*==================================
NAVBAR
==================================*/

const menuBtn =
document.querySelector(".menu-btn");

const navLinks =
document.querySelector(".nav-links");

if(menuBtn && navLinks){

menuBtn.onclick=()=>{

navLinks.classList.toggle("active");

}

}

document.querySelectorAll(".nav-links a").forEach(link=>{

link.onclick=()=>{

navLinks.classList.remove("active");

};

});
/*==================================
SCROLL FEATURES
==================================*/

const topBtn =
document.getElementById("topBtn");

const progressBar =
document.getElementById("progressBar");

window.addEventListener("scroll",()=>{

const scrollTop =
document.documentElement.scrollTop;

const height =
document.documentElement.scrollHeight-
document.documentElement.clientHeight;

const progress =
(scrollTop/height)*100;

if(progressBar){

progressBar.style.width =
progress+"%";

}

if(topBtn){

if(scrollTop>500){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

}

}); // <-- Scroll event yahan close hota hai

if(topBtn){

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

}
/*==================================
GRAND FINALE
==================================*/

const celebrateBtn =
document.getElementById("celebrateBtn");

const grandFinale =
document.getElementById("grandFinale");

const closeFinale =
document.getElementById("closeFinale");

if (celebrateBtn && grandFinale && closeFinale) {
    celebrateBtn.onclick = () => {
        grandFinale.classList.add("show");
        launchConfetti();
        launchFireworks();
    };

    closeFinale.onclick = () => {
        grandFinale.classList.remove("show");
    };
}
/*==================================
CUSTOM CURSOR
==================================*/

const cursor = document.querySelector(".cursor");
const cursorDot = document.querySelector(".cursor-dot");
if(cursor && cursorDot){

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";

cursorDot.style.left=e.clientX+"px";
cursorDot.style.top=e.clientY+"px";

});

document.querySelectorAll("a,button").forEach(el=>{

el.addEventListener("mouseenter",()=>{

cursor.classList.add("hover");

});

el.addEventListener("mouseleave",()=>{

cursor.classList.remove("hover");

});

});

}

/*==================================
DAY / NIGHT
==================================*/

window.addEventListener("scroll",()=>{

const scroll =
window.scrollY;

const trigger =
window.innerHeight;

if(scroll > trigger){

document.body.classList.add("night");

document.body.classList.remove("day");

}else{

document.body.classList.add("day");

document.body.classList.remove("night");

}

});

document.body.classList.add("day");
/*==================================
COUNTER
==================================*/

const counters=document.querySelectorAll(".counter");

const counterObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=+counter.dataset.target;

let count=0;

const speed=target/100;

const update=()=>{

count+=speed;

if(count<target){

counter.innerText=Math.ceil(count);

requestAnimationFrame(update);

}else{

counter.innerText=target+"+";

}

};

update();

counterObserver.unobserve(counter);

}

});

},{threshold:.5});

counters.forEach(counter=>{

counterObserver.observe(counter);

});
/*==================================
MEMORY BOOK
==================================*/

const openBookBtn =
document.getElementById("openBookBtn");

const memoryBook =
document.getElementById("memoryBook");

const pages =
document.querySelectorAll(".book-page");

const nextPage =
document.getElementById("nextPage");

const prevPage =
document.getElementById("prevPage");

let currentPage=0;

if(openBookBtn && memoryBook){

openBookBtn.onclick=()=>{

memoryBook.style.display="block";

openBookBtn.style.display="none";

}

}
function showPage(){

pages.forEach(page=>{

page.classList.remove("active");

});

if(pages[currentPage]){

pages[currentPage].classList.add("active");

}
}
if(nextPage){

nextPage.onclick=()=>{

if(currentPage<pages.length-1){

currentPage++;

showPage();

}

}

}

if(prevPage){

prevPage.onclick=()=>{

if(currentPage>0){

currentPage--;

showPage();

}

}

}
showPage();
/*==================================
TYPEWRITER LETTER
==================================*/

const letterText = `

My Dearest Sia ❤️,

Happy Birthday to the most beautiful soul.

I hope today brings you endless happiness,
beautiful surprises,
and countless reasons to smile.

You truly deserve all the love,
peace,
success,
and blessings in this world.

Thank you for being such an amazing person.

May Allah always protect you,
guide you,
and fill your life with joy.

تمہاری مسکراہٹ ہمیشہ یونہی قائم رہے،
آمین۔

Happy Birthday Once Again ❤️

— Dureman

`;

const typewriter =
document.getElementById("typewriter");

let i = 0;
function typeLetter(){

if(!typewriter) return;

if(i < letterText.length){

typewriter.innerHTML += letterText.charAt(i);

i++;

setTimeout(typeLetter,35);

}

}

const letterSection =
document.querySelector("#letter");

const letterObserver =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

typeLetter();

letterObserver.disconnect();

}

});

});

if(letterSection){

letterObserver.observe(letterSection);

}
/*==================================
FINAL SURPRISE
==================================*/

const finalBtn =
document.getElementById("finalSurpriseBtn");

const overlay =
document.getElementById("surpriseOverlay");

const closeOverlay =
document.getElementById("closeOverlay");

if(finalBtn && overlay && closeOverlay){

finalBtn.onclick=()=>{

overlay.classList.add("show");

launchConfetti();

launchFireworks();

}

closeOverlay.onclick=()=>{

overlay.classList.remove("show");

}

}

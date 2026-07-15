// ==========================================
// AOS
// ==========================================

AOS.init({
    duration:1000,
    once:true
});

// ==========================================
// LOADER
// ==========================================

window.addEventListener("load",()=>{

    const loader=document.getElementById("loader");

    setTimeout(()=>{

        loader.style.opacity="0";
        loader.style.visibility="hidden";

    },1000);

});

// ==========================================
// CURSOR GLOW
// ==========================================

const cursor=document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

    cursor.style.left=e.clientX+"px";
    cursor.style.top=e.clientY+"px";

});

// ==========================================
// TYPING EFFECT
// ==========================================

const words=[

"Mahasiswa Sistem Komputer",

"Front-End Developer",

"UI/UX Designer",

"Web Developer"

];

let wordIndex=0;
let charIndex=0;
let deleting=false;

const typing=document.getElementById("typing");

function typeEffect(){

    const currentWord=words[wordIndex];

    if(!deleting){

        typing.textContent=currentWord.substring(0,charIndex++);
    }else{

        typing.textContent=currentWord.substring(0,charIndex--);

    }

    let speed=deleting?60:120;

    if(!deleting && charIndex===currentWord.length+1){

        deleting=true;
        speed=1200;

    }

    if(deleting && charIndex===0){

        deleting=false;

        wordIndex++;

        if(wordIndex===words.length){

            wordIndex=0;

        }

    }

    setTimeout(typeEffect,speed);

}

typeEffect();

// ==========================================
// PROGRESS BAR
// ==========================================

window.addEventListener("scroll",()=>{

    const totalHeight=document.documentElement.scrollHeight-window.innerHeight;

    const progress=(window.pageYOffset/totalHeight)*100;

    document.getElementById("progress-bar").style.width=progress+"%";

});

// ==========================================
// COUNTER ANIMATION
// ==========================================

const counters = document.querySelectorAll(".counter");

const startCounter = () => {

    counters.forEach(counter => {

        const target = +counter.dataset.target;

        let count = 0;

        const speed = target / 100;

        const updateCounter = () => {

            if (count < target) {

                count += speed;

                counter.innerText = Math.ceil(count);

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText = target;

            }

        };

        updateCounter();

    });

};

const counterSection = document.querySelector(".counter-section");

if(counterSection){

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

startCounter();

observer.disconnect();

}

});

});

observer.observe(counterSection);

}

// ==========================================
// SCROLL TO TOP
// ==========================================

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// ==========================================
// DARK MODE
// ==========================================

const darkBtn=document.getElementById("darkMode");

darkBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark");

const icon=darkBtn.querySelector("i");

if(document.body.classList.contains("dark")){

icon.classList.remove("bi-moon-stars-fill");

icon.classList.add("bi-sun-fill");

}else{

icon.classList.remove("bi-sun-fill");

icon.classList.add("bi-moon-stars-fill");

}

});

// ==========================================
// NAVBAR EFFECT
// ==========================================

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

navbar.style.padding="10px 0";

navbar.style.boxShadow="0 10px 25px rgba(0,0,0,.15)";

}else{

navbar.style.padding="15px 0";

navbar.style.boxShadow="none";

}

});

// ==========================================
// HERO IMAGE ANIMATION
// ==========================================

const heroImage=document.querySelector(".hero-img");

document.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.pageX)/40;

const y=(window.innerHeight/2-e.pageY)/40;

heroImage.style.transform=`translate(${x}px,${y}px)`;

});

// ==========================================
// BUTTON RIPPLE EFFECT
// ==========================================

document.querySelectorAll(".btn-main").forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="scale(1.05)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="scale(1)";

});

});

// ==========================================
// CARD HOVER EFFECT
// ==========================================

document.querySelectorAll(".skill-card,.hobby-card,.portfolio-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transition=".4s";

});

});

// ==========================================
// PARTICLES.JS
// ==========================================

particlesJS("particles-js",{

    particles:{

        number:{
            value:80
        },

        color:{
            value:[
                "#8b5cf6",
                "#ec4899",
                "#3b82f6"
            ]
        },

        shape:{
            type:"circle"
        },

        opacity:{
            value:0.5
        },

        size:{
            value:4
        },

        line_linked:{
            enable:true,
            distance:150,
            color:"#8b5cf6",
            opacity:0.3,
            width:1
        },

        move:{
            enable:true,
            speed:2,
            direction:"none",
            random:false,
            straight:false,
            out_mode:"out"
        }

    },

    interactivity:{

        detect_on:"canvas",

        events:{

            onhover:{
                enable:true,
                mode:"grab"
            },

            onclick:{
                enable:true,
                mode:"push"
            }

        },

        modes:{

            grab:{
                distance:150,
                line_linked:{
                    opacity:0.6
                }
            },

            push:{
                particles_nb:4
            }

        }

    },

    retina_detect:true

});

// ==========================================
// VANILLA TILT
// ==========================================

VanillaTilt.init(

document.querySelectorAll(".portfolio-card,.skill-card,.hobby-card"),

{

max:15,

speed:400,

glare:true,

"max-glare":0.25

}

);

// ==========================================
// SOCIAL ICON ANIMATION
// ==========================================

document.querySelectorAll(".social a").forEach((icon,index)=>{

icon.style.animation=`fadeUp .6s ease ${index/8}s forwards`;

});

// ==========================================
// BUTTON CLICK EFFECT
// ==========================================

document.querySelectorAll(".btn").forEach(button=>{

button.addEventListener("click",()=>{

button.style.transform="scale(.95)";

setTimeout(()=>{

button.style.transform="scale(1)";

},150);

});

});

// ==========================================
// NAVBAR ACTIVE LINK
// ==========================================

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll(".nav-link");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

const sectionHeight=section.clientHeight;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")=="#"+current){

link.classList.add("active");

}

});

});

// ==========================================
// HERO PARALLAX
// ==========================================

window.addEventListener("scroll",()=>{

const hero=document.querySelector(".hero");

hero.style.backgroundPositionY=window.pageYOffset*0.4+"px";

});

// ==========================================
// FADE IN ELEMENT
// ==========================================

const fadeElements=document.querySelectorAll(

".glass-card,.portfolio-card,.skill-card,.hobby-card"

);

const fadeObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("fade-up");

}

});

});

fadeElements.forEach(el=>{

fadeObserver.observe(el);

});

// ==========================================
// PREVENT FORM SUBMIT
// ==========================================

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("✅ Terima kasih! Pesan Anda berhasil dikirim.");

form.reset();

});

}

// ==========================================
// CONSOLE
// ==========================================

console.log("🚀 Portfolio Website Loaded Successfully!");
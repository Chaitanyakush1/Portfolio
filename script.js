/* ================================
HERO TYPING ANIMATION
================================ */

const words = [
"Frontend Developer",
"Python Learner",
"Future Tech Entrepreneur"
]

const typingElement = document.querySelector(".typing")

let wordIndex = 0
let charIndex = 0
let deleting = false

function typeEffect(){

const currentWord = words[wordIndex]

if(!deleting){

typingElement.textContent =
currentWord.substring(0,charIndex + 1)

charIndex++

if(charIndex === currentWord.length){

deleting = true
setTimeout(typeEffect,1200)
return

}

}else{

typingElement.textContent =
currentWord.substring(0,charIndex - 1)

charIndex--

if(charIndex === 0){

deleting = false
wordIndex = (wordIndex + 1) % words.length

}

}

setTimeout(typeEffect,80)

}

typeEffect()

/* ================================
SMOOTH NAVBAR SCROLL
================================ */

function scrollToSection(id){

const section = document.getElementById(id)
const navbarHeight =
document.querySelector(".navbar").offsetHeight

const elementPosition =
section.offsetTop - navbarHeight

window.scrollTo({

top:elementPosition,
behavior:"smooth"

})

}

/* ================================
SCROLL REVEAL ANIMATION
(Better than scroll event)
================================ */

const fadeElements =
document.querySelectorAll(".fade-in")

const observer = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show")

}

})

},

{threshold:0.2}

)

fadeElements.forEach(el=>observer.observe(el))

/* ================================
AUTO EXPAND TEXTAREA
================================ */

const textarea =
document.querySelector(".contact-form textarea")

if(textarea){

textarea.addEventListener("input",()=>{

textarea.style.height = "auto"
textarea.style.height =
textarea.scrollHeight + "px"

})

}

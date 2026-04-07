/*=============== MENU ===============*/
const navMenuEl=document.getElementById('nav-menu')
const navToggleEl = document.getElementById('nav-toggle')
const navCloseEl = document.getElementById('nav-close')
/* Menu show */
navToggleEl.addEventListener('click', ()=>{
    navMenuEl.classList.add('show-menu')
})
/* Menu hidden */
navCloseEl.addEventListener('click', ()=>{
    navMenuEl.classList.remove('show-menu')
})

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollheader(){
    const header = document.getElementById("header")
    this.scrollY >= 50
     ? header.classList.add('bg-header')
     : header.classList.remove('bg-header')
}

window.addEventListener('scroll', scrollheader)

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach( (n)=>{
    n.addEventListener('click', linkAction)
})
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')


function scrollActive(){
    sections.forEach( (current)=>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']')
            console.log(sectionClass)

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }else{
            sectionClass.classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/
function scrollup(){
    const scroll = document.getElementById("scroll-up")
    this.scrollY >= 350
     ? scroll.classList.add('show-scroll')
     : scroll.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollup)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin:'top',
    distance: '60px',
    duration:2500,
    delay: 400,
})

sr.reveal(`.home-data, .footer-container, .footer-group`)
sr.reveal(`.home-img`,{ delay:700, origin: 'bottom'}),
sr.reveal(`.logo-img, .program-card, .pricing-card`, {interval: 100})
sr.reveal(`.choose-group, .calculate-content`, { origin: 'left'})
sr.reveal(`.choose-content, .calculate-image`, { origin: 'right'})

/*=============== CALCULATE BMI ===============*/
const FormEl = document.getElementById("bmi-form")
const HeightEl = document.getElementById("calculate-height")
const WeightEl = document.getElementById("calculate-weight")
const MessageEl = document.getElementById("calculate-message")


FormEl.addEventListener('submit', (e) => {
    e.preventDefault()
    calculateBMI()
    

})

function calculateBMI() {
    let height = HeightEl.value
    let weight = WeightEl.value

    if (height === '' || weight === '') {
        MessageEl.style.color = "var(--first-color)"
        MessageEl.textContent = "Fill in the Height and Weight 👨‍💻"
        return;
    }

    let BMI = (weight / (height / 100) ** 2).toFixed(1)

    if (BMI < 18) {
        MessageEl.style.color = "var(--first-color)"
        MessageEl.textContent = `Your BMI is ${BMI} and you are skinny 😔`
    }
    else if (18 < BMI && BMI < 24) {
        MessageEl.style.color = "var(--first-color)"
        MessageEl.textContent = `Your BMI is ${BMI} and you are healthy 👌`
    }
    else {
        MessageEl.style.color = "var(--first-color)"
        MessageEl.textContent = `Your BMI is ${BMI} and you are overweight 😔`
    }

    HeightEl.value = ''
    WeightEl.value = ''

    setTimeout( ()=>{
        MessageEl.textContent=''
    },4000)
}
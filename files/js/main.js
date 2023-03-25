/*=============== SHOW MENU ===============*/
const navMenu=document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')
/*===== MENU SHOW =====*/
if(navToggle){
    navToggle.addEventListener('click', () => {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu')
        })
    })
}

/*===== MENU HIDDEN =====*/
if(navClose){
    navClose.addEventListener('click', () => {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu')
        })
    })
}

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header')
    if(this.scrollY >= 50) header.classList.add('scroll-header');else header.classList.remove('scroll-header') 
}
window.addEventListener('scroll', scrollHeader)


/*=============== SKILLS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
     tabContent = document.querySelectorAll('[data-content]')

     tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const target = document.querySelector(tab.dataset.target)

            tabContent.forEach(tabContents => {
                tabContents.classList.remove("skills__active")
            })

            target.classList.add('skills__active')

            tabs.forEach(tab => {
                tab.classList.remove("skills__active")
            })
            tab.classList.add('skills__active')
        })
    })
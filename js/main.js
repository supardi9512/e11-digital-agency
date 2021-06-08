/* MENU SHOW (RUDY HERMAWAN)*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/* ACTIVE AND REMOVE MENU (RUDY HERMAWAN) */
const navLink = document.querySelectorAll('.nav-link'); 
function linkAction(){
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// SCROLL ANIMATION (SUPARDI)

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

sr.reveal('.home',{}); 
sr.reveal('.home-title',{delay: 200}); 
sr.reveal('.home-button',{delay: 400}); 

sr.reveal('.about-img',{}); 
sr.reveal('.about-subtitle',{delay: 400}); 
sr.reveal('.about-text',{delay: 400}); 

// TEXT ANIMATION (SUPARDI)
class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    const current = this.wordIndex % this.words.length;
    const fullTxt = this.words[current];

    if(this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    let typeSpeed = 50;

    if(this.isDeleting) {
      typeSpeed /= 2;
    }

    if(!this.isDeleting && this.txt === fullTxt) {
      typeSpeed = this.wait;
      this.isDeleting = true;
    } else if(this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.wordIndex++;
      typeSpeed = 50;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}
  
document.addEventListener('DOMContentLoaded', init);

function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  new TypeWriter(txtElement, words, wait);
}

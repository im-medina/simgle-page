function initTabNav(){

const tabMenu = document.querySelectorAll('.js-tabmenu li')
const tabContent = document.querySelectorAll('.js-tabcontent section')
if (tabMenu.length && tabContent.length){
tabContent[0].classList.add('ativo')

function activeTab(index){
  tabContent.forEach((section)=>{
    section.classList.remove('ativo')
  })
  tabContent[index].classList.add('ativo')
}

tabMenu.forEach((itemMenu, index)=>{
  itemMenu.addEventListener('click',()=>{
    activeTab(index);
  })
})}};

initTabNav();

//animação accordeon 
function initAccordion(){
const accordionList = document.querySelectorAll('.js-accordion dt')
const activeClass = 'ativo'
if(accordionList.length){
  accordionList[0].classList.add(activeClass)
  accordionList[0].nextElementSibling.classList.add(activeClass)

  function activeAccordion(){
    this.classList.toggle(activeClass)
    this.nextElementSibling.classList.toggle(activeClass)
  }
  accordionList.forEach((item)=>{
    item.addEventListener('click', activeAccordion)
  })
}
};

initAccordion(); 
//scroll suave
function initScrollSuave(){
const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

function scrollToSection(event){
  event.preventDefault();
  const href = event.currentTarget.getAttribute('href'); //pegando o atributo de href dentro do js-menu
  const section = document.querySelector(href) //relacionando a sessão com href do js-menu

  section.scrollIntoView({
    behavior:'smooth',
    block:'start'
  });

  /*
  Forma alternativa
    const topo = section.offsetTop;
   window.scrollTo({
    top:topo,
    behavior:'smooth'
  }); */
}

linksInternos.forEach((link)=>{
  link.addEventListener('click', scrollToSection)
})}

initScrollSuave();

//animação ao dar scroll
function initScrollAnimation(){
const sections = document.querySelectorAll('.js-scroll')

if(sections.length){
const windowHalf = window.innerHeight * 0.6;

function animascroll(){
  sections.forEach((section)=>{
    const sectionTop = section.getBoundingClientRect().top;//captura o topo da section
    const isSectionVisibile = (sectionTop - windowHalf)<0; 
    if(isSectionVisibile){
      section.classList.add('ativo') // adiciona a animação(cod css linha 278 a 284)
    }else{
      section.classList.remove('ativo')
    }
  })
  //console.log('Sim')
}

animascroll();
window.addEventListener('scroll', animascroll)}}
initScrollAnimation()
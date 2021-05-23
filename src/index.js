import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if(navToggle)
{
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  });
}

if(navClose)
{
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

const navLink = document.querySelectorAll('.nav__link');
navLink.forEach((item) => {
  item.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  })
});


const skillsContent = document.getElementsByClassName('skills__content');
const skillsHeader = document.querySelectorAll('.skills__header');
function toggleSkills(){
  
  let itemClass = this.parentNode.className;
  for(let i = 0; i < skillsContent.length; i++ )
  {
    skillsContent[i].className = 'skills__content skills__close'
  }

  if(itemClass === 'skills__content skills__close'){
    this.parentNode.className = 'skills__content skills__open'
  }
}

skillsHeader.forEach(el => {
  el.addEventListener('click', toggleSkills)
});

const modalViews = document.querySelectorAll('.services__modal');
const modalBtns = document.querySelectorAll('.services__button');
const modalCloses = document.querySelectorAll('.services__modal-close');

let modal = function(modalClick){
  modalViews[modalClick].classList.add('active__modal');
}

modalBtns.forEach((item, index) => {
  item.addEventListener('click', () => {
    modal(index);
  })
})

modalCloses.forEach(item => {
  item.addEventListener('click', () => {
    modalViews.forEach(modalView => {
      modalView.classList.remove('active__modal');
    })
  })
})

function scrollUp(){
  const scrollUp = document.getElementById('scrollup');
  if(this.scrollY >= 560)
  {
    scrollUp.classList.add('show-scroll');
  }
  else 
  {
    scrollUp.classList.remove('show-scroll');
  }

}

window.addEventListener('scroll', scrollUp);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const menuBtn=document.querySelector('[data-menu]');
const navLinks=document.querySelector('.nav-links');
if(menuBtn&&navLinks){menuBtn.addEventListener('click',()=>navLinks.classList.toggle('open'));}
const year=document.querySelector('[data-year]'); if(year) year.textContent=new Date().getFullYear();
const path=location.pathname.split('/').pop()||'index.html';
document.querySelectorAll('.nav-links a').forEach(a=>{if(a.getAttribute('href')===path)a.classList.add('active')});

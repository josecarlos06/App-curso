const toggle=document.querySelector('#toggle');
const navUl=document.querySelector('.nav__ul')
menu();
function menu(){
   toggle.addEventListener('click',()=>{
      if(navUl.classList.contains('actived')){
         navUl.classList.remove('actived')
      }else{
         navUl.classList.add('actived')
      }
   })
};
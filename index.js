let listTop=document.querySelector('.list-top');
let listMain=document.querySelector('.list-main');
let lists=document.querySelector('.lists');
let iconMenu=document.querySelector('.menu-bar');
let containerLeft=document.querySelector('.container-left');
let containerRight=document.querySelector('.container-right');
let iconBtn=document.querySelector('.btn-icon');

listTop.addEventListener('click',()=>{
    if(iconBtn.innerHTML==="keyboard_arrow_down"){
        iconBtn.innerHTML='keyboard_arrow_up'
    }else if(iconBtn.innerHTML==='keyboard_arrow_up'){
        iconBtn.innerHTML='keyboard_arrow_down'
    }
    listMain.classList.toggle('list-main__activ')
    lists.classList.toggle('lists-active')
});


iconMenu.addEventListener('click',()=>{
    iconMenu.classList.toggle('menu-bar__open')
    containerLeft.classList.toggle('show-content__menu')
    containerRight.classList.toggle('container-right__active')
});






let scroll = document.querySelector('.HR_container');
let btnLeft = document.getElementById('btnLeft');
let btnRight = document.getElementById('btnRight');

btnRight.addEventListener('click', ()=>{
    scroll.style.scrollBehavior = "smooth";
    scroll.scrollLeft += 1100;
})

btnLeft.addEventListener('click', ()=>{
    scroll.style.scrollBehavior = "smooth";
    scroll.scrollLeft -= 1100;
})
    
    
  
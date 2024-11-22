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
});
    

const togglePopup = document.getElementById('togglePopup');
const popupMenu = document.getElementById('popupMenu');

togglePopup.addEventListener('click', () => {
    if (popupMenu.classList.contains('show')) {
        popupMenu.classList.remove('show');
    } else {
        popupMenu.classList.add('show');
    }
});


document.addEventListener('click', (event) => {
    if (!togglePopup.contains(event.target) && !popupMenu.contains(event.target)) {
        popupMenu.classList.remove('show');
    }
});
    
  
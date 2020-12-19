const learnmore = document.querySelector('.learnmore_btn');
const modalcancel = document.querySelector('.modalcancel');
const modal = document.querySelector('.modalcontainer');
const modalparent = document.querySelector('.section1')

learnmore.addEventListener('click', function(){
    modal.classList.remove('none');
    modalparent.classList.add('none')

})

modalcancel.addEventListener('click', function(){
    modal.classList.add('none');
    modalparent.classList.remove('none');
})

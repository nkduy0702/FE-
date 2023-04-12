
const Hlist = document.querySelector('.header__list');
const list = document.getElementById('list');
const closebtn = document.querySelector('.list__close');

Hlist.addEventListener('click', e => {
    if(list.classList.contains('nomal')){
        list.classList.remove('nomal');
        list.classList.add('list--on');
    } else if(list.classList.contains('list--off')){
        list.classList.remove('list--off');
        list.classList.add('list--on');
    }
});

closebtn.addEventListener('click', e => {
    list.classList.remove('list--on');
    list.classList.add('list--off');
});
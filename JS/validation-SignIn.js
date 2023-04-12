
const inputName = document.querySelector('input[type="text"]');
const inputP = document.querySelector('input[type="password"]');
const form = document.getElementById('form-login');

function error(elm, massgae) {
    if(elm.parentElement.classList.contains('success')){
        elm.parentElement.querySelector('span').innerHTML = ``;
        elm.parentElement.classList.remove('success');
        elm.parentElement.classList.add('invalid');
    } else {
        elm.parentElement.classList.add('invalid');
    }
}

function success(elm, massage) {
    if(elm.parentElement.classList.contains('invalid')){
        elm.parentElement.classList.remove('invalid');
        elm.parentElement.classList.add('success');
    } else {
        elm.parentElement.classList.add('success');
    }
    elm.parentElement.querySelector('span').innerHTML = `
    <i class="fas fa-check"></i>`;
}

inputName.onblur = e => {
    if(e.target.value.trim() === ''){
        error(e.target);
    } else {
        success(e.target);
    }
}
inputP.onblur = e => {
    if(e.target.value.trim() === ''){
        error(e.target);
    } else {
        success(e.target);
    }
}

form.addEventListener('submit', e => {
    e.preventDefault();
 
    const formgr = form.getElementsByClassName('form-group');
    arrFG = Array.from(formgr);
    let isValid = true;
    arrFG.forEach(element => {
        if(element.classList.contains('invalid')) isValid = false;
    })
    if(isValid){
        alert("Bạn đã đăng nhập thành công!")
        location.replace('./index.html');
    } else {
        alert("Có lỗi, Vui lòng nhập lại!")
    }
})
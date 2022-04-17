
const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
const modalClose = document.querySelectorAll('.modal__close_times');
const btns = document.querySelectorAll('.btn');


// modalMain.className = 'modal modal_active';

ondblclick = () => {
    modalMain.className = 'modal modal_active';
}

btns[0].onclick = () => {
    modalMain.className = 'modal';
    modalSuccess.className = 'modal modal_active';
}

for (i = 0; i < modalClose.length; i++) {
    modalClose[i].onclick = () => {
        close_modal();
    }
}

function close_modal() {
    modalMain.className = 'modal';
    modalSuccess.className = 'modal';
}
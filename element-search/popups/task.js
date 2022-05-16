/* Поиск модальных окон */
const modalWindow = document.querySelector('#modal_main');
const modalGood = document.querySelector('#modal_success');

/**
 * Модально окно по умолчанию
 */
modalWindow.classList.add('modal_active')

/**
 * Закрытие модального окна
 */
const closeModal = document.querySelectorAll('.modal__close');

closeModal.forEach(elem => {
    elem.addEventListener('click', () => {
        clossedModal()
    });

})

function clossedModal() {
    modalWindow.classList.remove('modal_active')
    modalGood.classList.remove('modal_active')


}

/**
 * Смена модальных окон
 */

const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    modalGood.classList.add('modal_active')
})


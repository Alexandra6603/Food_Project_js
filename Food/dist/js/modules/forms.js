import {closeModal, openModal} from './modalWindow';
import {postData} from '../services/services';

function forms(formSelector,modalTimerId) {
    const forms = document.querySelectorAll(formSelector);

    const mess = {
        loading: 'icons/spinner.svg',
        success: 'Отлично, мы скоро перезвоним!',
        fail: 'Упс, ошибочка'
    };

    forms.forEach(item => {
        bindPostData(item);
    })

    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); //отменяем стандартную работу браузера (чтобы при отправке формы страница не перезегружалась)

            let statusMess = document.createElement('img');
            statusMess.src = mess.loading;
            statusMess.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMess);

            const formData = new FormData(form);

            const json = JSON.stringify(Object.fromEntries(formData.entries()));
            

            postData('http://localhost:3000/requests', json)
            .then(data => {
                console.log(data);
                showThanksModal(mess.success);
                statusMess.remove();
            }).catch(() => {
                showThanksModal(mess.fail);
            }).finally(() => {
                form.reset();
            })
        });
    }

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        openModal('.modal', modalTimerId);

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>&times</div>
                <div class="modal__title">${message}</div>
            </div>
        `;

        document.querySelector('.modal').append(thanksModal);

        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal('.modal');
        }, 4000);
    }
}

export default forms;
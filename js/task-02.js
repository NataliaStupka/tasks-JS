// 1. Вешаем слушателя / Снимаем слушателя (В СЛУЧЕЕ ГДЕ БУДЕМ ОТПИСЫВАТЬСЯ(снимать слушателя):
//  выносим колбек во внешнюю не зависимую функцию, а в add и remove передаем одну и туже ссылку)
    // targetButton.addEventListener('click', () => {}) - вешаем слушателя
    // targetButton.removeEventListener('click', () => {}) - снимаем слушателя

    // примеры для наименований колбеков для слушателя(addEventListener)
    // 1) handleClick, handleButtonClick, 2) ButtonClickHandler,
    // 3) onButtonClick (onSubjectEvent); 

const targetBtn = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.js-add-listener');
const removeListenerBtn = document.querySelector('.js-remove-listener');

// вешаю слушателя
addListenerBtn.addEventListener('click', event => {
  console.log('Вешаю слушателя события на целевую кнопку');
  targetBtn.addEventListener('click', onTargetBtnClick);
});

function onTargetBtnClick(event) {
  console.log('Клик по целевой кнопке');
}
//снимаю слушателя (на клик подписались от клика и отписываемся)
removeListenerBtn.addEventListener('click', event => {
  console.log('Снимаю слушателя события с целевой кнопки');
  targetBtn.removeEventListener('click', onTargetBtnClick);
});

// 2. ФОРМЫ. Событие submit. .prevenrDefault (отмена действия по умолчанию (например переход по ссылке))
const form = document.querySelector('.js-register-form')
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
 
  // если нужно СОБРАТЬ ДАННЫЕ с БОЛЬШОЙ ФОРМЫ (большого количества полей), используем formData
  const formData = new FormData(event.currentTarget) 
  formData.forEach((value, name) => {
    console.log('onFormSubmit -> name', name);
    console.log('onFormSubmit -> value', value);
  });
};
 

// как вариант, для збора данных с формы, но все в ручную (что плохо) 

// посмотреть, что лежит в form(на нем слушатель) в елементе (и глубже: subscription, ... )
        // console.dir(event.currentTarget.elements);
        // console.dir(event.currentTarget.subscription);
  // или все сразу
        // console.dir(event.currentTarget.elements.subscription.value);

  // const formEl = event.currentTarget.elements
  // console.dir(formEl);

// получить ссылку на элементы: (а ЗНАЧЕНИЕ у input - .value)
  // const mail = formEl.email.value;
  // const password = formEl.password.value;
  // const subscription = formEl.subscription.value;
  
// будем отправлять такой обьект
    //   const formData = {
    //     mail,
    //     password,
    //     subscription
    // }
    // console.log(formData)

// 3. событие input (input, focus, blur, change)
  // const input = document.querySelector('.js-input');
  // const nameLabel = document.querySelector('.js-button > span');
  // const license = document.querySelector('.js-license');
  // const btn = document.querySelector('.js-button');
  
// для удобства всю эту выборку соединим в
  const refs = {
    input: document.querySelector('.js-input'),
    nameLabel: document.querySelector('.js-button > span'),
    licenseCheckbox: document.querySelector('.js-license'),
    btn: document.querySelector('.js-button'),
  }
// refs.input - ссылка на элемент

// событие input (input) - для текстовых элементов
  refs.input.addEventListener('input', onInputChange);
// событие input (focus, blur)
  refs.input.addEventListener('focus', onInputFocus);
  refs.input.addEventListener('blur', onInputBlur);
// событие input (change) - будем использовать только на чекбоксах и радиобатонн (на инпутах нет)
  refs.input.addEventListener('change', onInputChange);

 refs.licenseCheckbox.addEventListener('change', onLicenseChange)

// функции на инпут
function onInputFocus() {
console.log('инпут получил фокус, событие focus')
};
function onInputBlur() {
console.log('инпут потерял фокус, событие blur')
};
    // введенное значение в инпуте переносим в span
function onInputChange(event) {
  console.log(event.currentTarget.value)
  refs.nameLabel.textContent = event.currentTarget.value;
};
// -----------------------------------------------------
// когда ставлю галочку на чекбокс - активирую кнопку
function onLicenseChange(event) {
  console.log('выбран', event.currentTarget.checked);

    // disabled - выключено (свойствуо кнопки)
  // кнопка выключена когда чекбокс не выбран
  refs.btn.disabled = !event.currentTarget.checked
};

// 4. Событие клавиатуры (keypress(тошлько текст), keydown(все клавиши и служебные тоже), keyup)
// свойство code (наименованиеб физическая клавиша), key (букву какую ввелиб на любом языке)
    const refsForth = {
      output: document.querySelector('.js-output'),
      clearBtn: document.querySelector('.js-clear'),
    };
    
//по весем на window слушателя события (смогу писать на странице)
  window.addEventListener('keypress', onKeypress);

  refsForth.clearBtn.addEventListener('click', onClearOutput);

  function onKeypress(event) {
    refsForth. output.textContent += event.key
  }
  function onClearOutput() {
    refsForth.output.textContent ='';
  }

// 5. Событие мышки (mouseenter и mouseleave (это ховер)), mouseover и mouseout
      const boxRef = document.querySelector('.js-box');

      boxRef.addEventListener('mouseover', onMouseEnter);
      boxRef.addEventListener('mouseout', onMouseLeave);
      // boxRef.addEventListener('mousemove', onMouseMove);

      function onMouseEnter(event) {
        const box = event.currentTarget;
        box.classList.add('box--active');
      }

      function onMouseLeave(event) {
        const box = event.currentTarget;
        box.classList.remove('box--active');
      }

      function onMouseMove(event) {
        console.log(event);
      }

// 6. Модальное окно
// открыть и закрыть по кнопке
  const refsModal = {
    openModalBtn: document.querySelector('[data-action="open-modal"]'),
    closeModalBtn: document.querySelector('[data-action="close-modal"]'),
    backdrop: document.querySelector('.js-backdrop'),
  };

refsModal.openModalBtn.addEventListener('click', onOpenModal);
refsModal.closeModalBtn.addEventListener('click', onCloseModal);

    // вешаем класс на боди, удобнее изменять в глубину (например спрятать бекдроп)
  function onOpenModal() {
      // получаем ссылку на боди и вешаем класс
      document.body.classList.add('show-modal')
      // закрытие модалки через Ecs, (повесим слушателя при открытие и снимим слушателя в CloseModal)
      window.addEventListener('keydown', onEscKeyPress)
    }
    function onCloseModal() {
      document.body.classList.remove('show-modal')
      window.removeEventListener('keydown', onEscKeyPress)
    }

// сделаем, что бы модалка закрывалась по клику не по кнопке, а по бекдропе
refsModal.backdrop.addEventListener('click', onBackdropClick);

function onBackdropClick(event) {

  if (event.currentTarget === event.target) {
    console.log('Кликнули именно в бекдроп')
    // вызываем функцию onCloseModal()
    onCloseModal();
  }
}
//  закрытие модалки через Ecs
function onEscKeyPress(event) {
  if (event.code === 'Escape') {onCloseModal();}
  
}
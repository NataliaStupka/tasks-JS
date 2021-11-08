// 1. поиск элемента (по селектор тега, атрибута, айдишника, класс, ...).
// querySelector возвращает один элемент
const navEl = document.querySelector('ul');
console.log(navEl);
console.dir(navEl);
const navItem = document.querySelector('li');
const navItems = document.querySelectorAll('li');
const nav = navEl.querySelectorAll('li');
console.log('Это querySelectorAll в navEl : ', nav);
console.log('Это querySelector первого li : ', navItem);
console.log('Это querySelectorAll в document : ', navItems);
// описывает весь наш документ
console.log(document);
// описывает наше окно
console.log(window);

// =========================================================
// 2. Свойства элемента.
// Для фото (src, alt)
const imgEl = document.querySelector('.hero__image');
console.log('imgEl:', imgEl);
console.log('Вернется значение атрибута src:', imgEl.src);
// src идет как свойство обьекта, его можно как прочитать так и записать/изменить значение (браузер отрисует сразу)
// imgEl.src = 'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480';


// если хотим что бы картинка менялась только после того как кликнем на кнопку, то вешаем слушателя на кнопку (click):
const magicBtn = document.querySelector('.js-magic-btn');
magicBtn.addEventListener('click', () => {
    imgEl.src = 'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480';
    imgEl.alt = 'Это новый котик'
});

// 3. для замены текста .textContent
const heroTitleEl = document.querySelector('.hero__title');
console.log('текст заголовка:', heroTitleEl.textContent);
heroTitleEl.textContent = "Я сладкий пирожочек.";

/* 4. Атрибуты
    * - get(имя-атрибута) - почти не используется
    * - set(имя-атрибута) - почти не используется
    * - remove(имя-атрибута) - удалить атрибут
    * - has(имя-атрибута) - может проверить есть ли атрибут у элемента: console.log(imageEl.hasAttribute('src'));
    */

// 5. data-атрибуты
// есть три кнопки (data-action="add", data-action="remove", data-action="edit")
// для получения значения data-атрибуты используем dataset
const actions = document.querySelectorAll('.js-actions button');
console.log(actions[0].dataset.action);
console.log(actions[1].dataset.action);
console.log(actions[2].dataset.action);

// actions[0].dataset.action = 'remove';

// 6. добавляем стили classlist
    //  * - add(класс)
    //  * - remove(класс)
    //  * - toggle(класс) - если класса cls нет, то добавляет его, если есть, наоборот удаляет
    //  * - replace(старыйКласс, новыйКЛасс)
    //  * - contains(класс) - возвращает true или false в зависимости от того, есть ли у элемента класс

// 7. через js меняем текущую страницу (О нас '/about', Портфолио /portfolio, Контакты /contact)
    const currentPageUrl = '/about';

    const linkEl = document.querySelector(
        `.site-nav__link[href="${currentPageUrl}"]`,
    );

    // добавляем класс, который прописан в css как current
    linkEl.classList.add('site-nav__link--current');

// 8. Навигация по дому
        // elem.parentNode - выберет родителя elem.
        // elem.childNodes - псевдомассив, хранит все дочерние элементы, включая текстовые.
        // elem.children - псевдомассив, хранит только дочерние узлы-элементы, то есть соответствующие тегам.
        // elem.firstChild - выберет первый дочерний элемент внутри elem, включая текстовые узлы.
        // elem.firstElementChild - выберет первый дочерний узел-элемент внутри elem.
        // elem.lastChild - выберет последний дочерний элемент внутри elem, включая текстовые узлы.
        // elem.lastElementChild - выберет последний дочерний узел-элемент внутри elem.
        // elem.previousSibling - выберет элемент «слева» от elem (его предыдущего соседа).
        // elem.previousElementSibling - выберет узел-элемент «слева» от elem (его предыдущего соседа).
        // elem.nextSibling - выберет элемент «справа» от elem (его следующего соседа)
        // elem.nextElementSibling - выберет узел-элемент «справа» от elem (его следующего соседа).

    // const navEl = document.querySelector('.site-nav');
    const firstNavItemEl = navEl.firstElementChild;
    console.log('первый ребенок', firstNavItemEl);
    console.log('дети:', navEl.children);
    console.log('дети первый:', navEl.children[0]);
    console.log('последний ребенок:', navEl.lastElementChild);

// 9. Создаем элемент .createElement (в памяти, потом добавим его в разметку )
    const titleEl = document.createElement('h2');
    titleEl.classList.add('page-title');
    titleEl.textContent = 'Это созданный заголовок страницы';
    console.log(titleEl);

// 10. Добавляум элемент в разметку:
        // element.append(el1, el2, ...) - добавляет один или несколько элементов после всех детей элемента element.
        // element.prepend(el1, el2, ...) - добавляет один или несколько элементов перед всеми детьми элемента element.
        // element.after(el1, el2, ...) - добавляет один или несколько элементов после элемента element.
        // element.before(el1, el2, ...) - добавляет один или несколько элементов перед элементом element.
        // element - в кого хотим добавить (уже должно существовать в разметке)

    // например, в конец body
    document.body.append(titleEl);

    const imageEl = document.createElement('img');
    imageEl.src = 'https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg';
    imageEl.alt = 'Горы-Небо-Дорога';
    imageEl.width = 320;

    document.body.append(imageEl);

// ---------------------------------------
/* Создаём и добавляем новый пункт в меню
    */
    const navItemEl = document.createElement('li');
    navItemEl.classList.add('site-nav__item--two');

    const navLinkEl = document.createElement('a');
    navLinkEl.classList.add('site-nav__link--two');
    navLinkEl.textContent = 'Личный кабинет';
    navLinkEl.href = '/profile';

    navItemEl.append(navLinkEl);

    // const navEl = document.querySelector('.site-nav');

    navEl.prepend(navItemEl);

// 11. Работа с МАСИВОМ. Свойство Style ///////

    const colorPickerOptions = [
    { label: 'red', color: '#F44336' },
    { label: 'green', color: '#4CAF50' },
    { label: 'blue', color: '#2196F3' },
    { label: 'grey', color: '#607D8B' },
    { label: 'pink', color: '#E91E63' },
    { label: 'indigo', color: '#3F51B5' },
    ];

const colorPickerContainerEl = document.querySelector('.js-color-picker');


// const elements = colorPickerOptions.map(option => {
//     const buttonEl = document.createElement('button');
//     buttonEl.type = 'button';
//     buttonEl.classList.add('color-picker__option')
//     buttonEl.textContent = option.label;
//     buttonEl.style.backgroundColor = option.color;
//     return buttonEl;
//   })
// colorPickerContainerEl.append(...elements);

// перепышем 11. в функцию:
const createcolorPickerOptions = (options) => {
    return options.map(option => {

    const buttonEl = document.createElement('button');
    buttonEl.type = 'button';
    buttonEl.classList.add('color-picker__option')
    buttonEl.textContent = option.label;
    buttonEl.style.backgroundColor = option.color;

    return buttonEl;
})
}
const elements = createcolorPickerOptions(colorPickerOptions);
colorPickerContainerEl.append(...elements);

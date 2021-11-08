// 1. Делегирование событий (вешаем слушателя на предка)
    const container = document.querySelector('.js-container')
    container.addEventListener('click', onClick)

    function onClick(event) {
        // event.target именно на какую кнопку кликнули 
        // фильтр цели кнопки - если кликнем мимо кнопки ничего не происходило
        // nodeName - вид элемента ('с большой буквы')
        if (event.target.nodeName !== 'BUTTON') {
    return
        }

        console.log(event.target.textContent);
        console.log(event.target.nodeName)
}
    
// 2. задачка отфильтровать

    // I вариант (выбор по одной кнопке)
    const tagsContainar = document.querySelector('.js-tags')
    tagsContainar.addEventListener('click', onTagsContainerClick);

    // храним значение (выбранной) кнопки в переменной
    let selectedTag = null;


    // делаем активной выбранную кнопку
    function onTagsContainerClick(event) {
        // что бы кликало только по кнопке
        if (event.target.nodeName !== 'BUTTON') {
            return
        };
        //a) ищем активную кнопку
        const currentActiveButton = document.querySelector('.tags__btn--active');
        // если активная кнопка есть - снимаем с нее класс
        if (currentActiveButton) {
            currentActiveButton.classList.remove('tags__btn--active');
        }
        // на выбранную кнопку вешаем класс с "подсветкой"
        const nextActivButton = event.target;
        nextActivButton.classList.add('tags__btn--active');

        selectedTag = nextActivButton.dataset.value
        console.log(selectedTag)
    }


    // II вариант когда выбираем несколько кнопок, и создаем список из выбранных, не зависимо сколько раз кликнули на одной и той же, будет одна
    // const tagsContainar = document.querySelector('.js-tags')
    // const selectedTags = new Set();

    // tagsContainar.addEventListener('click', onTagsContainerClick);

    // function onTagsContainerClick(event) {
    //     if (event.target.nodeName !== 'BUTTON') {
    //         return
    //     };
    //     const tag = event.target.dataset.value
    //     if (event.target.classList.contains('tags__btn--active')) {
    //         selectedTags.delete(tag);
    //     } else {
    //         selectedTags.add(tag);
    // }
    //     event.target.classList.toggle('tags__btn--active')
    // console.log(selectedTags)
    // }

// 3. colorpicker: через js, по шаблону создадим карточки в html, с приходящего масива; покрасить страницу в цвет выбранной карты
    const colors = [
    { hex: '#f44336', rgb: '244,67,54' },
    { hex: '#e91e63', rgb: '233,30,99' },
    { hex: '#9c27b0', rgb: '156,39,176' },
    { hex: '#673ab7', rgb: '103,58,183' },
    { hex: '#3f51b5', rgb: '63,81,181' },
    { hex: '#2196f3', rgb: '33,150,243' },
    { hex: '#00bcd4', rgb: '0,188,212' },
    { hex: '#009688', rgb: '0,150,136' },
    { hex: '#4caf50', rgb: '76,175,80' },
    { hex: '#ffeb3b', rgb: '255,235,59' },
    { hex: '#ff9800', rgb: '255,152,0' },
    { hex: '#795548', rgb: '121,85,72' },
    { hex: '#607d8b', rgb: '96,125,139' },
    ];
    // 1й шаг зарендерить (создать разметку)
        const paletteContainer = document.querySelector('.js-palette');
        const cardsMarkup = createColorCardsMarkup(colors);
        paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup);

        function createColorCardsMarkup(colors) {
                // colors.map((color) => {
            return colors.map(({ hex, rgb }) => {
                return `
        <div class="color-card">
                    <div class="color-swatch"
                        data-hex="${hex}"
                        data-rgb="${rgb}"
                        style="background-color: ${hex}"
                        >
                    </div>
                <div class="color-meta">
                    <p>HEX: ${hex}</p>
                    <p>RGB: ${rgb}</p>
                </div>
            </div>
            `;
            }).join('');
    }
        
    // 2й шаг - кликая на цвет карточки, меняем цвет страницы
    //делегирование, повесим на предка слушателя
         paletteContainer.addEventListener('click', onPaletteContainerClick);

    function onPaletteContainerClick(event) {
        // если event.target не содержит класс, то клик ни к чему не приведет
        if (!event.target.classList.contains('color-swatch')) {
            return
        }
            // б)
        removeActiveCardClass();

        const swatchEl = event.target;
        // добавим эфект на всю карточку 
        // метод .closest - пойдет искать ближайший на верх элемент с нужным селектором
        const parentColorCard = swatchEl.closest('.color-card');
            // в)
        addActiveCardClass(parentColorCard);
            //  а)
        setBodyBgColor(swatchEl.dataset.hex);
    }
    

    
     // а) покрасим боди в цвет выбранной карточки
function setBodyBgColor(color) {
        // document.body.style.backgroundColor = swatchEl.dataset.hex; - было, а вверхней функции (onPaletteContainerClick) сократим на  setBodyBgColor(swatchEl.dataset.hex);
        document.body.style.backgroundColor = color;
};

     //  б) сделаем, что бы выбрана была только одна; в функции onPaletteContainerClick сделаем вызов removeActiveCardClass()
function removeActiveCardClass() {
        const currentActiveCard = document.querySelector('.color-card.is-active');
        if (currentActiveCard) {
    currentActiveCard.classList.remove('is-active')
        }
};

    // в)
function addActiveCardClass(card) {
    // parentColorCard.classList.add('is-active'); - было в onPaletteContainerClick (в ней вызов функции в)
    card.classList.add('is-active');
 };
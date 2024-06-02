function moveButton() {
    const btn = document.querySelector('.header__btn');
    const list = document.querySelector('.header__navigation');
    const nav = document.querySelector('.header__inner');

    if (window.innerWidth < 1024) {
        list.appendChild(btn);
    } else {
        nav.appendChild(btn);
    }
}

// Перемещение кнопки при загрузке страницы
moveButton();

// Перемещение кнопки при изменении размера окна
window.addEventListener('resize', moveButton);


const burger = document.querySelector('.hamburger');
const navigation = document.querySelector('.header__navigation');

function hamburger() {
    burger.classList.toggle("is-active");
    navigation.classList.toggle("show");
}

burger.addEventListener('click', hamburger)
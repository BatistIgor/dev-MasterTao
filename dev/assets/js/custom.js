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


var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
      },
  });

var swiper = new Swiper(".advantages-swiper", {

    pagination: {
        el: ".swiper-pagination",
        },
});

var swiper = new Swiper(".delivery-swiper", {

    slidesPerView: 1,
    navigation: {
        nextEl: ".delivery-swiper-button-next",
        prevEl: ".delivery-swiper-button-prev",
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        1199: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    }

});

var swiper = new Swiper(".services-swiper", {

    slidesPerView: 1,
    navigation: {
        nextEl: ".services-swiper-button-next",
        prevEl: ".services-swiper-button-prev",
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        1199: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    }

});


const fileInput = document.querySelector('#calculation__file');
const fileName = document.querySelector('#calculation__file-name')

fileInput.addEventListener('change', () => {
    fileName.innerHTML = fileInput.files[0].name;
});

const acordeonItems = document.querySelectorAll('.question__acordeon-item');

acordeonItems.forEach(acordeonItem => {
    const acordeonTitle = acordeonItem.querySelector('.question__acordeon-title');
    const acordeonText = acordeonItem.querySelector('.question__acordeon-text');
    
    acordeonItem.addEventListener('click', () => {
        const isActive = acordeonItem.classList.contains('question__acordeon-item--activ');
        
        // Удаляем классы '--activ' у всех элементов
        acordeonItems.forEach(item => {
            item.classList.remove('question__acordeon-item--activ');
            item.querySelector('.question__acordeon-title').classList.remove('question__acordeon-title--activ');
            item.querySelector('.question__acordeon-text').classList.remove('question__acordeon-text--activ');
        });
        
        // Если текущий элемент не был активен, добавляем классы '--activ'
        if (!isActive) {
            acordeonItem.classList.add('question__acordeon-item--activ');
            acordeonTitle.classList.add('question__acordeon-title--activ');
            acordeonText.classList.add('question__acordeon-text--activ');
        }
    });
});
import $ from 'jquery'
import 'slick-carousel/slick/slick'
import { TabsManager } from './tabs'


function init() { 
    new TabsManager(document.querySelector('.service__tabs')); 

    $('.works__items').slick({
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '.works__arrow_left',
        nextArrow: '.works__arrow_right',
        centerPadding: '100px',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '60px',
                    infinite: true,

                }
            },
            {
                breakpoint: 481,
                settings: {
                    arrow: false,
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '40px',
                    infinite: true,

                }
            }
        ]
    });


    const form = document.getElementById('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const { name, phone, } = event.target;

        const contactInfo = {
            name: name.value, 
            phone: phone.value,
        }
        console.log(contactInfo);
        
    });

    $(document).ready(function() {
        $(".gallery a").fancybox(); // выбор всех ссылок с классом gallery
    });

};

init();
//  Меню Бургер

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
        iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}

// Прокрутка при навигации

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });
    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header__container').offsetHeight;

            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}

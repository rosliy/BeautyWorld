import { Fancybox } from '@fancyapps/ui'
import $ from 'jquery'
import 'jquery-validation/dist/jquery.validate'
import 'slick-carousel/slick/slick'
import { TabsManager } from './tabs'
import '/node_modules/jquery.maskedinput/src/jquery.maskedinput.js'



$.validator.addMethod("phoneNumber", function(value, element) {
    if (element.value.replace(/[^\d]/g, '').length == 11) 
        return true;
        else return false;
  }, 'Пожалуйста введите номер телефона корректно.');

function init() { 

// TABS

    new TabsManager(document.querySelector('.service__tabs')); 
    
    
// SLIDER

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

// FORM
// VALIDATION
    
    

// GALLERY

    Fancybox.bind("[data-fancybox]");



    // ApiService.getServices().then(initializeServiceList);

    // function submitHandler() {
    //     try{
    //         await ApiService.createOrder()
    //     } catch() {

    //     } finally {
    //         hideLoader();
    //     }
        
    // }


};

init();



const formFast = document.getElementById('formFast');

    $(function(){

        $(".form__phone").mask("+7 (999) 999-99-99", {autoclear: false});
        $(formFast).submit(function(e) {
            
            e.preventDefault();
            
        }).validate({
            rules: {
                nameFast: {
                    required: true,
                    minlength: 2,
                },
                numberFast: {
                        required: true,	
                        phoneNumber: true
                }
            },
            messages: {
                nameFast: {
                    required: "Поле 'Имя' обязательно к заполнению", 
                    minlength: "Введите не менее 2-х символов в поле 'Имя'"
                },
                numberFast: {
                    required: "Поле 'Телефон' обязательно к заполнению",

                }
            },
            submitHandler: function (formFast) {
                const formData = {
                    nameFast: formFast.name.value,
                    numberFast: formFast.number.value,
                }
                console.log(formData)
            }
            })
});





// BURGER

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
        iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}

// SMOOTH SCROLL

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

// POPUP

const popupLinks = document.querySelectorAll('.popup-link');
const popup = document.querySelector('.popup')
const popupOverlay = document.querySelector('.popup__overlay');
const closePopup = document.querySelector('.popup__close');

if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener('click', (e) => {
            popup.classList.add('open');
            e.preventDefault();
        })
    }
}

popupOverlay.addEventListener('click', (e) => {

	if (e.target == popupOverlay) {
		popup.classList.remove('open');
	}
});

closePopup.addEventListener('click', (e) => {
    popup.classList.remove('open');
})

const form = document.getElementById('form');

$(function(){

const selectMaster = document.querySelector('.form__master');
const selectService = document.querySelector('.form__service');

        $(".form__phone").mask("+7 (999) 999-99-99", {autoclear: false});
        $(form).submit(function(e) {
            
            e.preventDefault();
            
        }).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2,
                },
                number: {
                        required: true,	
                        phoneNumber: true
                }
            },
            messages: {
                name: {
                    required: "Поле 'Имя' обязательно к заполнению", 
                    minlength: "Введите не менее 2-х символов в поле 'Имя'"
                },
                number: {
                    required: "Поле 'Телефон' обязательно к заполнению",

                }
            },
            submitHandler: function (form) {
                const formData = {
                    name: form.name.value,
                    number: form.number.value,
                    master: selectMaster.value,
                    service: selectService.value,
                    date: form.date.value,
                    time: form.time.value
                };
                console.log(formData);
                alert("Ваша заявка отправлена! В ближайшее время с вами свяжется менеджер.")
                setTimeout(() => {popup.classList.remove('open');}, 3000);
            }
            })
});


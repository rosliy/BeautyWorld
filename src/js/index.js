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
    //         await ApiService.createOrder({})
    //     } catch(e) {
    //         console.error(e);
    //     } finally {
    //         hideLoader();
    //     }
        
    // }


}

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
    iconMenu.addEventListener("click", function () {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}

// SMOOTH SCROLL

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
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

if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });
    
    

    
}

var status = function (response) {
    if (response.status !== 200) {
        return Promise.reject(new Error(response.statusText))
    }
    return Promise.resolve(response)
}
var json = function (response) {
    return response.json()
}
// let user = {
//     name: "Сергей",
//     phone: "2346346357457",
//     masterId: 3,
//     serviceId: 2,
//     visitDate: "14.11.2023"
// };

// let response = await fetch('http://localhost:3001/api/orders', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json;charset=utf-8'
//     },
//     body: JSON.stringify(user)
// });

// let result = await response.json();
// console.log(result)

fetch('http://localhost:3001/api/services')
    .then(function (response) {	
        return response.json();
    }).then(function (response) {
        document.querySelector('.form__service').innerHTML=response; 
        console.log(response[0].name)
        for (let i=0; i<response.length; i++) {
            console.log(response[i])
            let  fragment = document.createDocumentFragment();
            for (let option in response[i]){
                
                let optionElem = new Option(option, option.name);
                fragment.appendChild(optionElem);
        }
        document.querySelector('.form__service').appendChild(fragment);
        }
        // let  fragment = document.createDocumentFragment();
        // for (let option in response){
        //     let optionElem = new Option(option, response[option]);
        //     fragment.appendChild(optionElem);
        // }
        // document.querySelector('.form__service').appendChild(fragment);

        return;
    }).catch(function (error) {
        console.log(error);	
    });


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

closePopup.addEventListener('click', () => {
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
                phoneNumber: form.number.value,
                masterId: selectMaster.value,
                serviceId: selectService.value,
                visitDate: `${form.date.value}T${form.time.value}`,
            };
            console.log(formData);
            fetch('http://localhost:3001/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(formData)})
            alert("Ваша заявка отправлена! В ближайшее время с вами свяжется менеджер.")
            setTimeout(() => {popup.classList.remove('open');}, 3000);
        }
    })


});



function initAccordion() {
    let accordionItems = document.querySelectorAll('.js-accordion')
    accordionItems.forEach(item => {
        let accordionHead = item.querySelector('.js-accordion__head')
        let accordionBody = item.querySelector('.js-accordion__body')
        if (item.classList.contains('open') && accordionBody) {
            accordionBody.style.maxHeight = accordionBody.scrollHeight + 'px'
            setTimeout(function () {
                accordionBody.style.maxHeight = 'initial'
            }, 300)
        }
        if (accordionHead) {
            accordionHead.addEventListener('click', function() {
                if (item.classList.contains('open')) {
                    accordionBody.style.maxHeight = accordionBody.scrollHeight + 'px'
                    setTimeout(function () {
                        accordionBody.style.maxHeight = 0
                    }, 50)
                }
                else {
                    accordionBody.style.maxHeight = accordionBody.scrollHeight + 'px'
                    setTimeout(function () {
                        accordionBody.style.maxHeight = 'initial'
                    }, 300)
                }
                item.classList.toggle('open')
            })
        }
    })
}

function initTabs() {
    let tabs = document.querySelectorAll('[data-tabs]')
    tabs.forEach(item => {
        let tabItems = item.querySelectorAll('[data-tab]')
        tabItems.forEach(tItem => {
            tItem.addEventListener('click', function () {
                if (this.classList.contains('active')) return
                let currentActiveTab = item.querySelector('.active[data-tab]')
                let currentActiveTabContent = item.querySelector('.active[data-tab-content]')
                let nextActiveTabContent = item.querySelector(`[data-tab-content="${this.getAttribute('data-tab')}"]`)

                this.classList.add('active')
                if (currentActiveTab) currentActiveTab.classList.remove('active')
                if (currentActiveTabContent) currentActiveTabContent.classList.remove('active')
                if (nextActiveTabContent) nextActiveTabContent.classList.add('active')
            })
        })
    })
}

// function initLanguageMenu() {
//     let blocks = document.querySelectorAll('.header__languages')
//     blocks.forEach(block => {
//         // let block = document.querySelector('.header__languages')
//         block.addEventListener('click', (e) => {
//             let target = e.target
//             if (target.classList.contains('header__languages-item')) {
//                 document.querySelectorAll('.header__languages-selected')[0].innerHTML = target.innerHTML
//                 document.querySelectorAll('.header__languages-selected')[1].innerHTML = target.innerHTML
//             }
//
//             target.closest('.header__languages').classList.toggle('open')
//         })
//     })
//
//     document.addEventListener('click', (e) => {
//         let target = e.target
//         if(target.closest('.header__languages')) {
//             return
//         }
//         if(document.querySelector('.header__languages.open')) {
//             document.querySelector('.header__languages.open').classList.toggle('open')
//         }
//     })
// }

function initShowBlock() {
    let btn = document.getElementById('detail-show')
    if(!btn) return
    btn.addEventListener('click', (e) => {
        e.preventDefault()
        let block = document.querySelector('.who-we__txt')
        if(block.classList.contains('show')) {
            btn.innerHTML = 'Детальніше'
        } else {
            btn.innerHTML = 'Скрити'
        }
        block.classList.toggle('show')

    })
}

// function initShowMobileMenu() {
//     let btns = document.querySelectorAll('.mobile-menu-btn')
//     btns.forEach(btn => {
//         btn.addEventListener('click', (e) => {
//             e.preventDefault()
//             let block = document.querySelector('.header-mobile')
//             block.classList.toggle('open')
//
//         })
//     })
// }

// function initFileBtn() {
//     let input = document.getElementById("file-btn");
//     let imageName = document.getElementById("image-name")
//
//     if(!input) return
//
//     input.addEventListener("change", () => {
//         let inputImage = document.querySelector("input[type=file]").files[0];
//
//         input.classList.add('changed')
//         imageName.innerText = inputImage.name;
//     })
// }

function initPopups() {
    var popupOpenTriggers = document.querySelectorAll('[data-open]');
    popupOpenTriggers.forEach(function (item) {
        item.addEventListener('click', function () {
            var popup = document.querySelector("[data-popup=\"".concat(item.getAttribute('data-open'), "\"]"));

            if (popup) {
                document.querySelector('body').classList.add('hide-overflow');
                popup.classList.add('open');
            }
        });
    });
    var popupCloseTriggers = document.querySelectorAll('.popup__close, [data-close]');
    popupCloseTriggers.forEach(function (item) {
        item.addEventListener('click', function () {
            document.querySelector('body').classList.remove('hide-overflow');
            item.closest('.popup').classList.remove('open');
        });
    });
    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('popup')) {
            document.querySelector('body').classList.remove('hide-overflow');
            e.target.classList.remove('open');
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {

    // initLanguageMenu()
    // initShowBlock()
    // initShowMobileMenu()
    // initTabs()
    // initFileBtn()
    initPopups()

    $('.form-select').select2({
        minimumResultsForSearch: -1,
        // placeholder: $(this).data('placeholder'),
    });

    $('.footer__item-title').click(function () {
        $(this).toggleClass('open')
    });


    $('.mobile-menu-btn').click(function () {
        $(this).toggleClass('open')
        $('.m-header').toggleClass('open-menu')
        $('.page').toggleClass('open-menu')
    })

    $(document).on('click', '.calendar__table-item-plus', function () {
        $(this).toggleClass('open')
        $(this).next().next().toggleClass('open')
    })

    $('.calendar__table-number').click(function () {

        /**
         * Set day
         */
        let indexElement = $(this).closest('td').index()
        let day = $(this).closest('tbody').prev('thead').find('td').eq(indexElement).html()
        $('.mobile-calendar__day').html(day)

        /**
         * Set date
         */
        let date = $(this).clone()
        $('.mobile-calendar__date').html(date)

        /**
         * Set items
         */
        let items = $(this).closest('td').find('.calendar__table-item').clone()
        $('.mobile-calendar__items').html(items).find('.calendar__table-item').show()

        /**
         * Hide table
         */
        $(this).closest('table').hide()
        $('.mobile-calendar').show()
    })

    $('.mobile-calendar__back-btn').click(function () {
        $(this).closest('.calendar__table').find('table').show()
        $('.mobile-calendar').hide()
    })

    let submenuLink = '.has-sub-menu .m-header__menu-link'
    let submenuLinkLevel2 = '.has-sub-menu-lv2 .m-header__sub-menu-link'
    let submenuLinkLevel3 = '.has-sub-menu-lv3 .m-header__sub-menu-lv2-link'

    $(`${submenuLink}, ${submenuLinkLevel2}, ${submenuLinkLevel3}`).click(function () {
        $(this).toggleClass('open')
        $(this).next().slideToggle()
    })

})
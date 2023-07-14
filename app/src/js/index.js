
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

function initRegisterForm() {
    if (!document.querySelector('.registration')) return
    let competitionTypes = document.querySelectorAll('input[name="radio1"]')
    competitionTypes.forEach(item => {
        item.addEventListener('change', function() {
            registerFormHandler()
        })
    })

    let eventTypes = document.querySelectorAll('input[name="radio2"]')
    eventTypes.forEach(item => {
        item.addEventListener('change', function() {
            registerFormHandler()
        })
    })

    let numPlayers = document.querySelectorAll('input[name="radio3"]')
    numPlayers.forEach(item => {
        item.addEventListener('change', function() {
            registerFormHandler()
        })
    })

    let tournamentSelect = $('#select')
    tournamentSelect.on('change', function(e) {
        registerFormHandler()
    })

    let addPlayerBtn = $('#addPlayerBtn')
    addPlayerBtn.on('click', function() {
        if (+this.getAttribute('data-number') === 1) {
            $('#teamMembersBlock .site-form__section-title').show()
        }
        let playerBlock = document.createElement('div')
        playerBlock.classList.add('site-form__row')
        let htmlContent = `<div class="site-form__col site-form__col--50 site-form__col--sm-100">
                              <div class="site-form__form-input">
                                <input class="site-form__input" type="text" placeholder="Player ${this.getAttribute('data-number')} First Name">
                              </div>
                            </div>
                            <div class="site-form__col site-form__col--50 site-form__col--sm-100">
                              <div class="site-form__form-input">
                                <input class="site-form__input" type="text" placeholder="Player ${this.getAttribute('data-number')} Last Name">
                              </div>
                            </div>
                            <div class="site-form__col site-form__col--50 site-form__col--sm-100">
                              <div class="site-form__form-input">
                                <input class="site-form__input" type="text" placeholder="Player ${this.getAttribute('data-number')} Email">
                              </div>
                            </div>
                            <div class="site-form__col site-form__col--50 site-form__col--sm-100">
                              <div class="site-form__form-input">
                                <input class="site-form__input" type="text" placeholder="Player ${this.getAttribute('data-number')} Phone number">
                              </div>
                            </div>`
        if (+this.getAttribute('data-number') > 1) {
            $(playerBlock).css('margin-top', '20px')
        }
        playerBlock.innerHTML = htmlContent
        $('#teamMembersBlock').append(playerBlock)
        this.setAttribute('data-number', +this.getAttribute('data-number') + 1)
    })

    let addEventBtn = $('#addEventBtn')
    addEventBtn.on('click', function() {
        let eventBlock = document.createElement('div')
        eventBlock.classList.add('site-form__form-item')
        let htmlContent = `<select class="site-form__select form-select">
                      <option>Event Type</option>
                      <option value="1">Singles 501 - $50</option>
                      <option value="2">Master Singles 501 - $60</option>
                      <option value="3">Singles Cricket - $50</option>
                      <option value="4">Master Singles Cricket - $60</option>
                      <option value="5">Mixed Doubles 501 - $100</option>
                      <option value="6">Mixed Doubles Cricket - $100</option>
                    </select>`
        eventBlock.innerHTML = htmlContent
        $('#additionalEventsBlock').append(eventBlock)
        $(eventBlock).find('.form-select').select2({
            minimumResultsForSearch: -1,
            // placeholder: $(this).data('placeholder'),
        })
        if (+this.getAttribute('data-number') > 1) {
            $(eventBlock).css('margin-top', '20px')
        }
        $('#additionalEventsBlock').show()
        this.setAttribute('data-number', +this.getAttribute('data-number') + 1)
    })
}

function registerFormHandler() {
    let competition = $('[name="radio1"]:checked')
    let evType = $('[name="radio2"]:checked')
    let numPlayers = $('[name="radio3"]:checked')
    let evSelect = $('#select')

    if (competition.val() === 'league') {
        $('.registration__form .site-form__price').css('visibility', 'hidden')
        $('.site-form__button button').text('Confirm registration')
    }
    else {
        $('.registration__form .site-form__price').css('visibility', 'visible')
        $('.site-form__button button').text('Checkout')
    }

    if (competition.val() === 'tournament' && evType.val() && evSelect.val() !== 'League’s Name') {
        $('#addEventBtnBlock').show()
        $('#selectEventBlock').show()
    }
    else {
        $('#addEventBtnBlock').hide()
        $('#selectEventBlock').hide()
    }

    if (numPlayers.val() === 'team') {
        $('#addPlayersBtnBlock').show()
        $('#teamMembersBlock').show()
    }
    else {
        $('#addPlayersBtnBlock').hide()
        $('#teamMembersBlock').hide()
    }

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
    //запихнул в цикл чтобы нормально можно было дропдаун в контейнер поставить если у нас несколько таких селектов
    $('.form-select-alt').each(function() {
        console.log($(this).data('placeholder'));
        $(this).select2({
            minimumResultsForSearch: -1,
            dropdownParent: $(this).closest('.form-select-container'),
            dropdownPosition: 'below',
            placeholder: $(this).data('placeholder'),
        })
    });

    $('.footer__item-title').click(function () {
        $(this).toggleClass('open')
    });

    $('.toggle-accordion').click(function () {
        $(this).toggleClass('toggle-accordion--open')
        $(this).next().slideToggle()
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

    initRegisterForm()

    $(".article__nav-link").click(function() {
        $("html").animate(
            {
                scrollTop: $($(this).attr('href')).offset().top - 100
            },
            800
        );
    });
})
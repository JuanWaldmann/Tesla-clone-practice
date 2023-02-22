const fullpageEl = document.getElementById('fullpage')

const menuBtn = document.querySelector('.menu-btn')
const navigation = document.querySelector('.navigation')
const navCloseBtn = document.querySelector('.navigation-close-btn')


const blurOverlay = document.querySelector('.blur-overlay')
const isActive = 'is-active'

const toggleNavigation = () => {
    navigation.classList.toggle(isActive)
    blurOverlay.classList.toggle(isActive)
    fullpageEl.classList.toggle('no-scroll')
}
const click = 'click'

menuBtn.addEventListener(click,toggleNavigation)
navCloseBtn.addEventListener(click,toggleNavigation)
blurOverlay.addEventListener(click,toggleNavigation)


new fullpage('#fullpage', {
    autoScrolling: true, scrollBar: true,
})



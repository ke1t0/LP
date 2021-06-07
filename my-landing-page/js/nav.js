'use strict'

const hamburger = document.getElementById('hamburger-menu')
if (hamburger) {
  hamburger.addEventListener(
    'click',
    function () {
      const target = document.getElementById('nav-contents')
      target.classList.toggle('opened')
    },
    false
  )
}

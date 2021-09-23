const submenus = document.querySelectorAll('ul li ul')
const menu = document.querySelectorAll('.menulink')

// for (let i = 0; i < submenus.length; i++) {
//     submenus[i].className = 'hide-menu'
// }

function hideMenu() {
    submenus.forEach(function (eachMenu) {
        eachMenu.className = 'hide-menu'
    })
}

hideMenu()

menu.forEach(function (eachMenu) {
    eachMenu.addEventListener('click', function (e) {
        e.preventDefault()

        let thisMenu = this.parentNode.querySelector('ul')
        if (thisMenu.classList.contains('hide-menu')) {
            hideMenu()
            thisMenu.classList.remove('hide-menu')
            thisMenu.classList.add('show-menu')
        } else {
            thisMenu.classList.remove('show-menu')
            thisMenu.classList.add('hide-menu')
        }
    })
})

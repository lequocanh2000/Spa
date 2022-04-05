const sidebar = document.querySelector('.js-sidebar')

const btnHeaderMobile = document.querySelector('.js-header-btn-moblie')
const btnHeaderMobileMenu = btnHeaderMobile.querySelector('.js-header-btn-menu')
const headerSearch = document.querySelector('.js-header-search')
const btnSidebarMobile = document.querySelector('.js-sidebar-button-mobile')
const btnSidebarMobileClose = btnSidebarMobile.querySelector('.js-sidebar-button-close')

console.log(sidebar)
console.log(btnHeaderMobile)
console.log(btnHeaderMobileMenu)
console.log(headerSearch)
console.log(btnSidebarMobile)
console.log(btnSidebarMobileClose)


window.addEventListener('load', (e) => {
    const width = window.innerWidth
    if(width >= 1024)
    {
        // Hide btn close and btn menu on PC (> 1024px)
        btnHeaderMobile.classList.add('hide')
        btnSidebarMobile.classList.add('hide')
        console.log(btnHeaderMobile.classList)
        console.log(btnSidebarMobile.classList)
        console.log(headerSearch.classList)
    }
    else
    {
        btnHeaderMobile.classList.remove('hide')
        btnSidebarMobile.classList.remove('hide')

        headerSearch.classList.add('hide')
        sidebar.classList.add('fadeIn')
    }
    console.log(width)
})





sidebar.addEventListener('click', (e)=>{
    e.stopPropagation()
    console.log('click sidebar')
})
btnHeaderMobileMenu.addEventListener('click', (e)=>{
    e.stopPropagation()
    console.log('click menu')
    sidebar.classList.toggle('fadeIn') 
})
btnSidebarMobile.addEventListener('click',(e) => {
    e.stopPropagation()
    console.log('click close')
    sidebar.classList.toggle('fadeIn') 
})

window.onclick = (e)=>{
    const width = window.innerWidth
    if(width < 1024){
        sidebar.classList.add('fadeIn')
        console.log('click window close menu')
    }
}






window.addEventListener('resize', (e) => {
    const width = window.innerWidth
    console.log(width)

    if(width >= 1024)
    {
        btnHeaderMobile.classList.add('hide')
        btnSidebarMobile.classList.add('hide')
        sidebar.classList.remove('fadeIn')
    }
    else
    {
        sidebar.classList.add('fadeIn')
        btnHeaderMobile.classList.remove('hide')
        btnSidebarMobile.classList.remove('hide')
    }
})
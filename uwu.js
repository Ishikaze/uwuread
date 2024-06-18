function extendNav() {
    let extendedNav = document.getElementById('navExtend');
    extendedNav.style.opacity = '1'
    extendedNav.style.pointerEvents = 'all'
}

function retractNav() {
    let extendedNav = document.getElementById('navExtend');
    extendedNav.style.opacity = '0'
    extendedNav.style.pointerEvents = 'none'
}
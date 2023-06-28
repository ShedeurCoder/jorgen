function id(id) {
    return document.getElementById(id)
}
function toggleNav() {
    id('links').classList.toggle("shown");
    if (id('links').classList.contains('shown')) {
        id('open-close').innerHTML = id('open-close').innerHTML.replace('fa-bar', 'fa-time')
    } else {
        id('open-close').innerHTML = id('open-close').innerHTML.replace('fa-time', 'fa-bar')
    }
}
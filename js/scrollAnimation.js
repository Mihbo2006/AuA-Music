let screens = document.getElementsByClassName('screen');

window.onscroll = () => {
    screens.forEach(screen => {
        let top = window.scrollY;
        let offset = screen.offsetTop;
    });
}
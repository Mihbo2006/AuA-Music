let screens = Array.from(document.getElementsByClassName('screen'));

window.onscroll = () => {
    screens.forEach(function(screen){
        let top = window.scrollY;
        let offset = screen.offsetTop - 180;
        let height = screen.offsetHeight;

        if(top >= offset && top < offset + height){
            screen.classList.add('animate');
        }else{
            screen.classList.remove('animate');
        }
    })
}
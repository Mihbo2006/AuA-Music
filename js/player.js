const trackTitle = document.getElementById('trackTitle');

document.getElementByClass('song').onclick(function(){
    Play;
});

function Play(el){
    var track = new Audio(el.getAttribute('data-path'));
    trackTitle.innerHTML = GetNameFromPath(el.getAttribute('data-path'));
    audio.play();
}

function GetNameFromPath(path){
    return filePath.split('/').pop();
}
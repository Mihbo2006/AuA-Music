function Previous() {
    Scroll(-600);  
}
  
function Next() {
  Scroll(600);
}

function Scroll(distance) {
  var container = document.getElementById('carousel')
  container.scrollLeft += distance;
}
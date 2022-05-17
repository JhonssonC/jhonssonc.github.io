window.onload = function exampleFunction() {

    let imgElement = document.querySelector('img[alt="imgZoomeable"]');
    console.log(imgElement.src);
    let fz = document.getElementById("figureZoom");
    fz.style = "background-image: url("+imgElement.src+")";

    fz.onmousemove = function(e){
        var zoomer = e.currentTarget;
        e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
        e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
        x = offsetX/zoomer.offsetWidth*100
        y = offsetY/zoomer.offsetHeight*100
        zoomer.style.backgroundPosition = x + '% ' + y + '%';
    };

}

var slideIndex = 1;
// alert("loaded");
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("slide");
    for (i = 1; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 2000); // Change image every 2 seconds
}
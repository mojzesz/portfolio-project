// OPEN/CLOSE A SIDEBAR

$('.toggle').click(function () {
    $('.sidebar').toggleClass('left1');
    $(this).toggleClass('left2');
});

// GET THE MODAL

var modal = document.getElementById('myModal');

// GET THE <span> ELEMENT THAT CLOSES THE MODAL

var span = document.getElementsByClassName("close")[0];

// WHEN THE USER CLICKS ON <span> (x), CLOSE THE MODAL

span.onclick = function () { 
    modal.style.display = "none";
}

// GET ALL IMAGES AND INSERT THE CLICKED IMAGE INSIDE THE MODAL
// GET THE CONTENT OF THE IMAGE DESCRIPTION AND INSERT IT INSIDE THE MODAL IMAGE CAPTION

var images = document.getElementsByClassName('imgspecial');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var i;
for (i = 0; i < images.length; i++) {
    images[i].onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        modalImg.alt = this.alt;
        captionText.innerHTML = this.nextElementSibling.innerHTML;
    }
}

window.onload = function () {
  var images = document.getElementsByTagName("img");

  for (var i = 0; i < images.length; i++) {
    var image = images[i];
    image.addEventListener("click", hideImage, false);
  }
};

function hideImage (event) {
  event.target.style.visibility = "hidden";
}
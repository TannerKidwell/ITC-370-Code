function changeImage(varImage) { 
    document.getElementById('bigImage').src=varImage;
}

bigImage.addEventListener("dblclick", function() {
    document.getElementById('image1').src='smallerimage4.jpg';
    document.getElementById('image2').src='smallerimage5.jpg';
    document.getElementById('image3').src='smallerimage6.jpg';
    document.getElementById('image4').src='smallerimage7.jpg';
});

bigImage.addEventListener("click", function() {
    document.getElementById('image1').src='LargeImage.jpg';
    document.getElementById('image2').src='smallerimage1.jpg';
    document.getElementById('image3').src='smallerimage2.jpg';
    document.getElementById('image4').src='smallerimage3.jpg';
});
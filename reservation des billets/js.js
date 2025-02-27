var images = ['air.jpg', 'mallorka.jpg', 'BEACH.jpg','about.jpg','ab.jpg']; // Ajoutez les chemins de vos images ici
var i= 0;


function changeImage() {
    var img = document.getElementById('change'); // l'appel de id de photos//
    img.style.opacity = 0;
    setTimeout(function() {
        // Changer l'image lorsque l'opacité est à 0
        i = (i + 1) % images.length;
        img.src = images[i];

        // Ramener l'opacité à 1 pour afficher la nouvelle image
        img.style.opacity = 1;
    }, 500); 
}
setInterval(changeImage,3500);


/* Index Page, Categories */
function redirectToPage(pageUrl) {
    window.location.href = 'shop.html';
}


/* Shop Page, Flaoting Menu*/
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const floatingMenu = document.querySelector('.floating-menu');

    menuToggle.addEventListener('click', function() {
        floatingMenu.classList.toggle('active');
    });
});

/* Product Page */
document.addEventListener('DOMContentLoaded', function() {
    const productDisplay = document.querySelector('.product-display');
    const productImage = productDisplay.querySelector('.product-image');
    const prevButton = productDisplay.querySelector('.prev-button');
    const nextButton = productDisplay.querySelector('.next-button');
    
    const images = [
      'images/product/p1.png',
      'images/product/p1var/p1a.png',
      'images/product/p1var/p1b.png',
      'images/product/p1var/p1c.png'
    ];
    
    let currentImageIndex = 0;
    
    function updateImage() {
      productImage.src = images[currentImageIndex];
    }
    
    prevButton.addEventListener('click', function() {
      currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
      updateImage();
    });
    
    nextButton.addEventListener('click', function() {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      updateImage();
    });
    
    updateImage();
  });
  
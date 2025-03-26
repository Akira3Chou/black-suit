var grid = document.querySelector('.masonry-grid');
var msnry;

imagesLoaded( grid, function() {
  // init Isotope after all images have loaded
  msnry = new Masonry( grid, {
    itemSelector: '.masonry-grid-item',
    columnWidth: '.masonry-grid-sizer',
    horizontalOrder: true
  });
});

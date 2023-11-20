let departmensButton = document.querySelector(".header_main_selector_buton");
let options = document.querySelector(".header_main_selector_options");

departmensButton.addEventListener("click", function () {
  options.classList.toggle("none");
});


// init Isotope
var $salam = $('.salam').isotope({
  // options
});
// filter items on button click
$('.filter-button-group').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $salam.isotope({ filter: filterValue });
});


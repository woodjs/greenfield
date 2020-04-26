let owl = $('.owl-carousel');
owl.owlCarousel({
  loop: true,
  nav: true,
  smartSpeed: 1000,
  margin: 0,
  items: 1
});
let logo = $('.menu-logo'),
  countPage = 5, //кол-во слайдов(страниц)
  selectPage = 1; //Текущий слайд
owl.on('mousewheel', '.owl-stage', function (e) {
  let delta = e.originalEvent.deltaY;
  if (delta > 0) {
    owl.trigger('next.owl');
    selectPage++;
  } else {
    owl.trigger('prev.owl');
    selectPage--;
  }
  if (selectPage > countPage) {
    selectPage = 1;
  }
  if (selectPage < 1) {
    selectPage = countPage;
  }
  if (selectPage > 1) {
    logo.addClass('menu-logo__green');
  } else {
    logo.removeClass('menu-logo__green');
  }
  e.preventDefault();
});
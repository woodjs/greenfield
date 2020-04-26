window.onload = () => {
  let burger = document.querySelector('.menu-burger');

  burger.addEventListener('click', function() {
    this.classList.toggle('menu-burger__active');
    let menu_block = document.querySelector('.popup');
    if (this.classList.contains('menu-burger__active')) {
      menu_block.classList.add('popup__active');
    } else {
      menu_block.classList.remove('popup__active');
    }
  });
}
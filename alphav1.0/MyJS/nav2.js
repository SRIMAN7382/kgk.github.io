function activateCard(card) {
  var cards = document.querySelectorAll('.card');
  for (var i = 0; i < cards.length; i++) {
    cards[i].classList.remove('active');
  }
  if(card.classList.contains('active')){
    card.classList.remove('active')
  }
  else{
    card.classList.add('active');
  }
  
  }

const btn_menu = document.querySelector(".btn-menu");
  const side_bar = document.querySelector(".sidebar");

  btn_menu.addEventListener("click", function () {
    side_bar.classList.toggle("expand");
    changebtn();
  });

  function changebtn() {
    if (side_bar.classList.contains("expand")) {
      btn_menu.classList.replace("bx-menu", "bx-menu-alt-right");
    } else {
      btn_menu.classList.replace("bx-menu-alt-right", "bx-menu");
    }
  }

  window.onscroll = () =>{
    var cards = document.querySelectorAll('.card');
    for (var i = 0; i < cards.length; i++) {
      cards[i].classList.remove('active');
    }
}
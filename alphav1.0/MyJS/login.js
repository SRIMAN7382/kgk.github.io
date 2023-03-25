const mainSection = document.querySelector('#main-section');

function toggleForm(){
    var container = document.querySelector('.container');
    container.classList.toggle('active');
    if (container.classList.contains('active')) {
        mainSection.style.background = 'linear-gradient(to bottom left, #ffa500, #ff1493)';
      } else {
        mainSection.style.background = 'linear-gradient(to bottom right, #ff1493, #ffa500)';
      }
}
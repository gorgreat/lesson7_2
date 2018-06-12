window.addEventListener('DOMContentLoaded', function() {

  function tic() {
    let date = new Date(),
      hours = date.getHours(), 
      minutes = date.getMinutes(),
      seconds = date.getSeconds(),
      curentTime = document.querySelector('.curent_time');

    curentTime.textContent = addZero(hours) + ':' + addZero(minutes) + ':' + addZero(seconds);

    setInterval(tic, 1000);
  };

  
  function addZero(num) {
    return ('0' + num).slice(-2); // обрезает 2 ненужных символа
  }
  
  tic();
  
});




function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

var activeElement = false;

window.onscroll = function(){
   document.querySelectorAll('.js--section-toy-build').forEach(function (element) {
    if(isInViewport(element)){
      if(activeElement == false){
        activeElement = true;
        element.querySelectorAll('.js-number-wrapper').forEach(function(e){
          let number = parseInt(e.dataset.number);
          var options = {
            useEasing : false,
            useGrouping : false
            };
          var demo = new CountUp(e, 0, number,0, 1, options);
          demo.start();
        });
      }
    }else{
      activeElement = false;
    }
  })
}
window.onscroll = function(){
  let scrollPosition = window.pageYOffset,
      headerHeight = document.querySelector("#shopify-section-header").offsetHeight;
  document.querySelectorAll('.js-make-scroll-to-sticky').forEach(function (element) {
    let elementPosition = element.getBoundingClientRect(),
        top = elementPosition.top - headerHeight,
        bottom = elementPosition.bottom - headerHeight;
    (top <= 0 && bottom > 0) ? 
      (
        element.classList.add('js-sticky-enabled'),
        ((window.matchMedia('(max-width:989px)').matches == true) ? document.querySelector("#MainContent").classList.remove('overflow-hidden'): false)
      ) 
    : (bottom <= 0 || top > 0) ? 
      (
        element.classList.remove('js-sticky-enabled'),
        ((window.matchMedia('(max-width:989px)').matches == true) ? document.querySelector("#MainContent").classList.add('overflow-hidden') : false)
      ) : false;
  });
}
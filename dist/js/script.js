

  const toggleButton = document.getElementById('toggleButton');
  const toggleKnob = document.getElementById('toggleKnob');
  const monthlyText = document.getElementById('monthlyText');
  const yearlyText = document.getElementById('yearlyText');
  let isOn = false;

  const monthlyPrices = document.querySelectorAll('[id^="monthlyPrice"]');
  const yearlyPrices = document.querySelectorAll('[id^="yearlyPrice"]');

  toggleButton.addEventListener('click', () => {
    isOn = !isOn;

    if (isOn) {
      toggleKnob.style.transform = 'translateX(100%)';
      yearlyText.classList.replace('text-gray-600', 'text-white');
      monthlyText.classList.replace('text-white', 'text-gray-600');
      
      // Change font size and boldness
      yearlyPrices.forEach(price => {
        price.classList.replace('text-gray-400', 'font-bold');
        price.style.fontSize = '20px';
      });
      monthlyPrices.forEach(price => {
        price.classList.replace('font-bold', 'text-gray-400');
        price.style.fontSize = '12px';
      });
    } else {
      toggleKnob.style.transform = 'translateX(0)';
      monthlyText.classList.replace('text-gray-600', 'text-white');
      yearlyText.classList.replace('text-white', 'text-gray-600');
      
      // Reset font size and boldness
      monthlyPrices.forEach(price => {
        price.classList.replace('text-gray-400', 'font-bold');
        price.style.fontSize = '20px';
      });
      yearlyPrices.forEach(price => {
        price.classList.replace('font-bold', 'text-gray-400');
        price.style.fontSize = '12px';
      });
    }
  });



  document.getElementById('toggle-btn').addEventListener('click', function() {
      const infoText = document.getElementById('info-text');
      if (infoText.classList.contains('collapsed')) {
          infoText.classList.remove('collapsed');
          infoText.classList.add('expanded');
      } else {
          infoText.classList.add('collapsed');
          infoText.classList.remove('expanded');
      }
  });


  //hamburger
  const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-bar');

  hamburger.addEventListener('click',function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
  });

  //navbar fixed
  window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};
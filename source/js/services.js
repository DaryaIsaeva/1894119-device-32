const services = document.querySelector('.services');

const servicesButtons = services.querySelectorAll('.services-button');
const servicesDescriptions = services.querySelectorAll('.services-item-description');

servicesButtons.forEach((servicesButton, index) => {
  servicesButton.addEventListener('click', (evt) => {
    for (let button of servicesButtons) {
      button.classList.remove('services-button--current');
    }
    evt.target.classList.add('services-button--current');

    for (let description of servicesDescriptions) {
      description.classList.remove('services-item-description-current');
    };
    servicesDescriptions[index].classList.add('services-item-description-current');
  });
});

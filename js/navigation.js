const navigation = document.querySelector('.header-catalog');

const navigationLink = navigation.querySelector('.navigation-catalog');

const subcatalog = navigation.querySelector('.subcatalog');

navigation.addEventListener('mouseover', () => {
  subcatalog.classList.add('subcatalog--active');
  navigationLink.classList.add('navigation-catalog--active');
});

navigation.addEventListener('mouseout', () => {
  subcatalog.classList.remove('subcatalog--active');
  navigationLink.classList.remove('navigation-catalog--active');
});

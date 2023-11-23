document.getElementById('lastModified').innerHTML = document.lastModified;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
  if (window.innerWidth <= 768) {
    if (navigation.style.display === 'none') {
      navigation.style.display = 'block';
    } else {
      navigation.style.display = 'none';
    }
  }
});


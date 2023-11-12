document.getElementById('lastModified').innerHTML = document.lastModified;

function toggleNav() {
  var nav = document.getElementById('main-nav');
  nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
}

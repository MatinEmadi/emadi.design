

const links = document.querySelectorAll('.names a');

links.forEach(link => {
  link.addEventListener('mouseover', function() {
    links.forEach(link => {
      link.style.opacity = '0.2';
      link.style.color = 'white';
    });
    this.style.opacity = '1';
    this.style.color = 'white';
  });

  link.addEventListener('mouseout', function() {
    links.forEach(link => {
      link.style.opacity = '1';
      link.style.color = '';
    });
  });
});


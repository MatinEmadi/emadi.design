

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

const fade = Vue.component('fade', {
  template: '#page',
	methods: {
		enter(el, done) {
			TweenMax.fromTo(el, 1, {
				autoAlpha: 0,
				scale: 1.5,
			}, {
				autoAlpha: 1,
				scale: 1,
				transformOrigin: '50% 50%',
				ease: Power4.easeOut,
				onComplete: done
			});
		},
		leave(el, done) {
			TweenMax.fromTo(el, 1, {
				autoAlpha: 1,
				scale: 1,
			}, {
				autoAlpha: 0,
				scale: 0.8,
				ease: Power4.easeOut,
				onComplete: done
			});
		}
	}
})



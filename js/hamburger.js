// Source: https://www.cssscript.com/basic-hamburger-toggle-menu-css-vanilla-javascript/

(function(){

	var hamburger = {
		hamToggle: document.querySelector('.ham-toggle'),
		nav: document.querySelector('nav'),

		doToggle: function(e) {
			e.preventDefault();
			this.hamToggle.classList.toggle('expanded');
			this.nav.classList.toggle('expanded');
		}
	};

	hamburger.hamToggle.addEventListener('click', function(e){ 
		hamburger.doToggle(e); 
	});

}());

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




var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
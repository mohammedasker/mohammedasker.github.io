let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");
// toggle drop down menu
navBarToggle.addEventListener("click", function() {
	mainNav.classList.toggle("active");
});
// toggle the menu bar
function myFunction(toggleMenu) {
	toggleMenu.classList.toggle("change");
}

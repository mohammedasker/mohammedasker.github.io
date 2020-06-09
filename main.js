// Toggle the menu bar when it's clicked
function openNav() {
	document.getElementById("navbar").style.height = "100%";
}

function closeNav() {
	document.getElementById("navbar").style.height = "0%";
}

// Close the menu when the menu links are clicked
document.querySelector(".homeMenu").addEventListener("click", function () {
	document.getElementById("navbar").style.height = "0%";
});

document.querySelector(".aboutMenu").addEventListener("click", function () {
	document.getElementById("navbar").style.height = "0%";
});

document.querySelector(".skillsMenu").addEventListener("click", function () {
	document.getElementById("navbar").style.height = "0%";
});

document.querySelector(".projectMenu").addEventListener("click", function () {
	document.getElementById("navbar").style.height = "0%";
});

document.querySelector(".contactMenu").addEventListener("click", function () {
	document.getElementById("navbar").style.height = "0%";
});

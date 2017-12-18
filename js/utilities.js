// https://www.w3schools.com/howto/howto_js_tabs.asp

var selector = '.nav-tabs a';

/* Creating navigation via HTML DOM innterHTML properties */
document.getElementById("navMenuIndex").innerHTML =
	`
	<!-- Use https://w3schools.com/howto/howto_js_topnav_responsive.asp -->
	<div class="nav-tabs" id="nav">
		<a class="active" href="index.html">Home</a>
		<a href="./pages/motto.html">Motto</a>
		<a href="#">Projects / Research</a>
		<a href="./pages/academics.html">Academics</a>
		<a href="./pages/contact.html">Contact</a>
	</div>`
document.getElementById("navMenu").innerHTML =
	`<div class="nav-tabs" id="nav">
	<a href="../index.html">Home</a>
	<a href="motto.html">Motto</a>
	<a href="#">Projects / Research</a>
	<a href="academics.html">Academics</a>
	<a class="active" href="contact.html">Contact</a>
	</div>`


$(selector).click(function(){
	$(selector).removeClass('active');
	$(this).addClass('active');
});
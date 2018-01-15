// https://www.w3schools.com/howto/howto_js_tabs.asp

var selector = '.nav-tabs a';

try {
	/* Creating navigation via HTML DOM innterHTML properties */
	document.getElementById("navMenuIndex").innerHTML =
	`
	<!-- Use https://w3schools.com/howto/howto_js_topnav_responsive.asp -->
	<div class="nav-tabs" id="nav">
		<a class="active" href="index.html">Home</a>
		<a href="./pages/motto.html">Motto</a>
		<a href="./pages/research.html">Projects / Research</a>
		<a href="./pages/contact.html">Contact</a>
	</div>`;
}
catch(err) {
	/* Create navigation for non-index pages*/
	document.getElementById("navMenu").innerHTML =
	`
	<div class="nav-tabs" id="nav">
		<a href="../index.html">Home</a>
		<a id="Motto" href="motto.html">Motto</a>
		<a id="Research" href="research.html">Projects / Research</a>
		<a id="Contact" href="contact.html">Contact</a>
	</div>
	`;

	var text = document.getElementsByTagName("title")[0]['innerHTML'];
	document.getElementById(text).className += 'active';
}

/* Setting up links at footer */
document.getElementsByClassName("footer")[0]['innerHTML'] = 
	`
	<a class="soc soc-initial-color soc-linkedin soc-icon-last" href="#"></a>
	<a class="soc soc-initial-color soc-github soc-icon-last" href="#"></a>
	<a class="icon-ext soc-initial-color icon-ladodgers soc-icon-last" href="#"></a>
	<a class="icon-ext2 soc-initial-color icon-caltech soc-icon-last" href="#"></a>
	`;



// $(selector).click(function(){
// 	$(selector).removeClass('active');
// 	$(this).addClass('active');
// });
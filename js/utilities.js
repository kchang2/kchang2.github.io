// https://www.w3schools.com/howto/howto_js_tabs.asp

var selector = '.nav-tabs a';

$(selector).click(function(){
	$(selector).removeClass('active');
	$(this).addClass('active');
});

// $.get("./pages/navigation.html", function(data) {
// 	$("#nav-placeholder").replaceWwith(data);
// });


// $(function(){
// 	$('#nav-placeholder').load('../pages/navigation.html');
// });
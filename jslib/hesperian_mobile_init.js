// hesperian_mobile_init.js
// This is loaded before jquery mobile so you can set up jqm initialization.
// jquery itself is available.

// iPhone / Mobile Safari workarounds
function isiPhone(){
    return ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)));
};

$(document).bind("mobileinit", function(){
	$.mobile.defaultTransition = "none";
	//$.mobile.hashListeningEnabled = false;
});

$("div:jqmData(role='page')").live('pagebeforecreate',function(event){

	$("div.sequence-bar",this).each(function(index) {
		var seq_length = $(this).attr("seq-length");
		var seq_position = $(this).attr("seq-position");
		var pos = 0;
		//$("div.sequence-dots",this).empty();
		while (pos < seq_length) {
			if (pos + 1 == seq_position) {
				$("div.sequence-dots",this).append('<div class="circle active"></div>');
			} else {
				$("div.sequence-dots",this).append('<div class="circle"></div>');
			}
			pos++;
		}
		$("a.seq-nav-button",this).each(function(index,el) {
			if (el.href == "javascript:;") {
				$(el).addClass("hidden").attr("disabled",true);
			}
		});

	});

});

//binds swipe events to the specified elements and maps them to clicks on the previous and next links based on them having the appropriate class
function swipeToClick(el) {
	//console.log("swiper");
	$(el).bind("swiperight swipeleft", function(event) {
		//console.log($("a.seq-nav-button-left:first",this));
		event.preventDefault();
		if (event.type == "swipeleft") {
			//$("a.seq-nav-button-right:first:not(:disabled)",this).click();
			var href = $("a.seq-nav-button-right:first",this).attr("href");
			if (href != "javascript:;")
				$.mobile.changePage(href,"none");
		}
		else if (event.type == "swiperight") {
			//$("a.seq-nav-button-left:first:not(:disabled)",this).click();
			var href = $("a.seq-nav-button-left:first",this).attr("href");
			//console.log(href);
			if (href != "javascript:;")
				$.mobile.changePage(href,"none");
		}
		
	});
}

//swiping would need to be selectively added to pages where we wanted it
$("div:jqmData(role='page')").live("pagecreate",function(event) {
	//console.log(this);
	var page = $(this);
	//pass page to bind swipe after filtering it for pages containing a div with class sequence bar, this identifies that swiping is to be enabled.
	//console.log(page.attr("swipe"));
	if (page.attr("swipe") == "true")
		swipeToClick(page);
});

// jquery mobile configuration

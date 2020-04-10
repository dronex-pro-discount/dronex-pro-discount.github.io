var share = {
	showPopup : function(url){
		var width = 600;
		var height = 400;
		var poswidth = window.screen.width / 2 - width / 2;
		var posheight = window.screen.height / 2 - height / 2;
		window.open(url, '', 'menubar=no,toolbar=no,resizable=no,scrollbars=yes,height=' + height + ',width=' + width + ',left=' + poswidth + ',top=' + posheight);
	}
}

var url = location.href;
var title = $('title').text();
$('.btn-transparent-f').on('click',function(){
	share.showPopup('https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(url));
});

$('.btn-transparent-t').on('click',function(){
	share.showPopup('https://twitter.com/intent/tweet/?text='+encodeURIComponent(title)+'&url='+encodeURIComponent(url)+'&via='+location.origin);
});
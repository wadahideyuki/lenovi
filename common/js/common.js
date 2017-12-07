$(document).ready(function(){
//ユーザーエージェントによる振分
var userAgent = window.navigator.userAgent.toLowerCase();
var appVersion = window.navigator.appVersion.toLowerCase();
if(userAgent.indexOf("iphone") > -1){}
if(userAgent.indexOf("android") > -1){}


//ヘッダーのメニュー
$(".header .navTab a").click(function(){
	if($(this).hasClass("show")){
		$(".header .navTab a").removeClass("show");
		$(".header .navMenu").slideUp();
	}else{
		var no = $(this).parent().attr("class").replace("navTab ", "");
		$(".header .navTab a").removeClass("show");
		$(this).addClass("show");
		$(".header .navMenu").slideUp();
		$(".header .navMenu." + no).slideDown();
	}
	return false;
});

//SPでのヘッダーのメニューの第二階層アコーディオン
$(".header .navMenus dt").click(function(){
	var winW = $(window).width();
	if(winW <= 767){
		$(this).toggleClass("opn");
		$(this).next("dd").slideToggle();
	}
	return false;
});

//SPでのフッターのメニュー
$(".ftNav dt").click(function(){
	var winW = $(window).width();
	if(winW <= 767){
		$(this).toggleClass("opn");
		$(this).next("dd").slideToggle();
	}
	return false;
});



//SPでタブをアコーディオン
$(".spAcrdBtnOC").click(function(){
	$(".spAcrdBox").slideToggle();
	return false;
});

//クリックスクロール
	function clkScrl(btn, pos){
		btn.click(function(){
			var href= $(this).attr("href");
			var target = $(href == "#" || href == "" ? 'html' : href);
			var position = target.offset().top;
			$("body, html").animate({scrollTop:position-pos}, 400, 'swing');
			return false;
		});
	}
	clkScrl($(".clkScrl"), 0);


});//DocRdyFncEnd

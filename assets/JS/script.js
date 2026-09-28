$(function() {
//スクロール
$(window).on('load scroll resize', function() {
	var functionScroll = $(window).scrollTop();
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	var header = $('.header');
	var headerHeight = header.outerHeight();
	var content = $(".top__function-flex");
	var contentHeight = content.outerHeight();
	var contentTop = content.offset().top;
	var contentEnd = contentTop + contentHeight;
	var side = $(".top__function-head");
	var sideHeight = side.outerHeight();
	//主な機能ナビゲーション追従
	if (functionScroll > (contentEnd - sideHeight)) {
		side.css({
			'position': 'absolute',
			'top': 'auto',
			'bottom': '0',
			'padding-top': '0',
		});
	} else if (functionScroll > contentTop) {
		side.css({
			'position': 'fixed',
			'top': '0',
			'bottom': 'auto',
			'padding-top': '90px',
		});
	} else {
		side.css({
			'position': 'absolute',
			'top': '0',
			'bottom': 'auto',
			'padding-top': '0',
		});
	}

	//主な機能ナビゲーション矢印
	$('.top__function-item').each(function (i) {
		var itemTop = $(this).offset().top;
		var itemId = $(this).attr('id');
		if (functionScroll > itemTop - (windowHeight / 4)) {
			$(".top__function-nav_link").removeClass("is_active");
			var navLink = $(".top__function-nav_link[href *= " + itemId +"]");
			$(navLink).addClass("is_active");
		}
	});

	//ヘッダー
	if (functionScroll > headerHeight) {
		header.addClass('scrolled');
	} else{
		header.removeClass('scrolled');
	}

	//フェードイン
	$('*[data-animation="false"]').each(function () {
		var ePos = $(this).offset().top;
		if(windowWidth => 684){
			if (functionScroll > ePos - windowHeight + windowHeight / 5) {
	  		$(this).attr('data-animation','true');
			}
		}else{
			if (functionScroll > ePos - windowHeight + windowHeight / 5) {
	  		$(this).attr('data-animation','true');
			}
		}
	});
});


//スムーススクロール
$('.top__function-nav_link').click(function(){
		var thisWindowWidth = $(window).width();
		if(thisWindowWidth > 1024){
			var headerbar = 60;
			var href= $(this).attr("href");
			var target = $(href == "#" || href == "" ? 'html' : href);
			var position = target.offset().top - headerbar;
			$("html, body").animate({
				scrollTop:position
			}, 1000, "swing");
			return false;
		} else {
			var headerbar = 0;
			var href= $(this).attr("href");
			var target = $(href == "#" || href == "" ? 'html' : href);
			var position = target.offset().top - headerbar;
			$("html, body").animate({
				scrollTop:position
			}, 1000, "swing");
			return false;
		}
});

//ローディング
// $('.loading__logo').addClass('active');
// setTimeout(function(){
// 	$('.loading').fadeOut(1000);
// 	$('body').addClass('loaded');
// },3200);
 	$('body').addClass('loaded');

//ハンバーガーメニュー
$(".drawer").drawer();
$('.drawer-menu a').on('click', function() {
	$('.drawer').drawer('close');
	var speed = 1000;
	var headerbar = 0;
	var href= $(this).attr("href");
	var target = $(href == "#" || href == "" ? 'html' : href);
	var position = target.offset().top - headerbar;
	$("html, body").animate({scrollTop:position}, 1000, "swing");
	return false;
});

});

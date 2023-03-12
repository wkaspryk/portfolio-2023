window.onload = function(){
	window.onscroll = function(){
		if(screen.width >= 800) {
			if(window.scrollY>0){
				document.getElementById('header').style.height='155px';
				document.getElementById('header').style.opacity='.3';
			}else{
				document.getElementById('header').style.height='80vh';
				document.getElementById('header').style.opacity='1';
			}
		}
		if(window.pageYOffset>0) {
			$(".sticky").addClass("active");
		}
		else {
			$(".sticky").removeClass("active");
		}
	}

//smooth scrolling
	$(document).ready(function(){
		$('.sticky a').on('click', function(ev) {
			if (this.hash !== "") {
				event.preventDefault();
				var hash = this.hash;
				$('html, body').animate({
					scrollTop: $(hash).offset().top - 50
				}, 800);
			}
		});
	});
}

var $animation_elements = $('.img');
var $window = $(window);

function check_if_in_view() {
	var window_height = $window.height();
	var window_top_position = $window.scrollTop();
	var window_bottom_position = (window_top_position + window_height);

	$.each($animation_elements, function () {
		var $element = $(this);
		var element_height = $element.outerHeight();
		var element_top_position = $element.offset().top;
		var element_bottom_position = (element_top_position + element_height);

		//check to see if this current container is within viewport
		if ((element_bottom_position >= window_top_position) &&
			(element_top_position <= window_bottom_position)) {
			$element.addClass('in-view');
		} 
	});
}
$window.on('scroll', check_if_in_view);

//dynamic header background image
function randomImage(){
	var images = [
		'header-imgs/1.jpg',
		'header-imgs/2.jpg',
		'header-imgs/3.jpg',
		'header-imgs/4.jpg',
		'header-imgs/5.jpg'];
	var size = images.length;
	var x = Math.floor(size * Math.random());
	console.log(x);
	var element = document.getElementById('header');
	element.style["background-image"] = "url("+ "header-imgs/" + [x] + ".jpg)";
  }
  
  document.addEventListener("DOMContentLoaded", randomImage);

  // popup js
$('.work-animation').click(function () {
    $('body').toggleClass('popup-open');
    $('.sticky').toggleClass('active');
    var clicked = $(this).find("#popup-work").attr("class");
    var activePopup = $(".popup div" + "." + clicked);
    $(".popup div").removeClass("popup-active");     
    $(activePopup).toggleClass("popup-active");
});
$('.popup-bg').click(function () {
    $('.sticky').addClass('active');
});
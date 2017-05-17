$(document).ready(function(){
	$('.js-scrollTo').on('click',function(){
		var page=$(this).attr('href');
		var speed=700;
		$('html,body').animate({scrollTop:$(page).offset().top},speed);
		return false;
	});
});

$(function()
{
		$('.menuBurger').click(function()
		{
			$('.hiddenMenu').addClass('hiddenMenu-opened');
		}
	);
});

$(function()
{
		$('.closeMenu').click(function()
		{
			$('.hiddenMenu').removeClass('hiddenMenu-opened');
		}
	);
});
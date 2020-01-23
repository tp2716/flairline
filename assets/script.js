$(document).ready(function(){
	$("#title").css('opacity', 0)
	$("#nav").css('opacity', 0)
	$("#cont").css('opacity', 0)
	$("#title").animate(
		{opacity: 1},
		{queue: false, duration:1000}
	);
	$("#nav").animate(
		{opacity: 1},
		{queue: false, duration:1500}
	);
	$("#cont").animate(
		{opacity: 1},
		{queue: false, duration:2000}
	);
});

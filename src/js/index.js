$(document).ready(function(){
	$('#preloader').fadeOut('slow');
	new WOW().init();
	$("#navig").on("click","a", function (event) {
					event.preventDefault();
					var id  = $(this).attr('href'),
							top = $(id).offset().top;
					$('body,html').animate({scrollTop: top}, 1500);
			});
	$(".scroll").on("click","a", function (event) {
					event.preventDefault();
					var id  = $(this).attr('href'),
							top = $(id).offset().top;
					$('body,html').animate({scrollTop: top}, 1500);
			});
	
	$(function() {
				setInterval(function() {
					var animationName = 'animated pulse';
					var animationend = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
					$('.scrImg').addClass(animationName).one(animationend, function() {
						$(this).removeClass(animationName);
					});
				}, 3000);
	 });
	
	if($(window).width()<1280){
	$(".owl-carousel").owlCarousel({
			items:4,
			autoplay:true,
			dots:true,
			autoplaySpeed:1000,
			autoplayTimeout:4000,
			loop:true,
			responsiveClass:true,
			responsive:{
			 
					1280:{
							items:2,
							nav:false,
							dots:true,
							loop:true
					},
					781:{
							items:2,
							nav:false,
							dots:true,
							loop:true
					},
					780:{
							items:1,
							nav:false,
							dots:true,
							loop:true
					},
					570:{
							items:1,
							nav:false,
							dots:true,
							loop:true
					},
					320:{
							items:1,
							nav:false,
							dots:true,
							loop:true
					}
			}
	
		});
	};
	
	
	
	});
	$("#navToggle").click(function() {
			$(this).toggleClass("active");
			$(".overlay").toggleClass("open");
			// this line ▼ prevents content scroll-behind
			$("body").toggleClass("locked"); 
	});
	$(".menu>li").click(function() {
			$(this).toggleClass("active");
			$(".overlay").toggleClass("open");
			// this line ▼ prevents content scroll-behind
			$("body").toggleClass("locked"); 
	});

	function initMap() {
					// Styles a map in night mode.
					var pos ={lat:50.444607 , lng:30.509784};
				 
					var myMap = new google.maps.Map(document.getElementById("map"), {
						center: pos,
						zoom: 17,
						styles: [
							{elementType: 'geometry', stylers: [{color: '#282828'}]},
							{elementType: 'labels.text.stroke', stylers: [{color: '#fff'}]},
							{elementType: 'labels.text.fill', stylers: [{color: '#ffffff'}]},
							{
								featureType: 'administrative.locality',
								elementType: 'labels.text.fill',
								stylers: [{color: '#ffffff'}]
							},
							{
								featureType: 'poi',
								elementType: 'labels.text.fill',
								stylers: [{color: '#ffffff'}]
							},
							{
								featureType: 'poi.park',
								elementType: 'geometry',
								stylers: [{color: '#282828'}]
							},
							{
								featureType: 'poi.park',
								elementType: 'labels.text.fill',
								stylers: [{color: '#ffffff'}]
							},
							{
								featureType: 'road',
								elementType: 'geometry',
								stylers: [{color: '#383838'}]
							},
							{
								featureType: 'road',
								elementType: 'geometry.stroke',
								stylers: [{color: '#000'}]
							},
							{
								featureType: 'road',
								elementType: 'labels.text.fill',
								stylers: [{color: '#fff'}]
							},
							{
								featureType: 'road.highway',
								elementType: 'geometry',
								stylers: [{color: '#383838'}]
							},
							{
								featureType: 'road.highway',
								elementType: 'geometry.stroke',
								stylers: [{color: '#3838381f2835'}]
							},
							{
								featureType: 'road.highway',
								elementType: 'labels.text.fill',
								stylers: [{color: '#fff'}]
							},
							{
								featureType: 'transit',
								elementType: 'geometry',
								stylers: [{color: '#282828'}]
							},
							{
								featureType: 'transit.station',
								elementType: 'labels.text.fill',
								stylers: [{color: '#ffffff'}]
							},
							{
								featureType: 'water',
								elementType: 'geometry',
								stylers: [{color: '#004044'}]
							},
							{
								featureType: 'water',
								elementType: 'labels.text.fill',
								stylers: [{color: '#ffffff'}]
							},
							{
								featureType: 'water',
								elementType: 'labels.text.stroke',
								stylers: [{color: '#17263c'}]
							}
						]
					});
			var icon = {
			url: "dist/img/icon.svg", // url
			scaledSize: new google.maps.Size(50, 50), // scaled size
			
	};
	var marker = new google.maps.Marker({
		 position: pos,
		 map: myMap,
		 title:"Київський коледж зв'язку",
		 icon: icon,
		 size: new google.maps.Size(100, 100),
		 animation: google.maps.Animation.DROP,
					});
	 marker.addListener('click', toggleBounce);
				}
			function toggleBounce() {
		if (marker.getAnimation() !== null) {
			marker.setAnimation(null);
		} else {
			marker.setAnimation(google.maps.Animation.BOUNCE);
		}
	}
	
import $ from 'jquery';
import whatInput from 'what-input';
window.$ = $;
import Foundation from 'foundation-sites';
// import ScrollMagic from 'scrollmagic';
// import TweenMaxوTimelineMax from 'gsap';


$(document).foundation();
	

// $(function(){

// 	// Init scrollMagic 
// 	var controller = new ScrollMagic.Controller();
// 	// Scene 1 - Pin the second Section
// 	var pinScene01 = new ScrollMagic.Scene({
// 		triggerElement : '#slide01',
// 		triggerHook : 0,
// 		duration : '100%'
// 	})
// 	.setPin('#slide01 .pin-wrapper')
// 	.addTo(controller)

// 	//Scene 2 - Pin the third Section 

// 	var pinScene02 = new ScrollMagic.Scene({
// 		triggerElement : '#slide02',
// 		triggerHook : 0,
// 		duration : '200%'
// 	})
// 	.setPin('#slide02 .pin-wrapper')
// 	.addTo(controller)

// TweenMax.set('#selector',{y:10px}); // to set the height of the element at start
// var somthingMoveToStart = TweenMax.to('#selector',1,{y:0,ease :Linear.easeNone}); // element final position
// ---------------------------------------

// // // Init ScrollMagic 
// var controller = new ScrollMagic.Controller();
// var elementScene = new ScrollMagic.Scene({
// 	triggerElement :'#section1',
// 	triggerHook : 0,
// // 	offset : ,
// 	duration : '100%'
// })
// // // .setPin('#selector')
// .setTween(startTweens)
// .addIndicators()
// .addTo(controller)
// ---------------------------------------
// var controller = new scrollMagic.Controller({vertical:false});
// var tween = TweenMax.to('#');
// $('#section1').on('scroll',function(){
// 		function startTweens(){
// 	// var $animatedItem = $('#logo-wrapper');
// 	var $animatedItem = '.section__image-wrapper';
// 	TweenLite.to('.section__image-wrapper',2,{width : "100%"});
// 	TweenLite.to('#pluggedWire',1.7,{ x : '48.5%' });
// }
	// });
		// startTween();


			


		// $(window).on('load', function(){
			
		// });
							 // ('selector',time,newPosition)
// function startTween(){
// 	// var $animatedItem = $('#logo-wrapper');
// 	var $animatedItem = '.section__image-wrapper';
// 	TweenLite.to('.section__image-wrapper',2,{width : "100%", onComplete : returnToNormal, onCompleteParams : [$('.section__image-wrapper')],delay:1 });
// 	TweenLite.to('#pluggedWire',1.7,{ delay:1, x : '48.5%' });
// }
// function returnToNormal(obj){
// 	TweenLite.to(obj,2,{width : "0%"});
// }




// Section 2 
// function deviceAnimation(){
// 	var devicesTimeline = new TimelineMax();
// 	var duration = 2;
// 	devicesTimeline.from($('#iMac'),duration,{left : '-100%' ,ease : Linear.easeInOut});
// 	devicesTimeline.from($('#iPhone'),duration,{left : '-100%' ,ease : Linear.easeInOut},1.7);
	// devicesTimeline.from($('#title'),duration,{opacity : 0,scale:25,ease : Linear.easeInOut});
	// devicesTimeline.to($('#iMac'),duration,{y:"-215%",ease : Back.easeInOut});

	// $('#start').click(function(){
	// 	devicesTimeline.play();
	// });

	// $('#stop').click(function(){
	// 	devicesTimeline.stop();
	// });
	// $('#pause').click(function(){
	// 	devicesTimeline.pause();
	// });
	// $('#reverse').click(function(){
	// 	devicesTimeline.reverse();
	// });







$(window).on('load', function(){

var firstSectionController = new ScrollMagic.Controller();
var firstSectionTimeline = new TimelineMax();
firstSectionTimeline.to('.section__image-wrapper',2,{width : '100%' ,ease : Expo.easeOut});
firstSectionTimeline.to('#pluggedWire',1.5,{x : '48.5%' ,ease : Expo.easeOut},0);
var firstSectionScene = new ScrollMagic.Scene({
				triggerElement : '#section1',
				triggerHook : 0,
				offset:'5',
				reverse: true,
				duration : '200%'
							})
			
			.setPin('#section1')
			// .duration('200%')
			.setTween(firstSectionTimeline)
			.addIndicators({name : 'Wire Animation'})
			.addTo(firstSectionController);




	var secondSectionController = new ScrollMagic.Controller();
	var duration = 1;
	var devicesTimeline = new TimelineMax()
	.from('#iMac',1,{left : '-100%' ,ease : Back.easeOut})
	.from('#iMac_logo',1,{left : '-100%' ,ease : Back.easeOut},"-=1")
	.from('#iPhone',1,{left : '-100%' ,ease : Back.easeOut})
	.from('#iPad',1,{left : '-100%' ,ease : Back.easeOut})
	// .to('#section2',1,{ rotation : '-20deg',ease :Linear.easeOut})
	.to('#iPad',1,{left : '-100%' ,ease : Linear.ease})
	// .to('#iMac',1,{left : '-100%' ,ease : Linear.easeIn})
	.to('#iPhone',1.5,{left : '200%' ,ease : Linear.ease},'-=1')
	.to('#iMac',1,{ top : '75%',width:'102%',height:'151%',ease :Linear.easeOut},"-=1")
	.to('#iMac_logo',1,{ top : '15%',left:'23%',ease :Expo.easeOut},"-=.5")
	.staggerTo('.unplugged__mission',1,{ display : 'block',ease :Expo.easeOut},'.1');

			var scene = new ScrollMagic.Scene({
				triggerElement : '#section2',
				triggerHook : 0,
				reverse: true,
				offset:'0',
				duration : '500%'
							})
			// .setPin('#exp-cont')
			.setPin('#section2')
			.setTween(devicesTimeline)
			.addIndicators({name : 'iMac Animation'})
			.addTo(secondSectionController);


	var thirdSectionController = new ScrollMagic.Controller();
	var egyptTimeline = new TimelineMax()
	.staggerTo('.egypt',3,{ display : 'block',ease : Power0.easeOut},'.3');
	
			var scene = new ScrollMagic.Scene({
				triggerElement : '#section3',
				triggerHook : 0,
				reverse: true,
				offset:'0',
				duration : '200%'
							})
			// .setPin('#exp-cont')
			.setPin('#section3')
			.setTween(egyptTimeline)
			.addIndicators({name : 'egypt Animation'})
			.addTo(thirdSectionController);




var section4Controller = new ScrollMagic.Controller();
	var recipeTimeline = new TimelineMax()
	.from('#coffeeBag',.5,{ top : '150%',ease : Expo.easeOut})
	.from('.coffeeBeans',.5,{ top : '150%',ease : Expo.easeOut},'-=.3')
	.to('#designSave-wrapper',.5,{ display : 'flex',ease : Expo.easeOut})
	.staggerTo('.designSave',.2,{ display : 'block',ease : Expo.easeOut},.1)
	.to('#designSave-wrapper',.1,{ display : 'none',ease : Expo.easeOut})
	.to('#folderName-wrapper,#folder',.1,{ display : 'flex',ease : Expo.easeOut})
	.to('#folderName-wrapper',.1,{ border :'1px solid',ease : Expo.easeOut})
	.staggerTo('.folderName',.2,{ display : 'block',ease : Expo.easeOut},.1)
	.to('#folderName-wrapper',.1,{ border :'0',ease : Expo.easeOut})
	.to('.coffee-wrapper',.5,{ top : '-40%',left:'-43%',scale : '.1',ease : Expo.easeOut},'+=.5')
	.to('.coffee-wrapper',.1,{ display:'none',ease : Expo.easeOut})
	.to('#folderName-wrapper,#folder',.1,{ display : 'none',ease : Expo.easeOut})

	.to('#html',.5,{ display : 'flex',ease : Expo.easeOut})
	.staggerTo('.htmlCup',.2,{ display : 'block',ease : Expo.easeOut},.1)
	.to('#html',.1,{ display : 'none',ease : Expo.easeOut})

	.to('#htmlCup',.5,{ display : 'block',ease : Expo.easeOut})
	.to('#htmlCup',.5,{ left : '45%',ease : Expo.easeOut})
	.to('#htmlCup',.5,{ left : '23%',ease : Expo.easeOut})
	.to('#cssCup',.5,{ display : 'block',ease : Expo.easeOut})
	.to('#jsCup',.5,{ display : 'block',ease : Expo.easeOut})
	.to('#wordpressCup',.5,{ display : 'block',ease : Expo.easeOut})
	.to('#reactCup',.5,{ display : 'block',ease : Expo.easeOut})

	
			var scene = new ScrollMagic.Scene({
				triggerElement : '#section4',
				triggerHook : 0,
				reverse: true,
				offset:'0',
				duration : '100%'
							})
			.setPin('#section4')
			.setTween(recipeTimeline)
			.addIndicators({name : 'PS Animation'})
			.addTo(section4Controller);


















});





















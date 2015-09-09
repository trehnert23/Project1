$(document).ready(function(){

	var counter = 0;
	var score = 0;


function Countdown(countdown) {
	$(".start_button").on("click", function(event) {
		var seconds_left = countdown;
		var interval = setInterval(function() {
		    //make the targets visible && locked
		   document.getElementById('timer_div').innerHTML = --seconds_left;
		   if (seconds_left <= 0 ){
		        //make the targets clickable at 0
		        clearInterval(interval);
		      	$(".target").on("click",function(event) {
		        		$(this).remove();
		        		score++;
		        		console.log(score);
		      	});
		      	$('#timer_div').remove();
		   }
		}, 1000);
	});
}

Countdown(6);


function createTarget() {
	var sizeRand = Math.random()*60+40;
	console.log(sizeRand);
	var leftMargRand = Math.random()*90;
		console.log(leftMargRand);

	var topMargRand = Math.random()*43;
		console.log(topMargRand);

	$(".shooting_gallery").append("<img class='target' src='http://www.cliparthut.com/clip-arts/88/bullseye-target-88907.png'>");
	$(".target").css("width", sizeRand+"px");
	$(".target").css("height", sizeRand+"px");
	$(".target").css("margin-left", leftMargRand+"%");
	$(".target").css("margin-top", topMargRand+"%");
	$(".target").css("position", "absolute");
	
}




	// $(".target1").on("click",function(event) {
 //  		$(this).remove();
 //  		counter++;
	// });

	// $(".target2").on("click",function(event) {
 //  		$(this).remove();
 //  		counter++;
	// });

	// $(".target3").on("click",function(event) {
 //  		$(this).remove();
 //  		counter++;
	// });

	// $(".target4").on("click",function(event) {
 //  		$(this).remove();
 //  		counter++;
	// });

	// $(".target5").on("click",function(event) {
 //  		$(this).remove();
 //  		counter++;
	// });

	// $(".target6").on("click",function(event) {
 //  		$(this).remove();
 //  		counter++;
	// });


	// $(function shuffle() {
	//     var parent = $("#shuffle");
	//     var divs = parent.children();
	//     while (divs.length) {
	//         parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
	//     }
	// })
	// ​

	// $("#reset").click(function(){
	//     location.reload();
	// })

createTarget();
createTarget();
createTarget();
createTarget();
createTarget();
createTarget();




});









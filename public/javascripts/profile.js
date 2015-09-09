$(document).ready(function(){

	var counter = 0;
	var score = 0;
	var numTargs = 6;


function Countdown(countdown) {
	$(".start_button").on("click", function(event) {
		var seconds_left = countdown;
		var interval = setInterval(function() {
		    //make the targets visible && locked
		   document.getElementById('timer_div').innerHTML = --seconds_left;
		   if (seconds_left <= 0 ){
		        clearInterval(interval);
		      	//remove timer numbers
		      	$('#timer_div').remove();
		   
			    function createTarget() {
			    	var sizeRand = Math.random()*60+40;
			    	var leftMargRand = Math.random()*90;
			    	var topMargRand = Math.random()*43;
			    	$(".shooting_gallery").append("<img class='target"+numTargs+"' id='target' src='http://www.cliparthut.com/clip-arts/88/bullseye-target-88907.png'>");
			    	$(".target"+numTargs).css("width", sizeRand+"px");
			    	$(".target"+numTargs).css("height", sizeRand+"px");
			    	$(".target"+numTargs).css("margin-left", leftMargRand+"%");
			    	$(".target"+numTargs).css("margin-top", topMargRand+"%");
			    	$(".target"+numTargs).css("position", "absolute");
			    	numTargs--;
			    }

			    //creates targets
			    while(numTargs>0){
			    	createTarget();
			    }

			    //make targets clickable
	    		$("#target").on("click",function(event) {
	    	  		$(this).remove();
	    	  		score++;
	    	  		console.log(score);
	    		});

		   }
		}, 1000);
	});
}
Countdown(6);


});









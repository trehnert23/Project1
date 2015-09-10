$(document).ready(function(){

	var counter = 0;
	var score = 0;
	var numTargs = 6;
	var timer = 0;


	function createTarget() {
		var sizeRand = Math.random()*60+40;
		var leftMargRand = Math.random()*90;
		var topMargRand = Math.random()*43;
		$(".shooting_gallery").append("<img class='target"+numTargs+" targets' src='http://www.cliparthut.com/clip-arts/88/bullseye-target-88907.png'>");
		$(".target"+numTargs).css("width", sizeRand+"px");
		$(".target"+numTargs).css("height", sizeRand+"px");
		$(".target"+numTargs).css("margin-left", leftMargRand+"%");
		$(".target"+numTargs).css("margin-top", topMargRand+"%");
		$(".target"+numTargs).css("position", "absolute");
		numTargs--;
	}


	function Countdown(countdown) {
		$(".start_button").on("click", function(event) {
			var seconds_left = countdown;
			var interval = setInterval(function() {
			    //make the targets visible && locked
			   document.getElementById('countdown_div').innerHTML = --seconds_left;
			   if (seconds_left <= 0 ){

			   		var player_time = setInterval(function(){
			   			document.getElementById('timer_div').innerHTML = ++timer;
			   		}, 1000);
			      	//remove timer numbers
			      	$('#countdown_div').remove();

				    // creates initial targets
				    while(numTargs>0){
				    	createTarget();
				    }

				    //delete targets when clicked
				    $(".targets").on("click",function(event) {
		    	  		$(this).remove();
		    	  		score++;
		    	  		if(score<6){
		    	  		}
		    	  		else{
		    	  			Round();
		    	  		}
		    	  		numTargs=6;
		    		});
		    		clearInterval(interval);
			   }
			}, 1000);
		});
	}
Countdown(6);



	function Round(){
		while(numTargs>0){
			createTarget();
		}
	    $(".targets").on("click",function(event) {
	  		$(this).remove();
	  		score++;
	  		console.log(score);
	  		if(score===6){
	  			numTargs=6;
	  			console.log("numTargs= ", numTargs);
	  			Round();
	  		}
	  		else if(score===12){
	  			console.log("numTargs= ", numTargs);
	  			numTargs=6;
	  			Round();
	  		}
	  		else if(score===18){
	  			console.log("numTargs= ", numTargs);
	  			numTargs=6;
	  			Round();
	  		}
	  		else if(score===24){
	  			newTime = timer;
	  			$(".scoreboard_right").append(newTime);
	  			// $.get("/profile").done(function (data){
	  			// 	console.log(data);
	  			// 	$(".scoreboard_left").append(data);
	  			// })
	  		}
		});
	}

});









$(document).ready(function(){
	
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



	var counter = 0;

	$(".target1").on("click",function(event) {
  		$(this).remove();
  		counter++;
	});

	$(".target2").on("click",function(event) {
  		$(this).remove();
  		counter++;
	});

	$(".target3").on("click",function(event) {
  		$(this).remove();
  		counter++;
	});

	$(".target4").on("click",function(event) {
  		$(this).remove();
  		counter++;
	});

	$(".target5").on("click",function(event) {
  		$(this).remove();
  		counter++;
	});

	$(".target6").on("click",function(event) {
  		$(this).remove();
  		counter++;
	});

});









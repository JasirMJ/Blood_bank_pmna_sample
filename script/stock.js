
$(document).ready(function(){
	// alert("working");
	$(".details").hide();
	$(".bloodgroups_On").click(function(){
		$(".details").show();
		$(".blood_type").hide();

		alert("clicked O-");
	})

	$(".bloodgroups_An").click(function(){
		alert("clicked A-");
		$(".details").show();
		$(".blood_type").hide();
	})

	$(".bloodgroups_Ap").click(function(){
		alert("clicked A+");
		$(".details").show();
		$(".blood_type").hide();
	})

	$(".bloodgroups_Bn").click(function(){
		alert("clicked B-");
		$(".details").show();
		$(".blood_type").hide();
	})

	$(".bloodgroups_Bp").click(function(){
		alert("clicked B+");
		$(".details").show();
		$(".blood_type").hide();
	})

	$(".bloodgroups_ABn").click(function(){
		alert("clicked AB-");
		$(".details").show();
		$(".blood_type").hide();
	})

	$(".bloodgroups_ABp").click(function(){
		alert("clicked AB+");
		$(".details").show();
		$(".blood_type").hide();
	})

	$(".bloodgroups_Op").click(function(){
		alert("clicked O+");
		$(".details").show();
		$(".blood_type").hide();
	})

})
function test(){
	alert("clicked");
}
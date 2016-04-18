$(document).ready(function(){

	var nextTick = setInterval(function(){

		var time = new Date();
		var hr = time.getHours();
		var min = time.getMinutes();
		var sec = time.getSeconds();
		var ms = time.getMilliseconds();

		$('#hr').text(hr);
		$('#min').text(min);
		$('#sec').text(sec);
		$('#ms').text(ms);



		if (min % 2 === 0) { 
			$("#min").css("color","red")
		} else {
			$("#min").css("color","white")
		}
		// checks the time every millisecond in orderto change the color every minute
		
		arrColor = ["orange", "purple", "yellow", "green"]

		var color = Math.floor((Math.random() * 4));
		if (min % 5 == 0 && sec == 0 && ms<10) { 
			$("#clock").css("background-color",arrColor[color])
		};

		arrText = ["orange", "purple", "yellow", "green"]

		var color = Math.floor((Math.random() * 4));
		if (min == 00 && sec == 0 && ms<10) { 
			$("#clock").css("background-color",arrText[color])
		};

		// } else {
		// 	$("#min").css("color","white")
		// }

	}, 1);
});

// document.getElementsByTagName("span").style.color = 
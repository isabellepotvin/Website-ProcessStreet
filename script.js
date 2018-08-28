var sliderIndex = 1;
showSlides(sliderIndex);

function plusSlides(n) {
	showSlides(sliderIndex += n);
}

function showSlides(n) {
	slider = document.getElementsByClassName('slider');
	
	if(n > slider.length) {
		sliderIndex = 1;
	}
	
	if (n < 1) {
		sliderIndex = slider.length;
	}
	
	for(i = 0; i < slider.length; i++){
		if(slider[i].style.display = "block") {
			slider[i].style.display = "none";
		}
	}
	
	slider[sliderIndex-1].style.display = "block";
	
	console.log(slider.length);
}
	


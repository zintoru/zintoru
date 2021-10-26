menu.onclick = function myFunction() {
    var x = document.getElementById("MyTopnav");

    if(x.className === "topnav") {
        x.classname += "responsive";
    }   else {
        x.className = "topnav";
    }
}

$(document).ready(function(){
	$('.slider').slick({
		arrows:false,
		dots:false,
		slidesToShow:5,
		autoplay:true,
		speed:1000,
		autoplaySpeed:800,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			}
		]
	});
});






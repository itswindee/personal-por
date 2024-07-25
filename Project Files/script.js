

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('header, main, footer'); // Select all elements you want to animate
    elements.forEach((element, index) => {
        element.classList.add('fade-in');
        element.style.animationDelay = `${index * 0.3}s`;
    });
});



// home section
var menuBtn = document.querySelector('.menu-btn');
var menu = document.querySelector('.nav-links');
var menuLinks = document.querySelectorAll('.nav-links li a');


menuBtn.addEventListener('click', activeClass);

function activeClass(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
}

for(i = 0; i < menuLinks.length; i++){
	menuLinks[i].addEventListener('click', menuItemClicked);
}

function menuItemClicked(){
	menuBtn.classList.remove('active');
	menu.classList.remove('active');
}

var homeSection = document.querySelector('.home');
window.addEventListener('scroll', scrollFunction);
window.addEventListener('load', scrollFunction);

function scrollFunction(){
	if(window.scrollY > 60){
		homeSection.classList.add('active');
	}
	else{
		homeSection.classList.remove('active');
	}
}

// portfolio section
function openPopup() {
    document.getElementById("project-popup").style.display = "block";
}

function closePopup() {
    document.getElementById("project-popup").style.display = "none";
}
var $galleryContainer = $('.gallery').isotope({
	itemSelector: '.item',
	layoutMode: 'fitRows'
})

$('.button-group .button').on('click', function(){
	$('.button-group .button').removeClass('active');
	$(this).addClass('active');

	var value = $(this).attr('data-filter');
	$galleryContainer.isotope({
		filter: value
	})
})


// magnific popup
$('.gallery').magnificPopup({
	delegate: '.overlay a',
	type: 'image',
	gallery:{
		enabled: true
	}
})



// reviews section
$('.testimonials-container').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTime:6000,
    margin:10,
    nav:true,
    navText:["<i class='fa-solid fa-arrow-left'></i>",
             "<i class='fa-solid fa-arrow-right'></i>"],
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:true
        },
        768:{
            items:2
        }
    }
})
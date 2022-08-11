


var bars    = document.querySelector("header > .header-top > nav > .container > .bars");
var nav     = document.querySelector("header > .header-top > nav > .container > ul");
var header  = document.querySelector(".header-top");



// Bars Click To Show Navbar

bars.onclick = function() {
	nav.classList.toggle("toggle");
};


// btn scroll Top 

let btnTop = document.querySelector(".scrollToTop");

btnTop.addEventListener("click" , function(){


	window.scrollTo(0,0);


});


// Change BG Of Navbar

window.addEventListener("scroll" , function(){

	if(scrollY > 80) {
		header.style.background = "rgba(0, 0, 0, 0.95)";
		btnTop.style.right = "3%";
	} else {
		header.style.background = "transparent";
		btnTop.style.right = "-100%";
	}


});



//  Typed Animation

var typed = new Typed('.typed', {
  strings: ["I'm Assem Saeed" , "Front-End Developer", "Back-End Developer" , "Full-Stack WEB Developer"],
  typeSpeed: 45,
  backSpeed: 15,
  loop: true,
});



var mixer = mixitup('.portfolio__content__img');




// Change Color Taps


let taps = document.querySelectorAll(".portfolio__content__links > p");

for(let x=0 ; x<taps.length ; x++) {

	taps[x].addEventListener("click" , function(e){

		let siblings = e.target.parentElement.children;
		for(let i=0 ; i<siblings.length ; i++) {

			siblings[i].classList.remove("active");

		};

		e.target.classList.add("active");


	})

};









let loading = document.querySelector(".loading");
let body = document.querySelector("body");

body.style.overflow = "hidden";

window.addEventListener("load" , function(){

	setTimeout(function(){

			loading.style.opacity = "0";
			body.style.opacity = "1";
			body.style.overflow = "visible";

	} , 2000);


	this.setTimeout(function(){

		loading.style.display = "none";

	},3000);

});









// Elamasat Elahera (Lol)

let navA = document.querySelectorAll("nav ul > li > a");


for(let x=0; x<navA.length ; x++) {

	let arrtNav = navA[x].getAttribute("href");
	let section = document.querySelector(`${arrtNav}`).offsetTop - 100;

	window.addEventListener("scroll" , function(){


		

		if(window.scrollY >= section) {

			let sibling = navA[x].parentElement.parentElement.children;
			for(let i=0 ; i<sibling.length ; i++) {
				sibling[i].children[0].style.cssText = "color: rgba(250, 250, 250, 0.9) !important";
			}

			navA[x].style.cssText = "color: #20c997 !important";
	
		}

	})

}









// Counter

let counters = document.querySelectorAll(".counters");
let sectionAbout = document.querySelector(".about");
let isStarted = false;

function startCounting(el){

	let goal = el.dataset.count;
	let counting = setInterval( ()=> {

		el.textContent++;
		if(el.textContent == goal) {
			clearInterval(counting);
		}

	} , 2000 / goal )

}



window.addEventListener("scroll" , function(){

	if(this.window.scrollY >= sectionAbout.offsetTop) {
		
		if(!isStarted){

			counters.forEach( (e)=> {startCounting(e)} );

		}

		isStarted = true;

	};

});














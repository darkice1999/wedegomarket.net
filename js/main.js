const header = document.querySelector("header");
window.addEventListener("scroll", function(){
header.classList.toggle("sticky", window.scrollY > 100)
});

let bars = document.querySelector('#bars-icon');
let navlist = document.querySelector('.navlist');

bars.onclick = () => {
	bars.classList.toggle('fa-times');
	navlist.classList.toggle('open');
}

var frmvalidator  = new Validator("contactform");
frmvalidator.addValidation("name","req","Please provide your name");
frmvalidator.addValidation("email","req","Please provide your email");
frmvalidator.addValidation("email","email",
  "Please enter a valid email address");
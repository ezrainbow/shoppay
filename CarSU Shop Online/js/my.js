$(document).ready(function () {
	$('.bxslider').bxSlider({
		mode: 'horizontal',
		auto: true,
	});
$('.menu-togglr').on('click',function(){
    $('#mainav').slideToggle('fast');
    $(this).toggleClass('active');
});

});

// Get the modal
var modal = document.getElementById('login-overlay');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}// Get the modal
var modal = document.getElementById('login-overlay');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Get the modal
var modal1 = document.getElementById('login-overlay');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}// Get the modal
var modal1 = document.getElementById('login-overlay');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}

 var inputSearch = document.getElementById('searchbox').value;

    document.getElementById('searchbtn').addEventListener('click', store_data);  //Button Click Listener.

    inputTest.addEventListener('keypress',function(key){  // Enter key Press Listener
        key.which = key.which || key.keyCode;
        if(key.which == 13) {
            store_data();
        }
    });

    function store_data(){ // Store value from input field to local store
        localStorage.setItem( 'objectToPass', inputSearch.value);
    }

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var mybutton = document.getElementById("myBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function openNav() {
    $("#mySidenav").children().show();
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    $("#mySidenav").children().hide("slow");
    setTimeout(
        function(){ 
            document.getElementById("mySidenav").style.width = "0"; 
        },
        100 );
}

// dropdown
$("a.dropdown-item").on("click", function(){
    var text = $(this).text();
    $("#dropdownMenuButton1").text(text);
})

var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
    },
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    navigation: {
        nextEl: ".btn-next",
        prevEl: ".btn-prev",
    },
  });
$("#nav").addClass("js").before('<div id="menu">&#9776</div>');
$("#nav").addClass("js").before('<div id="mobileHeader">David Jarrin</div>');



$("#menu").click(function () {  //will toggle nav menu if 
    var toggleState = 0;
    function toggleMenu() {
        if (toggleState == 0) {
            toggleState = 1;
            $('#menu').removeClass(shadowBox);
            $('#nav').createClass(shadowBox);
        } else {
            toggleState = 0;
            $('#nav').removeClass(shadowBox);
            $('#menu').createClass(shadowBox);
        }
     }
    $("#nav").slideToggle();
});




$(window).resize(function () {
    if (window.innerWidth > 768) {
        $("#nav").removeAttr("style");
        
    }
});
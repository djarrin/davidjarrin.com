$("#nav").addClass("js").before('<div id="menu">&#9776</div>');
$("#nav").addClass("js").before('<div id="mobileHeader">David Jarrin</div>');

$("#menu").click(function () {
    $("#nav").slideToggle();
});

$(window).resize(function () {
    if (window.innerWidth > 768) {
        $("#nav").removeAttr("style");
      
    }
});
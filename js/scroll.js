

$(document).ready(function () {

    $("#StatusButton").click(function() {
        $('html, body').animate({
            scrollTop: $("#Status").offset().top
        }, 2000);
    });

    $("#StudentsButton").click(function() {
        $('html, body').animate({
            scrollTop: $("#Students").offset().top
        }, 2000);
    });

    $("#TechnicalButton").click(function() {
        $('html, body').animate({
            scrollTop: $("#Technical").offset().top
        }, 2000);
    });

    $("#MedicalButton").click(function() {
        $('html, body').animate({
            scrollTop: $("#Medical").offset().top
        }, 2000);
    });

    $("#BusinessButton").click(function() {
        $('html, body').animate({
            scrollTop: $("#Business").offset().top
        }, 2000);
    });

    $("#OtherButton").click(function() {
        $('html, body').animate({
            scrollTop: $("#Other").offset().top
        }, 2000);
    });

});

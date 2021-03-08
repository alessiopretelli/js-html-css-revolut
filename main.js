$(document).ready(function() {

    $('.nav_right ul li').mouseenter(function() {

        $(this).find('.menu').addClass('active');

    });

    $('.nav_right ul li').mouseleave(function() {

        $(this).find('.menu').removeClass('active');

    });

});
'use strict';

$(function(){

    $('a').mouseenter(function(){
        $('i',this).fadeIn(100);
    }).mouseleave(function(){
        $('i',this).fadeOut(100);
    });

});
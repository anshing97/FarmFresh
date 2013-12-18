'use strict';

// var getProduceData = function () {

//     $.ajax({
//         url: 'data/produce.json',
//         dataType: 'json',
//         success: function (data) {
//             console.log('success');
//             for ( var ii = 0; ii < data.produce.length; ii++ ) {
//                 var item = data.produce[ii];
//                 console.log(item.name);
//             }
//         },
//         error: function (xhr, status, error) {
//             console.log(error);
//         }
//     });

// };



$(function(){

    console.log('ready');

    $('a').mouseenter(function(){
        $('i',this).fadeIn(100);
    });
    
    $('a').mouseleave(function(){
        $('i',this).fadeOut(100);
    });

});
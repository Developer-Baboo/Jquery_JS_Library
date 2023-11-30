$(document).ready(function () {
    console.log("Jquery Working");

    //agr hum ek he id pa ek sa zyda event lgana chahta hoon to hum On method use kreng to avoid lenghty code
    /* $('#abc').click(function () {

    });
    $('#abc').mouseenter(function () {
        
    })
 */


    // Syntax: necha ha 
    // $('#abc').on({
    //     click: function () {
            
    //     },
    //     mouseenter: function () {
            
    //     }
    // })
    
    //Example on single event
    /* $("#box").on('click', function () {
        //this means same above box
        $(this).css('background', 'orange');
    }); */
    
    
    /* $("#box").on('mouseover mouseout', function () {
        //this means same above box
        $(this).toggleClass("boxbg");
    }); */
    
    
    $("#box").on({
        "click": function () {
            $(this).css('background', 'lightgreen');
        },
        "mouseover": function () {
            $(this).css('background', 'orange');
        },
        "mouseout": function () {
            $(this).css('background', 'yellow');
        },

    });

    //of Method opposite of on
    $("#button").click(function () {
        $("#box").off("mouseover mouseout");
    });
});
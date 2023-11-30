$(document).ready(function () { 
    // console.log("jQuery Working");
    $('#stylebutton').click(function () { 
        // $('#box').css("background-color", "red");
        $('#box').css({"background-color":"red", "color":"white", "border": "10px dotted blue"});
    });
});
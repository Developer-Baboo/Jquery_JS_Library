$(document).ready(function () {
    console.log("Jquery Working");

    $('#addbutton').click(function () {

        //priority second wala ko he mialgi
        $('#box,h1').addClass("first second");
    });

    //remove class 
    $('#removebutton').click(function () {
        $('#box').removeClass("second");
    });

    //agr lgi hogi to remove kraga otherwise add kraga
    $('#togglebutton').click(function () {
        $('#box').removeClass("second");
    });

});
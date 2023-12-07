$(document).ready(function () {
    // console.log("Jquery Working");
    $('#positionbtn').click(function () {
        console.log($('#box').position());
    });


    $('#offsetbtn').click(function () {
        console.log($('#box').offset());
    });

});
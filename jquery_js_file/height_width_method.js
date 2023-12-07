$(document).ready(function () {
    // console.log("Juqery Working");
    $('#widthBtn').click(function () {
        var a = $('#box').width();
        console.log("Width of Box : " + a);
        var b = $('#box').innerWidth();
        console.log("Inner Width of Box : " + b);
        var c = $('#box').outerWidth();
        console.log("Outer Width of Box : " + c);
        var d = $('#box').outerWidth(true);
        console.log("Outer Width of Box true : " + d);
    });


    //Height

    $('#heightBtn').click(function () {
        var a = $('#box').height();
        console.log("height of Box : " + a);
        var b = $('#box').innerHeight();
        console.log("Inner height of Box : " + b);
        var c = $('#box').outerHeight();
        console.log("Outer height of Box : " + c);
        var d = $('#box').outerHeight(true);
        console.log("Outer height of Box true : " + d);
    });





});
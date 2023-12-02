$(document).ready(function () {
    console.log("Jquery Working");
    $('#appendBtn').click(function () {
        $('<h3>AppendTo : Baboo Kumar</h3>').appendTo('#box');
    });


    $('#prependBtn').click(function () {
        $('<h3>Prepend To : Baboo Kumar </h3>').prependTo('#box');
    });
});
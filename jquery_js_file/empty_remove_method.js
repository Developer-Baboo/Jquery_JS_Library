$(document).ready(function () {
    // console.log("Jquery Working");
    $('#emptyBtn').click(function () {
        // $('#box1').empty();
        $('#box1 h2').empty();
    });

    $('#removeBtn').click(function () {
        // $('#box1').remove();
        $('h1').remove();
    });
});
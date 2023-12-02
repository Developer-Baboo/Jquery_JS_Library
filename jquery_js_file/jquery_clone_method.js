$(document).ready(function () {
    // console.log("Jquery Working");
    $('#cloneBtn').click(function () {
        $('#box1 h2').clone().prependTo('#box2');
        $('#box1 p').clone().prependTo('#box2');
    });
})
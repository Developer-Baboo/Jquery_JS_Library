$(document).ready(function () {
    console.log("Working Jquery");

    // $('#appendBtn').click(function () {
    //     $('#box').append("<h2>Baboo Kumar Footer</h2>");
    // });

    // $('#prependBtn').click(function () {
    //     $('#box').prepend("<h2>Baboo Kumar Header</h2>");
    // });


    //Append on List
    $('#appendBtn').click(function () {
        $('ol').append("<li>List Item New</li>");
    });

    //Prepand on List
     $('#prependBtn').click(function () {
        $('ol').prepend("<li>New List Item</li>");
    });
    
});
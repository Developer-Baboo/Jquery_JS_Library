$(document).ready(function () {
    // When foucs on element that function triggers
    $('#sname, #sclass, #scountry').focus(function () {
        $(this).css('background-color', 'lime');
    });

 // opposite of focus
    $('#sname, #sclass, #scountry').blur(function () {
        $(this).css('background-color', '');
    });

// work with select box
    $('#scountry').change(function () {
        // $(this).css('background-color', 'pink');

        var a = $(this).val();
        $('#test').html(a);
    });


//When we select whatever written in input box that event triggers
    $('#sname, #sclass').select(function () {
        $(this).css('background-color', 'yellow');
    });

    $('#sform').submit(function () {
        console.log("Form Submitted");
    });

});
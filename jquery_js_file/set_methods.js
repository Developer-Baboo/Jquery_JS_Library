console.log("Working Jquery");

$(document).ready(function () {

    //When set value button is clicked set h2 inside box to new value
    $('#clickbutton').click(function () {
        // $('#box h2').text("Hello Baboo Kumar Heerani");
        // $('#box p').text("This is new text.");

        //  $('#box h2').html("<h6>Hello Baboo Kumar Heerani </h6>");
        // $('#box p').html("<b>This is new text.</b>");

        //hox ka andr h2 ko attribute class set kro na unki value red set kro
        // $('#box h2').attr("class", "green");        
    });

    $('#sname').val("Baboo Kumar");
    $('#sclass').val("Software");
});
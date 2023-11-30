// console.log("Working Jquery");

$(document).ready(function () {
    /* //jis tag ke id box ka us ka sare html ko uthio and console krio
    var a = $('#box').html();
    console.log(a); */

    /* //pore body tag ke html ko uthio
    var b = $('body').html();
    console.log(b); */


    //box ka andr jo paragraph ha us ke html ko thio
    // var c = $('#box p').html();
    // console.log(c);

    //text remove html just show inside their text
    //  var d = $('#box p').text();
    //     console.log(d);

    // jis tag ke id box ka us ka attribue class ke value ko console kro
    /*   var e = $('#box').attr('class');
        console.log(e); */

//jasa form submit ha console input values
    $('#sform').submit(function () {
        var name = $('#sname').val();
        var classname = $('#sclass').val();
        var country = $('#scountry').val();
        alert("Hello " + name+" Class : "+classname+" Country : "+country);
    });


});
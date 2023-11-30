console.log("Working Jquery");

$(document).ready(function () {
    //jasa window pa scroll kroga ya event trigger hoga
    $(window).scroll(function () {
        console.log("You are scrolling window");
    });

    $('#box').scroll(function () {
        console.log("You are scrolling box");
    });

    // jasa window ko resizekroga to ya event trigger hoga
    $(window).resize(function () {
        console.log("You are Resizing Window");
    });

    //wdinow load function work same like ready but now it has been replaced
    

});
$(document).ready(function() {
    console.log("ready!");
    const typed = new Typed('.typed', {

        strings: [

            '<i>exceptional websites.</i>',
            '<i>things for the web.</i>',
            '<i>and everything in between.</i>'
        ],

        typeSpeed: 100,
        startDelay: 300,
        backSpeed: 75,
        backDelay: 1500,
        loop: true,
        loopCount: false,
        showCursor: true,
        cursorChar: '|',
        contentType: 'html',

    });

});
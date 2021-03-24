$(document).ready(function() {
    console.log("ready!");
    // Start typed //
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
    // End Typed //

    // Start Gsap //
    TweenMax.to(".loading-screen", 4, {
        delay: 2,
        top: "-110%",
        ease: Expo.easeInOut

    });

    TweenMax.from(".links__1", 3, {
        delay: 2.2,
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut
    });
    TweenMax.from(".links__2", 3, {
        delay: 2.4,
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut
    });
    TweenMax.from(".links__3", 3, {
        delay: 2.6,
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut
    });
    TweenMax.from(".links__4", 3, {
        delay: 2.8,
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut
    });
    TweenMax.from(".links__resume", 3, {
        delay: 3,
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut
    });


    // End Gsap //

});
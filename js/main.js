$(document).ready(function() {
    // Start typed //
    const typed = new Typed('.typed', {

        strings: [

            '<i>software developer.</i>',
            '<i>autodidact.</i>',
            '<i>full stack developer.</i>'
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

    const typed__story = new Typed('.typed__story', {

        strings: [


            '<i>hola mi nombre es mauricio fernandez, <br> bienvenido a mi sitio web personal.</i>',

        ],

        typeSpeed: 50,
        startDelay: 2500,
        backSpeed: 75,
        backDelay: 1500,
        loop: false,
        loopCount: false,
        showCursor: true,
        cursorChar: '|',
        contentType: 'html',

    });
    // End Typed //
    /*
    if (localStorage.getItem("loading") != "false") {

        localStorage.setItem("loading", "true");
    }

    // Start Gsap //
    if (localStorage.getItem("loading") == "true") {
        TweenMax.to(".loading-screen", 4, {
            delay: 0.2,
            top: "-100%",
            ease: Expo.easeInOut

        });
        localStorage.setItem("loading", "false");
    }*/

    /*
    TweenMax.from(".links__0", 3, {
        delay: 0.5,
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut
    });

    TweenMax.from(".links__1", 3, {
        delay: 0.5,
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut
    });
    TweenMax.from(".links__2", 3, {
        delay: 0.7,
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut
    });
    TweenMax.from(".links__3", 3, {
        delay: 0.9,
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut
    });
    TweenMax.from(".links__4", 3, {
        delay: 1.1,
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut
    });

    TweenMax.from(".links__resume", 3, {
        delay: 1.3,
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut
    });
*/

    // End Gsap //

});

var timeout;

const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
});


// hero page animation
function heropageAnimation() {
    var t1 = gsap.timeline();

    t1.from('#nav', {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut

    })

        .to('.boundingelem', {
            y: 0,
            ease: Expo.easeInOut,
            duration: 2,
            delay: -1,
            stagger: .2

        })

        .from('#herofooter', {
            y: -10,
            opacity: 0,
            duration: 1.5,
            delay: -1,
            ease: Expo.easeInOut

        })

}

heropageAnimation();



// mouse image hover

let elem = document.querySelectorAll('.elem')

elem.forEach(function (val) {
    val.addEventListener('mouseenter', function () {
        val.childNodes[3].style.opacity = 1
    })

    val.addEventListener('mouseleave', function () {
        val.childNodes[3].style.opacity = 0
    })

    val.addEventListener('mousemove', function (dets) {
        val.childNodes[3].style.left = dets.x + "px"
    })

})




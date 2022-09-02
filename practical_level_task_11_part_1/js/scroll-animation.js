const flightpath = {
    curviness: 1.25,
    autoRotate: true,
    values: [
        {x: 100, y: -20},
        {x: 300, y: 10},
        {x: 600, y: -100},
        {x: 800, y: 150},
        {x: 900, y: 50},
        {x: window.innerWidth, y: 50},
    ],
};

const tween = new TimelineLite();

tween.add(
    TweenLite.to('.paper-plane', 1, {
        bezier: flightpath,
        ease: Power1.easeInOut
    })
);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: '.animation',
    duration: 3000,
    triggerHook:0

})
    .setTween(tween)
    .addIndicators()
    .setPin('.animation')
    .addTo(controller);
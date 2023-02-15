// Check JS is Connected
console.log('JS Connected');

let tl = gsap.timeline();

tl.to(".soccerchick", {
    duration: 1,
    x: 400,
    scale: 0,
    opacity: 0

})

    .set(".soccerchick", {
        x: 400
    })

    .to(".soccerchick", {
        duration: 1,
        scale: 1,
        opacity: 1
    })


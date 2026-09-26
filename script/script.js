gsap.from(".hero", {
    opacity: 0,
    y: 50,
    duration: 4,
    stagger: 0.2,
    ease: "power2.out"
});

gsap.from(".second-hero", {
    opacity: 0,
    y: -50,
    delay: 1,
    duration: 4,
    stagger: 0.2,
    ease: "power2.out"
});


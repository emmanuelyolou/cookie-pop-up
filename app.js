const tl = gsap.timeline({defaults: { Duration: 0.75}});
tl.fromTo(".cookie-container", { scale: 0 }, { scale: 1});
tl.fromTo(".cookie", { opacity: 0, x:-40, rotate: -45 }, { opacity: 1, rotate: 0, x: 0 });
tl.fromTo(".cookie-text", { x: 50, opacity: 0 }, { x: 0, opacity: 1});

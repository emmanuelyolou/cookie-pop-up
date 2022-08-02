const tl = gsap.timeline({defaults: { Duration: 0.75, ease: "power1.out"}});
tl.fromTo(".cookie-container", { scale: 0 }, { scale: 1, ease: "elastic.out(1, 0.4)", duration: 1.5});
tl.fromTo(".cookie", { opacity: 0, x:-40, rotation: "-45deg" }, { opacity: 1, rotation: "0deg", x: 0 }, '<50%');
tl.fromTo(".cookie-text", { x: 50, opacity: 0 }, { x: 0, opacity: 1}, '<');
tl.fromTo(".cookie", { y: 0, rotation: "0deg" }, { y: -20, rotation: "-10deg", yoyo: true, repeat: -1 }, );
tl.fromTo("#crumbs", { y: 0 }, { y: -12, rotation: "-5deg", yoyo: true, repeat: -1 }, '<');

const button = document.querySelector('button');
const cookieContainer = document.querySelector('cookie-container');
button.addEventListener('click', () => { 
    gsap.to('.cookie-container', {y: 30, opacity: 0});
})
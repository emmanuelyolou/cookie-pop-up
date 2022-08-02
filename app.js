const tl = gsap.timeline({defaults: { Duration: 0.75, ease: "power1.out"}});
tl.fromTo(".cookie-container", { scale: 0 }, { scale: 1, ease: "elastic.out(1, 0.4)", duration: 1.5});
tl.fromTo(".cookie", { opacity: 0, x:-40, rotate: -45 }, { opacity: 1, rotate: 0, x: 0 }, '<55%');
tl.fromTo(".cookie-text", { x: 50, opacity: 0 }, { x: 0, opacity: 1}, '<');

const button = document.querySelector('button');
const cookieContainer = document.querySelector('cookie-container');
button.addEventListener('click', () => { 
    gsap.to('.cookie-container', {y: 100, opacity: 0});
})
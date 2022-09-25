var all_roller = document.querySelectorAll('.roller');
var text = new ShuffleText(self);

all_roller.forEach((item, index) => {
    item.addEventListener('mouseover', function () {
        item.style.pointerEvents = 'none';
        let text = new ShuffleText(item);
        text.start();
        setTimeout(function () {
            item.style.pointerEvents = 'auto';
        }, 1000)
    })
})

let container = document.querySelector('.gallery')



gsap.registerPlugin(ScrollTrigger);

const sections = gsap.utils.toArray(".gallery_item");
let maxWidth = 0;

const getMaxWidth = () => {
    maxWidth = 0;
    sections.forEach((section) => {
        maxWidth += section.offsetWidth + 100;

    });
};

getMaxWidth();


gsap.to(sections, {
    x: () => `-${maxWidth - window.innerWidth}`,
    ease: "none",
    scrollTrigger: {
        trigger: ".gallery",
        pin: true,
        scrub: true,
        snap: 1 / (sections.length - 1),
        end: 'bottom',
    }
});
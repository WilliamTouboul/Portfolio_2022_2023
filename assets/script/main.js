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


gsap.registerPlugin(ScrollTrigger);


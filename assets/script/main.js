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

gsap.to('.header_fiesta', {
    width: 100 + 'vw',
    height: 100 + 'vh',
    y: -200,
    scrollTrigger: {
        trigger: '.header_fiesta',
        scrub: true,
        start: 'top bottom',
        end: 'top 20%'
    }
})


// /* -------------------------------------------------------------------------- */
// /*                                 Transition                                 */
// /* -------------------------------------------------------------------------- */
// // let all_links = document.querySelectorAll('a');
// // all_links.forEach((item, index) => {
// //     item.classList.add('link_transition')
// // });


// let selected_links = document.querySelectorAll('.link_transition');

// selected_links.forEach((item, index) => {
//     item.addEventListener('click', function (e) {
//         e.preventDefault();
//         let target_page = item.getAttribute('href');
//         gsap.to('.transition', {
//             top: 0,
//             duration: .5
//         })
//         setTimeout(function () {
//             window.location.href = target_page;
//         }, 1000);
//     })
// });
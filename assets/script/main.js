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



/* -------------------------------------------------------------------------- */
/*                              Drag & Drop Menu                              */
/* -------------------------------------------------------------------------- */
let x = 0;
let y = 0;

const ele = document.getElementById('dragMe');

const mouseDownHandler = function (e) {
    x = e.clientX;
    y = e.clientY;
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);

};

const mouseMoveHandler = function (e) {
    const dx = e.clientX - x;
    const dy = e.clientY - y;
    ele.style.top = `${ele.offsetTop + dy}px`;
    ele.style.left = `${ele.offsetLeft + dx}px`;
    x = e.clientX;
    y = e.clientY;
};

const mouseUpHandler = function () {
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
};

ele.addEventListener('mousedown', mouseDownHandler);

/* ------------------------------ Open & close ------------------------------ */
let menu_open = true;
let opened_menu = document.querySelector('.opened_menu');
let menu_toggle = document.querySelector('.menu');
let menu_text = document.querySelector('.menu .roller');
let menu_close = document.querySelector('.close');


menu_toggle.addEventListener('click', function () {
    if (menu_open) {
        menu_open = !menu_open;
        gsap.to(opened_menu, {
            top: 2 + 'rem',
            left: 50 + '%',
            transform: 'translateX(-50%)'
        })
    } else {
        menu_open = !menu_open;
        gsap.to(opened_menu, {
            top: -200 + '%',
            left: 200 + '%'
        })
    }
})

menu_close.addEventListener('click', function () {
    menu_open = !menu_open;
    gsap.to(opened_menu, {
        top: -200 + '%',
        left: 200 + '%'
    })
})



/* -------------------------------------------------------------------------- */
/*                                Theme Picker                                */
/* -------------------------------------------------------------------------- */

let picker_1 = document.querySelector('.picker_1')
let picker_2 = document.querySelector('.picker_2')
let picker_3 = document.querySelector('.picker_3')
let imgs = document.querySelectorAll('img');
let recolor_svg = document.querySelectorAll('.will_recolor');
let recolor_svg_stroke = document.querySelectorAll('.will_recolor_stroke');


picker_1.addEventListener('click', function () {
    document.documentElement.style.setProperty('--clr__1', '#E0F8D0');
    document.documentElement.style.setProperty('--clr__2', '#88c070');
    document.documentElement.style.setProperty('--clr__3', ' #081820');
})


picker_2.addEventListener('click', function () {
    document.documentElement.style.setProperty('--clr__1', '#000000');
    document.documentElement.style.setProperty('--clr__2', '#E46E00');
    document.documentElement.style.setProperty('--clr__3', '#FFFFFF');

    recolor_svg_stroke.forEach((item, index) => {
        item.style.stroke = '#000000'
    });
    recolor_svg.forEach((item, index) => {
        item.style.fill = '#E46E00'
    })
})


picker_3.addEventListener('click', function () {
    document.documentElement.style.setProperty('--clr__1', '#FFFFFF');
    document.documentElement.style.setProperty('--clr__2', '#F94755');
    document.documentElement.style.setProperty('--clr__3', '#11161F');


    recolor_svg_stroke.forEach((item, index) => {
        item.style.stroke = '#FFFFFF'
    });
    recolor_svg.forEach((item, index) => {
        item.style.fill = '#F94755'
    })


})
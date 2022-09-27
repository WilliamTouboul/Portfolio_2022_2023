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
// members = document.querySelectorAll('.mover').forEach(item => {
//     item.addEventListener('mousedown', ev => {
//         console.log(ev);
//         let tid;
//         tid = ev.target.id;
//         if (ev.target.id == "") {
//             tid = ev.target.parentNode.id;
//         }
//         dragElement(document.getElementById(tid));
//     })
// })

// function dragElement(elmnt) {
//     var pos1 = 0,
//         pos2 = 0,
//         pos3 = 0,
//         pos4 = 0;
//     if (document.getElementById(elmnt.id + 'header')) {
//         document.getElementById(elmnt.id + 'header').onmousedown =
//             dragMouseDown;
//     } else {
//         elmnt.onmousedown = dragMouseDown;
//     }

//     function dragMouseDown(e) {
//         e = e || window.event;
//         e.preventDefault();
//         pos3 = e.clientX;
//         pos4 = e.clientY;
//         document.onmouseup = closeDragElement;
//         document.onmousemove = elementDrag;
//     }

//     function elementDrag(e) {
//         e = e || window.event;
//         e.preventDefault();
//         pos1 = pos3 - e.clientX;
//         pos2 = pos4 - e.clientY;
//         pos3 = e.clientX;
//         pos4 = e.clientY;
//         elmnt.style.top = elmnt.offsetTop - pos2 + 'px';
//         elmnt.style.left = elmnt.offsetLeft - pos1 + 'px';
//     }

//     function closeDragElement() {
//         /* stop moving when mouse button is released:*/
//         document.onmouseup = null;
//         document.onmousemove = null;
//     }
// }

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


let modal_open_1 = true;
let modal_open_2 = true;
let modal_open_3 = true;
let modal_open_4 = true;
let modal_open_5 = true;
let modal_open_6 = true;
let modal_open_7 = true;
let modal_open_8 = true;

for (i = 1; i <= 8; i++) {
    let target_modal = 'modal_open_' + i
    let close_modal = "#modal_" + i + " .close_modal"
    let anim_target = '#modal_' + i

    document.querySelector('.pf_' + i).addEventListener('click', function (e) {
        e.preventDefault();
        if (target_modal) {
            target_modal = !target_modal;
            gsap.to(anim_target, {
                top: 2 + 'rem',
                left: i++ + '%',
            })
        } else {
            target_modal = !target_modal;
            gsap.to(anim_target, {
                top: -200 + '%',
                left: -200 + '%'
            })
        }
    });

    document.querySelector(close_modal).addEventListener('click', function () {
        target_modal = !target_modal;
        gsap.to(
            gsap.to(anim_target, {
                top: -200 + '%',
                left: -200 + '%'
            })
        );
    })
}



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

    recolor_svg_stroke.forEach((item, index) => {
        item.style.stroke = '#000000'
    });
    recolor_svg.forEach((item, index) => {
        item.style.fill = '#E46E00'
    })
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




/* -------------------------------------------------------------------------- */
/*                                 Transition                                 */
/* -------------------------------------------------------------------------- */
// let all_links = document.querySelectorAll('a');
// all_links.forEach((item, index) => {
//     item.classList.add('link_transition')
// });


let selected_links = document.querySelectorAll('.link_transition');
selected_links.forEach((item, index) => {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        let target_page = item.getAttribute('href');
        gsap.to('.transition', {
            top: 0,
            duration: .5
        })
        setTimeout(function () {
            window.location.href = target_page;
        }, 1000);
    })
});
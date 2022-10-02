/* ---------------------------------- Menu ---------------------------------- */
{
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
}
/* ------------------------------------ 1 ----------------------------------- */
{
    let x = 0;
    let y = 0;

    const ele = document.getElementById('modal_1');

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

}
/* ------------------------------------ 2 ----------------------------------- */
{
    let x = 0;
    let y = 0;

    const ele = document.getElementById('modal_2');

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

}
/* ------------------------------------ 3 ----------------------------------- */
{
    let x = 0;
    let y = 0;

    const ele = document.getElementById('modal_3');

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

}
/* ------------------------------------ 4 ----------------------------------- */
{
    let x = 0;
    let y = 0;

    const ele = document.getElementById('modal_4');

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

}
/* ------------------------------------ 5 ----------------------------------- */
{
    let x = 0;
    let y = 0;

    const ele = document.getElementById('modal_5');

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

}
/* ------------------------------------ 6 ----------------------------------- */
{
    let x = 0;
    let y = 0;

    const ele = document.getElementById('modal_6');

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

}
/* ------------------------------------ 7 ----------------------------------- */
{
    let x = 0;
    let y = 0;

    const ele = document.getElementById('modal_7');

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

}
/* ------------------------------------ 8 ----------------------------------- */
{
    let x = 0;
    let y = 0;

    const ele = document.getElementById('modal_8');

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






    let all_modal_z = document.querySelectorAll('.modal_project');
    all_modal_z.forEach((item, intex) => {
        item.addEventListener('click', function (e) {
            all_modal_z.forEach((item, index) => {
                item.style.zIndex = 999999982;
            })

            item.style.zIndex = 999999985;
        })

    })

}
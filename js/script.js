import tab from './modules/tab';
import timer from './modules/timer';
import form from './modules/form';
import slider from './modules/slider';
window.addEventListener('DOMContentLoaded', function() {

    tab('.info-header-tab', '.info-header', '.info-tabcontent');
    timer('.timer', '2021-01-01');
    form();
    slider({
        wrap: '.wrap',
        inner: '.slider-inner',
        container: '.slider',
        slide: '.slider-item',
        prev: '.prev',
        next: '.next',
        dot: '.dot'
    });

});

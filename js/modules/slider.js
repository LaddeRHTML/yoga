function slider({wrap, inner, container, slide, prev, next, dot}) {
    const slidesWrapper = document.querySelector(wrap),
          slidesField = document.querySelector(inner),
          slider = document.querySelector(container),
          slides = document.querySelectorAll(slide),
          leftArrow = document.querySelector(prev),
          rightArrow = document.querySelector(next),
          width = window.getComputedStyle(slidesWrapper).width,
          indicators = document.createElement('div'),
          dots = [];
          
    let slideIndex = 1,
        offset = 0;
    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';
    slides.forEach(slide=>{
        slide.style.width = width;
    });
    slider.style.position = 'relative';
    function slideChanger() {
        dots.forEach(dot=>dot.classList.remove('dot-active'));
        dots[slideIndex-1].classList.add('dot-active');
    } 
    indicators.classList.add('slider-dots');
    slider.append(indicators);
    for(let i = 0; i < slides.length; i++) {
        const dot = document.createElement('div');
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('dot');
        if (i == 0) {
            dot.classList.add('dot-active');
        } 
        indicators.append(dot);
        dots.push(dot);
    }

    function replacePx(px) {
        return +px.replace(/\D/g, '');
    }
    rightArrow.style.right = 0;
    leftArrow.style.left = 0;
    rightArrow.addEventListener('click', ()=>{
        if (offset == (replacePx(width) * (slides.length - 1))) {
            offset = 0;
        } else {
            offset += replacePx(width);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }
        slideChanger();
    });

    leftArrow.addEventListener('click', ()=>{
        if (offset == 0) {
            offset = replacePx(width) * (slides.length - 1);
        } else {
            offset -= replacePx(width);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;
        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }
        slideChanger();
    });
    dots.forEach(dot=>{
        dot.addEventListener('click', (e)=>{
            const slideTo = e.target.getAttribute('data-slide-to');
            slideIndex = slideTo;
            offset = replacePx(width) * (slideTo - 1);
            slidesField.style.transform = `translateX(-${offset}px)`;
            slideChanger();
        });
    });
}

export default slider;
function sliders({container, slide, nextArrow, prevArrow, totelCounter, currentCounter, wrapper, field}) {
    const slides = document.querySelectorAll(slide),
    slider = document.querySelector(container),
    prev = document.querySelector(prevArrow),
    next = document.querySelector(nextArrow),
    total = document.querySelector(totelCounter),
    current = document.querySelector(currentCounter),
    slidesWrapper = document.querySelector(wrapper),
    slideField = document.querySelector(field),
    width = window.getComputedStyle(slidesWrapper).width;

    let indexSlide = 1,
        offset = 0;

    function checkCurrentIndex () {
        if (slides.length < 10) {
            current.textContent = `0${indexSlide}`;
        } else {
            current.textContent = indexSlide;
        }
    }

    function checkOpacity () {
        indicators.forEach(dot => dot.style.opacity = '.5');
        indicators[indexSlide - 1].style.opacity = 1;
    }

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
        current.textContent = `0${indexSlide}`;
    } else {
        total.textContent = slides.length;
        current.textContent = indexSlide;
    }

    slideField.style.width = 100 * slides.length + '%';
    slideField.style.display = 'flex';
    slideField.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    });

    slider.style.position = 'relative';

    const dots = document.createElement('ol'),
          indicators = [];

    dots.classList.add('carousel-dots');
    dots.style.cssText = `
            position: absolute;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 15;
            display: flex;
            justify-content: center;
            margin-right: 15%;
            margin-left: 15%;
            list-style: none;
    `;
    slider.append(dots);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.style.cssText = `
                box-sizing: content-box;
                flex: 0 1 auto;
                width: 30px;
                height: 6px;
                margin-right: 3px;
                margin-left: 3px;
                cursor: pointer;
                background-color: #fff;
                background-clip: padding-box;
                border-top: 10px solid transparent;
                border-bottom: 10px solid transparent;
                opacity: .5;
                transition: opacity .6s ease;
        `;
        if (i == 0) {
            dot.style.opacity = 1;
        }
        dots.append(dot);
        indicators.push(dot);
    }

    function deleteLetters(str) {
        return +str.replace(/\D/g, '');
    }

    next.addEventListener('click', () => {
        if (offset == deleteLetters(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += deleteLetters(width);
        }

        slideField.style.transform = `translateX(-${offset}px)`;

        if (indexSlide == slides.length) {
            indexSlide = 1;
        } else {
            indexSlide++;
        }

        checkCurrentIndex();
        checkOpacity();
    });

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = deleteLetters(width) * (slides.length - 1);
        } else {
            offset -= deleteLetters(width);
        }

         slideField.style.transform = `translateX(-${offset}px)`;

        if (indexSlide == 1) {
            indexSlide = slides.length;
        } else {
            indexSlide--;
        }

        checkCurrentIndex();
        checkOpacity();
    });

    indicators.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            indexSlide = slideTo;
            offset = deleteLetters(width) * (slideTo - 1);

            slideField.style.transform = `translateX(-${offset}px)`;

            checkCurrentIndex();
            checkOpacity();
        })
    })
}

export default sliders;

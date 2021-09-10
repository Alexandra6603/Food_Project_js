    //1 вариант
    // showSlides(indexSlide);

    // if (slides.length < 10) {
    //     total.textContent = `0${slides.length}`;
    // } else {
    //     total.textContent = slides.length;
    // }

    // function showSlides(n) {
    //     if (n > slides.length) {
    //         indexSlide = 1;
    //     }

    //     if (n < 1) {
    //         indexSlide = slides.length;
    //     }

    //     slides.forEach(item => item.style.display = 'none');

    //     slides[indexSlide - 1].style.display = 'block';

    //     if (slides.length < 10) {
    //         current.textContent = `0${indexSlide}`;
    //     } else {
    //         total.textContent = indexSlide;
    //     }
    // }  

    // function plusSlide(n) {
    //     showSlides(indexSlide += n);
    // }

    // prev.addEventListener('click', () => {
    //     plusSlide(-1);
    // });

    // next.addEventListener('click', () => {
    //     plusSlide(1);
    // });

    //2 вариант

(() => {
    //slider
    if (window.innerWidth <= 768) {
        window.onload = function () {
            const slider = document.querySelector('#slider');
            const move = document.querySelector('#move');
            const moveLi = Array.from(document.querySelectorAll('#slider #move li'));
            const forword = document.querySelector('#forword');
            const back = document.querySelector('#back');
            let counter = 1;
            let time = 2000;
            back.style.opacity = '0.4'

            function moveUP() {
                if (counter == moveLi.length) {
                    move.style.left = '0%';
                    counter = 1;
                }
                else if (counter >= 1) {
                    move.style.left = '-' + (counter * 175 + 'px');
                    back.style.opacity = '1'
                    counter++;
                }
                if (counter == 1) {
                    back.style.opacity = '0.4'
                }
            }
            function moveDOWN() {
                if (counter > 1) {
                    move.style.left = '0%';
                    counter--
                }
                if (counter == 1) {
                    back.style.opacity = '0.4'
                }
            }
            forword.onclick = moveUP;
            back.onclick = moveDOWN;
            setInterval(moveUP, time);
        }
    }
    //burder 
    const __burgerBtn = document.querySelector('#burger')
    const __burgerContent = document.querySelector('#burger-content')
    const __nav = document.querySelector('#nav')
    const toggleBurge = () => {
        __burgerBtn.classList.toggle('is-active')
        __burgerContent.classList.toggle('is-active');
        if (__burgerBtn.classList.contains('is-active')) {
            document.body.style.overflow = 'hidden'
        }
        else {
            document.body.style.overflow = 'unset'
        }
    }

    __burgerBtn.onclick = toggleBurge
    __burgerContent.onclick = toggleBurge
    // insert stars it will be removed , no recomended ))
    function insertStars() {
        const __stars = document.querySelectorAll('#stars')
        let svg = `<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#C2A578"/>
        </svg>
        `
        let svgs = ``
        for (let i = 0; i < 5; i++) {
            svgs += svg
        }
        __stars.forEach(item => {
            item.innerHTML = svgs
        })
    }
    insertStars()
    // accordion(question)

    const __accordion = document.querySelectorAll('#accordion')
    const toggleAccordion = (e, item) => {
        if (e.target.matches('h5')) {
            e.target.classList.toggle('is-active')
            item.classList.toggle('is-active')
        }
    }
    __accordion.forEach((item) => {
        if (window.innerWidth > 1280) {
            removeEventListener('click', toggleAccordion)
        }
        else {
            item.addEventListener('click', (e) => toggleAccordion(e, item))
        }
    })
})()
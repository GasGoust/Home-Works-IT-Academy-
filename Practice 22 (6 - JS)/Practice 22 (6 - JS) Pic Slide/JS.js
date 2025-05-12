// like XNB BAR Menu PS3

let next = document.querySelector("button.slider-next");
let prev = document.querySelector("button.slider-prev");
let sliderLine = document.querySelector(".slider-line");
let offset = 0;

next.onclick = function()
    {
        offset = offset - 225;
        // что слайд перешел в начало
        if(offset < -900)
            {
                offset = 0
            }
        // для анимации
        sliderLine.style.left = offset + "px";
    }

prev.onclick = function()
    {
        offset = offset + 225;
        // что слайд перешел в начало
        if(offset > 0)
            {
                offset = -900
            }
        // для анимации
        sliderLine.style.left = offset + "px";
    }
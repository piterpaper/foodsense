const tabItem = document.querySelectorAll('.tab-item-large-active');
const tabsWrapper = document.querySelectorAll('.wraper');

tabItem.forEach(function(item) {
    item.addEventListener('click', () => {
        let activeBtn = item;
        let tabId = activeBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);
        // проводим провекрку на класс active
        if (!activeBtn.classList.contains('active')) {

            tabItem.forEach(function(item) {
                item.classList.remove('active')
            });

            tabsWrapper.forEach(function(item) {
                item.classList.remove('active')
            });

            activeBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
});
// задаем класс active последнему табу
document.querySelector('.tab-item-large-active:nth-child(4)').click();

// mobile slider
const sliders = document.querySelectorAll('.wraper');
let current = 0;

function slider() {
    for (let i = 0; i < sliders.length; i++) {
        sliders[current].classList.remove('active-sliders-opacity');
        sliders[i].classList.add('active-sliders-opacity');
    }

}

document.querySelector('.wraper').onclick = slider;

const sliderButtonPrev = document.querySelector('.prev-button').onclick = function() {

    if (current - 1 == -1) {
        current = sliders.length - 1;
    } else {
        current--;
    }
    slider();
};

const sliderButtonNext = document.querySelector('.next-button').onclick = function() {

    if (current + 1 == sliders.length) {
        current = 0;
    } else {
        current++;
    }
    slider();
};
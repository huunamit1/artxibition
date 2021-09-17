const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

/* Start Count Down Timer */

var countDown = new Date("Dec 31, 2021 24:00:00").getTime();
setInterval( () => {
    var now = new Date().getTime();
    var countDownTime = countDown - now;

    if (countDownTime < 0){
        $('.days').innerHTML = 0;
    $('.hours').innerHTML = 0;
    $('.minutes').innerHTML = 0;
    $('.seconds').innerHTML = 0;
    }

    var days = Math.floor(countDownTime / (1000 * 3600 * 24));
    var hours = Math.floor((countDownTime % (1000 * 3600 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((countDownTime % (1000 * 3600)) / (1000 * 60));
    var seconds = Math.floor((countDownTime % (1000 * 60)) / 1000);

    $('.days').innerHTML = `${days}`;
    $('.hours').innerHTML = `${hours}`;
    $('.minutes').innerHTML = `${minutes}`;
    $('.seconds').innerHTML = `${seconds}`;
},1000);

/* End Count Down Timer */

/* Start Banner */

const left = $('.banner-wapper__icon-left');
const right = $('.banner-wapper__icon-right');
const firstItem = $('.banner__link--first');

var marginLeftPer = 25;
var checkClick = false;
var percent = {
    25: 100,
    50: 200,
    100: 300
};

function MarginLeft() {
    const widthBody = $('body').offsetWidth;

    if (widthBody >= 740 && widthBody <= 1023)
        return 50;
    else if (widthBody < 739)
        return 100;
    return 25;
}

setInterval(() => {
    if (checkClick){
        setTimeout(() => {

        },3000);
        checkClick = false;
    }

    var marginBanner = MarginLeft();

    marginLeftPer += marginBanner;
    if (marginBanner === 50){
        if (marginLeftPer % 50 != 0)
            marginLeftPer += 25;
    } else if (marginBanner === 100)
        if (marginLeftPer % 100 != 0)
            marginLeftPer += (100 - marginLeftPer % 100);

    if (marginLeftPer > percent[marginBanner])
        marginLeftPer = 0;
    firstItem.style.marginLeft = -1 * marginLeftPer + "%";
}, 3000);

left.onclick = () => {
    checkClick = true;
    var marginBanner = MarginLeft();

    if (marginLeftPer === 0)
        marginLeftPer = percent[marginBanner];
    else 
        marginLeftPer -= marginBanner;

    firstItem.style.marginLeft = -1*marginLeftPer + '%';
    
};

right.onclick = () => {
    checkClick = true;
    var marginBanner = MarginLeft();

    if (marginLeftPer === percent[marginBanner])
        marginLeftPer = 0;
    else 
        marginLeftPer += marginBanner;

    firstItem.style.marginLeft = -1*marginLeftPer + '%';
};

/* End Banner */

/* Start Memu PC */

const menuList = $$('.header__navbar-item');

menuList.forEach((menuItem) => {
    menuItem.onclick = () => {
        $('.header__navbar-item.active').classList.remove('active');
        menuItem.classList.add('active');
    };
});


/* End Memu PC */

/* Start Menu Mobile */

const menu = $('.menu-mobile');

menu.onclick = () => {
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        $('.header__navbar-list').classList.remove('active');
    }
    else {
        menu.classList.add('active');
        $('.header__navbar-list').classList.add('active');
    }
};

/* End Menu Mobile */
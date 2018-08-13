function scrollIt(element) {
    window.scrollTo({
        'behavior': 'smooth',
        'left': 0,
        'top': element.offsetTop
    });
}

// scrollIt(paket);

const home = document.querySelector('#home');
const paket = document.querySelector('#paket');

const homeSection = document.querySelector('#promo-section');
const paketSection = document.querySelector('#paket-section');

home.addEventListener('click', () => {
    // console.log(home);
    scrollIt(homeSection);
});

paket.addEventListener('click', () => {
    // console.log(paket);
    scrollIt(paketSection);
})

CSSPlugin.defaultTransformPerspective = 700;

var timeline = new TimelineLite();
timeline.staggerFrom('.promo-message-1', .5, {opacity:0, scale:.5, y: -100, x: -10}, .08);
timeline.staggerFrom('#hero-message1', .5, {opacity:0, scale: .5, y: 50}, .03);
timeline.staggerFrom('.promo2-message-1', .5, {opacity:0, scale:.5, y: 100, x: 10}, .08);
timeline.staggerFrom('#hero-message2', .5, {opacity:0, scale: .5, y: -50}, .03);



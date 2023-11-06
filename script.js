console.log("sasas");
$(window).scroll(function(){
    parallax();
});

function parallax(){
    console.log("called");
    // how far scrolled from top of window
    var wScroll = $(window).scrollTop();
    console.log("ss", wScroll);
    $('.parallax-bg').css('background-position', 'center '
    + (wScroll*0.75)+'px');

    $('.parallax-box').css('left', -2+(wScroll*0.95)+'px')
}


$('.feedback__slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: '<button type="button" class="slick-next">&#129046;</button>',
    prevArrow: '<button type="button" class="slick-prev">&#129048;</button>'
});

let zvonok= $("#zvonok");
let zvon = $("#zvon");
let crest = $("#crest");

zvon.on("click", function(event){
    event.preventDefault();
    zvonok.addClass("show");
});
crest.on("click", function(event){
    event.preventDefault();
    zvonok.removeClass("show");
});
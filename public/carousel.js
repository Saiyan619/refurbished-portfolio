
$(() => {
    $('#carousel').slick({
        dots: false,
        nextArrow: $('.carousel-button.next'),
        prevArrow: $('.carousel-button.previous'),
        infinite: false,
        variableWidth: true,
        slidesToScroll: 1,
    });
});
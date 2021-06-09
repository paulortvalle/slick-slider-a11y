// slick slider config for section content box
$(function() {

    const SLICK_SPEED = 500;

    $('.slider .slick').slick({
        autoplay: true,
        infinite: true,
        dots: true,
        speed: SLICK_SPEED,
        accessibility: false,
        appendDots: $(this).parent().find('.dots'),
        arrows: true,
        prevArrow: $(this).parent().find('button.prev'),
        nextArrow: $(this).parent().find('button.next')
    });

    $('.slider button.play').hide();

    // previous button
    $('.slider button.prev').on('click', function(){
        $(this).closest('.slider').find('.slick').slick('slickPrev');

        var $slider = $(this).closest('.slider');
        setTimeout(function(){
            $slider.find('.slick .slick-active').focus();
        }, SLICK_SPEED + 50, $slider);
    });

    // next button
    $('.slider button.next').on('click', function(){
        $(this).closest('.slider').find('.slick').slick('slickNext');

        var $slider = $(this).closest('.slider');
        setTimeout(function(){
            $slider.find('.slick .slick-active').focus();
        }, SLICK_SPEED + 50, $slider);
    });

    // pause button
    $('.slider button.pause').on('click', function(){
        $(this).closest('.slider').find('.slick').slick('slickPause');
        $(this).hide();
        $(this).closest('.slider').find('.play').show().focus();
    });

    // play button
    $('.slider button.play').on('click', function(){
        $(this).closest('.slider').find('.slick').slick('slickPlay');

        $(this).hide();
        $(this).closest('.slider').find('.pause').show().focus();
    });

    // dot buttons action
    $('.slider .dots button').on('click', function(){
        var slide = $(this).data('slide');
        $(this).closest('.slider').find('.slick').slick('slickGoTo', slide);

        var $slider = $(this).closest('.slider');
        setTimeout(function(){
            $slider.find('.slick .slick-active').focus();
        }, SLICK_SPEED + 50, $slider);
    });

    // On before slide change | set active dots
    $('.slider .slick').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $(slick.$slider).parent().find('.dots button')
            .removeClass('active')
            .attr("aria-selected","false");
        $(slick.$slider).parent().find('.dots button[data-slide="'+ nextSlide + '"]')
            .addClass('active')
            .attr("aria-selected","true");
    });

    // On after slide change | hide non active slides
    $('.slider .slick').on('afterChange', function(event, slick, currentSlide){
        $(slick.$slider).find('.slick-slide').attr('tabindex', -1);
        $(slick.$slider).find('.slick-active').attr('tabindex', 0);
    });

});
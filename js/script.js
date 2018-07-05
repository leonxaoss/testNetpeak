(function(){
    $(document).ready(function(){

        function come(elem) {
            let docViewTop = $(window).scrollTop(),
                docViewBottom = docViewTop + $(window).height(),
                elemTop = $(elem).offset().top,
                elemBottom = elemTop + $(elem).height();

            return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
        }



        window.onscroll = function() {

            var hederHeight = document.getElementById('header').clientHeight;
            var tabletHeight = document.getElementById('section_tablet').clientHeight;

            if($(this).scrollTop() > hederHeight) {
                $('.menu_btn').addClass('menu_btn__fixed');
            }
            else {
                $('.menu_btn').removeClass('menu_btn__fixed');
            }
            if($(this).scrollTop() > tabletHeight) {
                $('.menu_btn').addClass('menu_btn__black');
            }
            else {
                $('.menu_btn').removeClass('menu_btn__black');
            }

            function animation(classAnim, classAdd) {
                let $target = $(classAnim);
                let hold = 300;
                $.each($target,function(i,t){
                    let $this = $(t);
                    setTimeout(function(){ $this.addClass(classAdd); },i*hold);
                });
            }

            if (come('.features_block h2')) {
                animation('.features_box', 'animation_down_up');
            }
            if (come('.press_block')) {
                animation('.press_block img', 'animation_down_up');
            }
            if (come('.section_highlights__animation')) {
                animation('.highlights_box', 'animation_left_right');
                $('.highlights_tablet').addClass('animation_down_up');
            }
            if (come('.started_text h2')) {
                $('.started_text').addClass('animation_down_up');
                $('.started_btn').addClass('animation_down_up');
            }
            if (come('.stars')) {
                animation('.reviews_block', 'animation_down_up');
                $('.testimonials_block__left').addClass('animation_left_right');
            }
            if (come('.pricing_block__text h3')) {
                animation('.pricing_box', 'animation_right_left');
                $('.pricing_block__text').addClass('animation_left_right');
            }
            if (come('.perfect_text h2')) {
                animation('.perfect_box', 'perfect_box__animate');
            }
            if (come('.video_box h3')) {
                $('.section_video').addClass('section_video__animate');
            }
            if (come('.form_block h3')) {
                $('.form_block p').addClass('animation_down_up');
                setTimeout (function(){
                    $('.contact-form').addClass('animation_down_up');
                }, 300);
            }



        };


        $(".nav").on("click","a", function (event) {
            event.preventDefault();
            let id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1000);
            $('.menu_btn').removeClass('menu_btn__open');
            $('.responsive_menu').removeClass('responsive_menu__open');

        });


        $('.menu_btn').on('click', function() {
            if(!$('.menu_btn').hasClass('menu_btn__open')) {
                $('.menu_btn').addClass('menu_btn__open');
                $('.responsive_menu').addClass('responsive_menu__open');
            }
            else {
                $('.menu_btn').removeClass('menu_btn__open');
                $('.responsive_menu').removeClass('responsive_menu__open');
            }
        });


        // /header


        //Форми

        $("#contact-form").submit(function() {
            $.ajax({
                type: "POST",
                url: "./js/postt.php",
                data: $(this).serialize()
            }).done(function() {
                $(this).find("input").val("");
                $(this).find("textarea").val("");

                $(".contact_form__done").fadeIn('1000').css("display", "flex");
                setTimeout (function(){
                    $('.contact_form__done').fadeOut('1000');
                }, 2500);

                $("#contact-form").trigger("reset");
            });
            return false;
        });



        // /Форми

    });



}());






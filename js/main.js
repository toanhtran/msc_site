function main() {
    ! function() {
        "use strict";
        $("a.page-scroll").click(function() {
            if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                var a = $(this.hash);
                if (a = a.length ? a : $("[name=" + this.hash.slice(1) + "]"), a.length) return $("html,body").animate({
                    scrollTop: a.offset().top - 40
                }, 900), !1
            }
        }), $(window).bind("scroll", function() {
            var a = $(window).height() - 100;
            $(window).scrollTop() > a ? $(".navbar-default").addClass("on") : $(".navbar-default").removeClass("on")
        }), $("body").scrollspy({
            target: ".navbar-default",
            offset: 80
        }), $(document).ready(function() {
            $("#team").owlCarousel({
                navigation: !1,
                slideSpeed: 300,
                paginationSpeed: 400,
                autoHeight: !0,
                itemsCustom: [
                    [0, 1],
                    [450, 2],
                    [600, 2],
                    [700, 2],
                    [1e3, 4],
                    [1200, 4],
                    [1400, 4],
                    [1600, 4]
                ]
            }), $("#clients").owlCarousel({
                navigation: !1,
                slideSpeed: 300,
                paginationSpeed: 400,
                autoHeight: !0,
                itemsCustom: [
                    [0, 1],
                    [450, 2],
                    [600, 2],
                    [700, 2],
                    [1e3, 4],
                    [1200, 5],
                    [1400, 5],
                    [1600, 5]
                ]
            }), $("#testimonial").owlCarousel({
                navigation: !1,
                slideSpeed: 300,
                paginationSpeed: 400,
                singleItem: !0
            })
        }), $(window).load(function() {
            var a = $("#lightbox");
            a.isotope({
                filter: "*",
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: !1
                }
            }), $(".cat a").click(function() {
                $(".cat .active").removeClass("active"), $(this).addClass("active");
                var e = $(this).attr("data-filter");
                return a.isotope({
                    filter: e,
                    animationOptions: {
                        duration: 750,
                        easing: "linear",
                        queue: !1
                    }
                }), !1
            })
        })
    }(), $("#tf-contact").submit(function(a) {
        a.preventDefault();
        var e = $("#c_name").val(),
            t = $("#c_email").val(),
            i = $("#c_message ").val(),
            n = $("#tf-contact .ajax-response"),
            o = {
                name: e,
                email: t,
                message: i
            };
        return "" != e && "" != t && "" != i ? $.ajax({
            type: "POST",
            url: "php/contact.php",
            data: o,
            dataType: "json",
            encode: !0,
            success: function(a) {
                var e = $.parseJSON(JSON.stringify(a));
                n.html(e.message).fadeIn(500)
            }
        }) : (n.fadeIn(500), n.html('<i class="fa fa-warning"></i> Please fix the errors and try again.')), !1
    })
}
main();
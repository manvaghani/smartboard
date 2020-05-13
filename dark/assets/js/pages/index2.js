//===============================================================================
$(window).on('scroll',function() {
    $('.card .sparkline').each(function() {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 400) {
            $(this).addClass("pullUp");
        }
    });
});

//===============================================================================



//===============================================================================
$(".dial1").knob();
$({animatedVal: 0}).animate({animatedVal: 66}, {
    duration: 4000,
    easing: "swing",
    step: function() {
        $(".dial1").val(Math.ceil(this.animatedVal)).trigger("change");
    }
});
$(".dial2").knob();
$({animatedVal: 0}).animate({animatedVal: 26}, {
    duration: 4500,
    easing: "swing",
    step: function() {
        $(".dial2").val(Math.ceil(this.animatedVal)).trigger("change");
    }
});
$(".dial3").knob();
$({animatedVal: 0}).animate({animatedVal: 76}, {
    duration: 3800,
    easing: "swing",
    step: function() {
        $(".dial3").val(Math.ceil(this.animatedVal)).trigger("change");
    }
});
$(".dial4").knob();
$({animatedVal: 0}).animate({animatedVal: 88}, {
    duration: 5200,
    easing: "swing",
    step: function() {
        $(".dial4").val(Math.ceil(this.animatedVal)).trigger("change");
    }
});
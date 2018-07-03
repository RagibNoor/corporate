jQuery(document).ready(function(){
    "use strict"
    $('#slider-carousel').carouFredSel({
        resoinsive : true,
        width:'100%',
        circular:true,
        scroll:{
            item:1,
            duration:500,
            pauseOnHover:true,
        },
        auto:true,
        items:{
            visible:{
                min:1,
                max:1,
            },
            height:"variable"
        },
        pagination:{
            container:".slider-pager",
            anchorBuilder:false, 
        }
        
    })
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        if(top>=40){
            $("header").addClass("nav-bg");
        }
        else {
            $("header").removeClass("nav-bg");
        }
    })
})
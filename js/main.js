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
        auto:false,
        items:{
            visible:{
                min:1,
                max:1,
            },
            height:"variable"
        },
        pagination:{
            container:".slider-pager",
            anchorbuilder:false, 
        }
        
    })
})
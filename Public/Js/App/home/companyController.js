/**
 * Created by Fengdb on 2015/3/3.
 */
define(function(require,exports,module){
    var $ = require('jquery');
    var slideUp = $('#slideUp');
    var basejs = require('baseController.js');
    function popover(){
        var bootstrap = require('bootstrap');
        $("[data-toggle='popover']").popover();
        $(document).on('mouseout','.omit',function(){
            $(".popover").hide();
        });
    }
    function scroll(){
        $(document).scroll(function(){
            var top = $(document).scrollTop();
            if(top >= 150){
                $('.company-nav').css('top','0');
                slideUp.fadeIn(300);
            }else{
                $('.company-nav').css('top',102);
                slideUp.fadeOut(300);
            }
            var a = $('.company-nav').find('a');
            if(top >100){
                basejs.setValue(a,1);
            }
            if(top >=300){
                basejs.setValue(a,2);
            }
            if(top >=1400){
                basejs.setValue(a,3);
            }
            if(top >=2400){
                basejs.setValue(a,4);
            }
            if(top >=4100){
                basejs.setValue(a,5);
            }
        })
    }
    var main = {
        base:function(){
            basejs.backTop();
            popover();
            scroll();
        }
    };
    module.exports = main ;
});
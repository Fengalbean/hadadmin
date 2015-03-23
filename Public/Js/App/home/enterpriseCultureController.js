/**
 * Created by Fengdb  on 2015/3/3.
 */

define(function(require,exports,module){
    var $ = require('jquery');
    var slideUp = $('#slideUp');
    var basejs = require('baseController.js');
    function enterpriseCulture(){
        var div = $('.had-container .section-common');
        div.each(function(){
            $(this).find('li').last().css('border','none');
        });
        $(window).scroll(function(){
            var top = $(document).scrollTop();
            if(top >= 100){
                $('.company-nav').css('top','0');
                slideUp.fadeIn(300);
            }else{
                $('.company-nav').css('top',102);
                slideUp.fadeOut(300);
            }
            var a = $('.company-nav').find('a');
            if(top >400){
                basejs.setValue(a,1);
            }
            if(top >=900){
                basejs.setValue(a,2);
            }
            if(top >=1100){
                basejs.setValue(a,3);
            }
            if(top >=1300){
                basejs.setValue(a,4);
            }
            if(top >=1800){
                basejs.setValue(a,5);
            }
            if(top >=2800){
                basejs.setValue(a,6);
            }
            if(top >=3000){
                basejs.setValue(a,7);
            }
            if(top >=3300){
                basejs.setValue(a,8);
            }
            if(top >=3800){
                basejs.setValue(a,9);
            }
        })
    }
    var main = {
        base:function(){
            basejs.backTop();
            enterpriseCulture();
        }
    };
    module.exports = main ;
});
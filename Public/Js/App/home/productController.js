/**
 * Created by Administrator on 2015/3/4.
 */


define(function(require,exports,module){
    var $ = require('jquery');
    var slideUp = $('#slideUp');
    var basejs = require('baseController.js');
    function product(){
        $(window).scroll(function(){
            var top = $(document).scrollTop()
            if(top >= 100){
                $('.business-nav').css('top','0');
                slideUp.fadeIn(100);
            }else{
                $('.business-nav').css('top',102);
                slideUp.fadeOut(300);
            }
            var a = $('.business-nav').find('a');

            if(top >100){
                basejs.setValue(a,1);
            }
            if(top >=700){
                basejs.setValue(a,2)
            }
            if(top >=1000){
                basejs.setValue(a,3)
            }
            if(top >=1400){
                basejs.setValue(a,4)
            }
            if(top >=1650){
                basejs.setValue(a,5)
            }
        })
    }
    var main = {
        base:function(){
            basejs.backTop();
            product();
        }
    };
    module.exports = main ;
});
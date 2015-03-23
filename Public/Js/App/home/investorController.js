/**
 * Created by Administrator on 2015/3/4.
 */

define(function(require,exports,module){
    var $ = require('jquery');
    var slideUp = $('#slideUp');
    var basejs = require('baseController.js');
    function investorController(){
        $(window).scroll(function(){
            var top = $(document).scrollTop()
            if(top >= 100){
                $('.investor-nav').css('top','0');
                slideUp.fadeIn(300);
            }else{
                $('.investor-nav').css('top',100);
                slideUp.fadeOut(300);
            }
            var a = $('.investor-nav').find('a');

            if(top >100){
                basejs.setValue(a,1);
            }
            if(top >=400){
                basejs.setValue(a,2);
            }
            if(top >=800){
                basejs.setValue(a,3);
            }
            if(top >=1100){
                basejs.setValue(a,4);
            }

        })
    }
    var main = {
        base:function(){
            basejs.backTop();
            investorController();
        }
    };
    module.exports = main ;
});
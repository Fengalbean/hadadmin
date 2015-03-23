/**
 * Created by Administrator on 2015/3/4.
 */
/**
 * Created by Administrator on 2015/3/4.
 */

define(function(require,exports,module){
    var $ = require('jquery');
    var slideUp = $('#slideUp');
    var basejs = require('baseController.js');
    function businessCooperationController(){
        $(window).scroll(function(){
            var top = $(document).scrollTop();
            if(top >= 100){
                $('.coor-nav').css('top','0');
                slideUp.fadeIn(300);
            }else{
                $('.coor-nav').css('top',102);
                slideUp.fadeOut(300);
            }
            var a = $('.coor-nav').find('a');

            if(top >200){
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
            if(top >=1500){
                basejs.setValue(a,5);
            }
            if(top >=1800){
                basejs.setValue(a,6);
            }
            if(top >=2100){
                basejs.setValue(a,7);
            }
            if(top >=2500){
                basejs.setValue(a,8);
            }
        })
    }
    var main = {
        base:function(){
            basejs.backTop();
            businessCooperationController();
        }
    };
    module.exports = main ;
});
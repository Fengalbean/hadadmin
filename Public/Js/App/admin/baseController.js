/**
 * Created by dell4 on 2014/12/3.
 */
define(function(require,exports,module){
    var $ = require('jquery');
    //require('bootstrap');
    function backTop(){
        var slideUp = $('#slideUp');
        slideUp.fadeOut(300);
        slideUp.on('click',function(){//返回顶部
            $('html,body').animate({
                scrollTop: '0px'
            }, 300);
            return false;
        });
    };
    function setValue(Element,num){
        Element.each(function(){
            var id = $(this).data('id');
            if(id == num){
                $(this).css({'color':'#ffa54a','font-size':'20px'});
                $(this).parent().next().find('a').css({'color':'#000','font-size':'14px'});
                $(this).parent().prev().find('a').css({'color':'#000','font-size':'14px'});
                return false;
            }
        })
    };
    var main = {
        base:function(){
            backTop();
        },
        setValue:setValue,
        backTop:backTop
    };
    module.exports = main ;
});
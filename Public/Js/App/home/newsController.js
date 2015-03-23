/**
 * Created by Fengdb  on 2015/3/3.
 */

define(function(require,exports,module){
    var $ = require('jquery');
    var slideUp = $('#slideUp');
    var basejs = require('baseController.js');
    function news(){
        var div = $('.had-container .section-common');
        div.each(function(){
            $(this).find('li').last().css('border','none');
        });
        var list = $('.news-list');
        var companyNews = $('#companyNews');
        companyNews.on('click','.news-list',function(){
            var id = $(this).data('id');
            window.open('News/showContent?id='+id);
        });
        $(window).scroll(function(){
            var top = $(document).scrollTop();
            if(top >= 150){
                $('.news-nav').css('top','0');
                slideUp.fadeIn(300);
            }else{
                $('.news-nav').css('top',102);
                slideUp.fadeOut(300);
            }
            var a = $('.news-nav').find('a');
            if(top >200){
                basejs.setValue(a,1);
            }
            if(top >=400){
                basejs.setValue(a,2);
            }
            if(top >=800){
                basejs.setValue(a,3);
            }
        });
    }
    var main = {
        base:function(){
            basejs.backTop();
            news();
        }
    };
    module.exports = main ;
});
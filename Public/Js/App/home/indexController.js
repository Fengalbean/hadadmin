/**
 * Created by Administrator on 2015/2/28.
 */
define(function(require,exports,module) {
    var $ = require('jquery');
    function index(){
        var height  =window.pageYOffset;
        if(height > 0){
            $('body,html').animate({scrollTop:0},100);
        };
        $('#container').find('.view').mouseover(function () {
            $(this).addClass("active");
        });
        $('#container').find('.view').mouseout(function () {
            $(this).removeClass("active");
        });
        var close = $('#close');
        var windowInfo = $('#windowInfo');
        var upAdBanner = function () {
            windowInfo.slideUp(500);
            close.slideUp(500);
           $("body").css("overflow", "scroll");
        };
        var downBanner = function () {
            windowInfo.slideDown(500);
            close.slideDown(500);
            $("body").css("overflow", "hidden")
        };
        downBanner();
        setTimeout(upAdBanner, 4000);
        var top = $(document).scrollTop();
        close.on('click', function () {
            windowInfo.hide();
            $(this).hide();
        });
    }
    var main = {
        index:function(){
            index();
        }
    };
    module.exports = main;
});
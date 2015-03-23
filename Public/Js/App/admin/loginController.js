/**
 * Created by Administrator on 2015/1/21.
 */
define(function(require,exports,module){
    var $ = require('jquery');

    function setPosition(selector){
        var Width = document.body.clientWidth;
        var height = $(window).height();
        var loginWidth = selector.outerWidth();
        var loginHeight = selector.outerHeight();
        var left = (Width-loginWidth)/2;
        var top = (height-loginHeight)/2
        //console.log()

        //console.log(Width);
        //console.log(height);
        //console.log(loginWidth)
        //console.log(loginHeight)
        //console.log(left)
        //console.log((top));
        if(Width>loginWidth){
            selector.css('margin-left',left);
        }else{
            selector.css('margin-left',0);
        }
        if(height>loginHeight){
            selector.css('margin-top',top);
        }else{
            selector.css('margin-top',0);
        }
    }
    function formCheck(){
        var checkForm = $('#checkForm');
        checkForm.validate({
            rules: {
                username:{
                    required:true
                },
                passwords: {
                    required: true
                }
            },
            messages: {
                username:{
                    required:'亲，请输入用户名！'
                },
                passwords: {
                    required: '亲，请输入密码！'
                }
            },
            submitHandler:function(form){
                form.submit();
            }
        });
    }
    var main = {
        login:function(){
            require('validate');
            formCheck();
            var loginForm = $('#login-form');
            setPosition(loginForm);
            $(window).resize(function(){
                setPosition(loginForm);
            });
        }
    };
    module.exports = main
});

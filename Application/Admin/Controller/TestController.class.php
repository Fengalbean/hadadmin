<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2015/3/7
 * Time: 10:32
 */

namespace Admin\Controller;

use Think\Controller;
class TestController extends Controller {
    public function index(){
        $this->display('Index:webupload');
    }
}
<?php
namespace Home\Controller;
use Think\Controller;
class IndexController extends Controller {
    public function index(){
        $admin = md5(admin);
//        dump($admin);
        $this->display();
    }
    public function News(){
        $this->display('News/index');
    }
}
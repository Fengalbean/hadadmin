<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2015/3/4
 * Time: 22:02
 */
namespace Common\Controller;

use Think\Controller;
class AdminBaseController extends Controller {
    function isActive($username,$passwords){
        $model = M('admin');
        $where = [
          'username'=>$username,
          'passwords'=>$passwords
        ];
        $active = $model->where($where)->field('status')->select();

    }
}

<?php
namespace Admin\Controller;
use Think\Controller;
class IndexController extends Controller {
    public function index(){
//        dump (__ROOT__ . '/'.'Public'. '/'.'Html');
//        $admin = md5('admin');
//        dump($admin);
        $this->display('public:login');
    }
    public function dealLogin(){
        header('content-type:text/html;charset="utf-8"');
        if(!IS_POST)  $this->error('非法操作');
        $data['username'] = I('post.username','','trim,htmlspecialchars');
        $data['passwords'] = md5(I('post.passwords','','trim,htmlspecialchars'));
        $model = D('Admin');
        $result = $model->field('id')->where($data)->count();
//        $where = [
//            'username'=>$username,
//            'passwords'=>$passwords
//        ];
        $active = $model->where($data)->field('status')->find();
        dump($active);
        switch($active){
            case null:
                $this->error('此帐号不存在！！');
                break;
            case 0:
                $this->error('此帐号还未激活！');
                break;
            case 2:
                $this->error('此帐号还已经被拉黑失效！');
                break;
            default:
                if($result){
//                    $this->success('登录成功', 'manage');
//                    dump(U('Admin/Index/manage'));
//                    $this->success('登录成功！',U('Index/manage'));

                    $this->redirect('Index/manage', array('id' => 2), 1,'页面跳转中');
//                    $this->redirect('New/category', 5, '页面跳转中...');
                    redirect('Index/manage', 5, '1');
                }else{
                    $this->error('操作失败');
                }
        }

    }
    public function manage(){
        $this->display('Public/base');

    }

}
<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2015/3/1
 * Time: 13:41
 */
namespace Home\Controller;
use Think\Controller;
class NewsController extends Controller {
    /*
     * 新闻列表
     */
    public function index(){
        $news = M('news');
        $list = $news->limit(10)->select();
        $count = $news->field('id')->count();
        $this->assign('list',$list);
        $this->assign('count',$count);
//        $Page = new \Think\Page($count,5);// 实例化分页类 传入总记录数和每页显示的记录数(25)
//        $show = $Page->show();// 分页显示输出
//
//        $list = $news->limit($Page->firstRow.','.$Page->listRows)->select();
//        $this->assign('list',$list);// 赋值数据集
//        $this->assign('page',$show);// 赋值分页输出
        $this->display();
    }
    /*
     * 新闻详细
     */
    public function showContent($id){
        $newsid = $id;
        $news = M('news');
        $where['id'] = $newsid;
        $data = $news->where($where)->select();
        $this->assign('data',$data);
//        dump($data);
        $this->display('content');
    }
}
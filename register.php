<?php
    //获取请求提交的数据
    $uname = $_REQUEST["uname"];     //前端页面中name属性的值
    $upwd =$_REQUEST["upwd"];        //确认密码不用获取，获取一个密码就可以
    $email =$_REQUEST["emil"];

    $require("../init.php");        //连接到数据库
    //ping sql语句并执行
    $sql = "insert into useraccount(username,password,email) values('$uname','$upwd','$email')";
    //执行sql语句
    $result = mysqli_query($conn,$sql);
    //根据结果给出响应
    if($result == true) {
        echo "register success";
    }else{
        echo "register fail";
    }

?>

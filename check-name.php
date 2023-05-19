<?php
    //连接数据库
    require("../init.php");
    //接收前端传过来的username
    $uname = $_REQUEST("uname");
    //拼接sql并查询uname是否存在
    $sql = "SELECT * FROM useraccount username = '$uname'";
    $result = mysqli_query($conn,$sql);
    //抓取当前uname对应的数据，如果为空则数据库中没有相同的用户名存在
    $row = mysqli_fetch_row($result);
    //根据查询结果输出相应信息
    if($row == null){
        echo "pass";
    }else{
        echo "user already exist";
    }

?>
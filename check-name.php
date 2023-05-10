<?php
    //连接数据库
    require("..init.php");
    //接收前端传过来的username
    $uname = $_REQUEST("username");
    //拼接sql并查询uname是否存在
    $sql = "SELECT * FROM useraccount username = '$uname'";
    $result = mysqli_query($conn,$sql);
    //根据查询结果输出相应信息
    $row = mysqli_fetch_row($result);
    if($row == null){
        echo "pass";
    }else{
        echo "user already exist";
    }

?>
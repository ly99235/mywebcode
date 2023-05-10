<?php
    //获取请求提交数据
    $uname = $_REQUEST["username"];
    $upwm =$_REQUEST["psw"];
    $ucompwm =$_REQUEST["compsw"];
    $email =$_REQUEST["emil"];

    $require("initsql.php");

    $sql = "insert into useraccount(username,password,email) values('$uname','$upwm','$email')";
    
    $result = mysqli_query($conn,$sql);

    if($result == true) {
        echo "register success";
    }else{
        eecho "register fail";
    }

?>

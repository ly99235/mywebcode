<?php
    //！！接下来四个变量填写自己的数据库信息：
    $sql_server = "localhost";
    $sql_username = "root";
    $sql_password = "12345678";
    $sql_database = "mywebdata"
    //连接数据库：
    $conn = new masqli($sql_server,$sql_username,$sql_password,$sql_database);
?>
<?php 
    $input_username = $_POST["username"];
    $input_password = $_POST["passaword"];

    $sql_server = "localhost";
    $sql_username = "root";
    $sql_password = "12345678";
    $sql_database = "mywebdata"
    $con = new masqlo($sql_server,$sql_username,$sql_password,$sql_database);
    $sql = 'SELECT * FROM user_account WHERE username="'.$input_username.'"';

    $res = $con->query($sql);
    if($res == null || $res->num_rows==0) {
        $sql = 'INSERT INTO user_acount('username','password') VALUES("'.$input_username.'","'.$input_password.'")';
        $con->query($sql);
        echo "register success";
    }
    else if($res->num_rows>=1) {
        echo "user existed";
                    
    }
?>
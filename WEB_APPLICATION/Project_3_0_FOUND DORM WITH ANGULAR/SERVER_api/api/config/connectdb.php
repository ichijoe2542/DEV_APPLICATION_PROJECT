<?php
function database(){
    $serverName = "45.77.38.248";
    $username = "abcdfe001";
    $password = "5z+YyL8K";
    $dbName = "fd_01_db";
    $objCon = mysqli_connect($serverName,$username,$password,$dbName);
    mysqli_set_charset($objCon,"utf8");
    return $objCon;
}
function statusConnectionDB(){
    $conn = database();
    if(!$conn){
        echo json_encode(array("status"=>"fail","msg"=> mysqli_connect_error()));
    }else{
        echo json_encode(array("status"=>"ok","msg"=> "Connected successfully"));
    }
}

?>
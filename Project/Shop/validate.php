<?php
    $name = $_REQUEST['name'];
    $password = $_REQUEST['password'];

    if($name === 'ابراهیم' && $password === '852563') {
        header(sprintf("location:panel.php"));
    }
    else {
        header(sprintf("location:shop.php"));
    }
?>
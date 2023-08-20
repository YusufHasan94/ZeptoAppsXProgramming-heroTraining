<?php
    session_start();

    if(isset($_POST['login'])){
        if($valid_credentials){
            $_SESSION['username'] = $_POST['username'];
            header('Location: dashboard.php');
            exit;
        }
        else{
            $error_msg = 'Invalid Credentials';
        }
    }
    if(isset($_POST['logout'])){
        session_destroy();
        header('Location: login.php');
        exit;
    }

?>
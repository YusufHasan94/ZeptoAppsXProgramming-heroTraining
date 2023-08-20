<!DOCTYPE html>
<html>
<head>
    <title>Session Example</title>
</head>
<body>
    <form method="POST" action="">
        <label for="input">Enter a number:</label>
        <input type="text" name="number" id="input">
        <button type="submit" name="check">Check Condition</button>
        <button type="submit" name="close">Close Session</button>
    </form>
</body>
</html>


<?php
    session_start();
    if (isset($_POST['check'])) {
        $number = $_POST['number'];
        $printWord = "";
        if ($number % 2 == 0) {
            $printWord = "The number $number is even.";
        } else {
            $printWord = "The number $number is odd.";
        }
        echo $printWord;
    } elseif (isset($_POST['close'])) {
        $printWord = "";
        session_unset();
        session_destroy();
        echo "Session closed.";
    }
?>

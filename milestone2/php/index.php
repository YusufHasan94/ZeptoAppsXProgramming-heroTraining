<?php
    //variable
    $firstName = "Yusuf";
    $lastName ="Hasan";
    $mobile = 01763725564;
    $email = "yhpolok@gmail.com";
    $married = false;
    print "$firstName $lastName $mobile $email $married <br>";

    //constant
    define("theta", 3.00);
    echo theta;

    //data types
    echo "<br>";
    $integer = 42;
    $float = 3.14;
    $string = "Hello";
    $boolean = true;

    echo "$integer , $float, $string, $boolean";

    //loops
    echo "<br>";
    for ($i = 0; $i < 100; $i++) {
        echo "$i <br>";
    }

    //arrays
    $colors = array("Red", "Green", "Blue");

    for($i=0; $i<sizeof($colors); $i++){
        echo $colors[$i] ;
    }
   

        //problem 1
        $count = 5;
        while($count<=15){
            echo "$count ";
            $count++;
        }
        echo "<br>";
    
        //problem2
        $marks = 40;
        if($marks>=80){$grade = "A+";} 
        else if($marks>=70){$grade = "A";} 
        else if($marks>=60){$grade = "A-";}
        else if($marks>=50){$grade = "B+";}
        else if($marks>=40){$grade = "B";}
        else {$grade = "F";}
        echo "Student grade: $grade";
    
        //problem3
        echo "<br>";
        for($row=1; $row<=5; $row++){
            for($star=1;$star<=$row;$star++){
                echo "*";
            }
            echo "<br>";
        }


?>


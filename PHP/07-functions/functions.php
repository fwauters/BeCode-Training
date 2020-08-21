<?php

// First exercise

$txt = "According to a researcher at Cambridge University, it doesn't matter in what order the letters in a word are, the only important thing is that the first and last letter be at the right place. The rest can be a total mess and you can still read it without problem. This is because the human mind does not read every letter by itself but the word as a whole.";
$words = explode(" ", $txt);

foreach($words as $word) {
    echo str_shuffle($word)." ";
}

?><br /><?php

// Serie of exercises

$test = "odile";
echo ucfirst($test);

?><br /><?php

echo date("Y");

?><br /><?php

date_default_timezone_set('Europe/Brussels');
$tz = date_default_timezone_get();
echo date("d/m/Y H:i:s");

?><br /><?php

function Sum($a, $b) {
    if (is_numeric($a) == true AND is_numeric($b) == true) {
        return ($a + $b);
    }
    else return "Error: at least one argument is not a number.";
}
echo Sum(13, 42);

?><br /><?php

function makeAcronym($string) {
    $arr = explode(" ", $string);
    foreach($arr as $elem) {
        $elem = ucfirst(substr($elem, 0, 1));
        echo $elem;
    }
}
makeAcronym("this is a test");

?><br /><?php

function replaceAE($word) {
    $arr = explode("ae", $word);
    return $arr[0]."æ".$arr[1];
}
echo replaceAE("caecotrophie");

?><br /><?php

function oppositeAE($word) {
    $arr = explode("æ", $word);
    return $arr[0]."ae".$arr[1];
}
echo oppositeAE("cæcotrophie");

?><br /><?php

function errorMsg($msg, $className = "info") {
    echo "<div class=".$className.">".ucfirst($className).": ".$msg.".</div>" ;
}
errorMsg("Incorrect email address", "error");

?><br /><?php

function wordsGenerator() {
    $chars = "abcdefghijklmnopqrstuvwxyz";
    $nA = rand(1, 5);
    $nB = rand(7, 15);
    for($i = 0; $i < $nA; $i++) {
        $wA .= $chars[rand(0, 25)];
    }
    for($j = 0; $j < $nB; $j++) {
        $wB .= $chars[rand(0, 25)];
    }
    return "<p>".$wA . " & " . $wB."</p>";
}
?><h2>Generate two random words</h2><?php
echo wordsGenerator();
?><form><input TYPE="button" onClick="history.go(0)" VALUE="Generate"></form>

<br /><?php

$string = "STOP YELLING I CAN'T HEAR MYSELF THINKING!!";
echo strtolower($string);

?><br /><?php

function calculate_cone_volume($ray, $height) {
    $volume = pow($ray, 2) * M_PI * $height * (1/3);
    echo 'The volume of a cone which ray is '.$ray.' and height is '.$height.' = '.$volume.' cm<sup>3</sup><br />';
}
calculate_cone_volume(5, 2);
calculate_cone_volume(3, 4);

?>
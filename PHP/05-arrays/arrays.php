<?php

// First serie of exercises

$countries = array( 'Belgium', 'France' , 'Germany', 'Netherlands', 'Ukraine' );
echo $countries[2];

?><br /><?php

$family = array('Philippe', 'Ginette', 'Maeva', 'Marie');
print_r($family);

?><br /><?php

$recipes = array("Jack Daniel's Burgers", "Shrimp pasta al Diablo", "Chili con carne");
print_r($recipes);

?><br /><?php

$movies = array("Pulp Fiction", "From dusk till dawn", "The Devil's Rejects", "Fear and Loating in Las Vegas");
print_r($movies[0]);

?><br /><?php

// Second serie of exercises

$me = array(
    "firstname" => "François",
    "lastname" => "Wauters",
    "age" => 29,
    "favSeason" => "winter",
    "likeSoccer" => false
);

$me["hobbies"] = array("code", "video games", "cooking", "movies");

$girlfriend = array(
    "firstname" => "Maeva",
    "lastname" => "Dehaese",
    "age" => 24,
    "favSeason" => "summer",
    "likeSoccer" => false,
    "hobbies" => array("social networks", "video games", "cooking", "movies")
);

$me['girlfriend'] = $girlfriend;
echo '<pre>';
print_r($me);
echo '</pre>';

?><br /><?php

// Third serie of exercises

echo count($girlfriend["hobbies"]);

?><br /><?php

echo count($me["hobbies"]);

?><br /><?php

echo (count($girlfriend["hobbies"])) + (count($me["hobbies"]));

$me['lastname'] = "Durand";

?><br /><?php

$intersecArr = array_intersect($me['hobbies'], $me['girlfriend']['hobbies']);
$mergedArr = array_merge($me['hobbies'], $me['girlfriend']['hobbies']);

echo '<pre>';
print_r($intersecArr);
print_r($mergedArr);
echo '</pre>';

?><br /><?php

$web_dev = array(
    'frontend' => array(),
    'backend' => array()
);

array_push($web_dev['frontend'], "XHTML");
array_push($web_dev['backend'], "Ruby on Rails");
array_push($web_dev['frontend'], "CSS");
array_push($web_dev['frontend'], "Flash");
array_push($web_dev['frontend'], "JavaScript");

echo '<pre>';
print_r($web_dev);
echo '</pre>';

$web_dev['frontend'][0] = "HTML";
unset($web_dev['frontend'][2]);

echo '<pre>';
print_r($web_dev);
echo '</pre>';

?>
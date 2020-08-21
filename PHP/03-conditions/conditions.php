<?php
/**
 * Series of exercises on PHP conditional structures.
*/  

// 1.1 Clean your room Exercise 

$room_is_filthy = false;

if( $room_is_filthy == true ){
	echo "Yuk, Room is dirty : let's clean it up !";
	cleanup_room();
	echo "<br>Room is now clean!";
	$room_is_filthy = false;
} else {
	echo "<br>Nothing to do, room is neat.";
}

?><br /><?php

// 1.2 Clean your room Exercise, improved

// Create the array of possible states
$possible_states = array('health hazard', 'filthy', 'dirty', 'clean', 'immaculate');

// When testing, change the index value to navigate to the possible array values
$room_filthiness = $possible_states[0]; 

if( $room_filthiness == 'health hazard' ){
	echo "Yuk, Room is Disgusting! Let's clean it up !";
} else if( $room_filthiness == 'filthy' ){
    echo "Yuk, Room is filthy : let's clean it up !";
} else if( $room_filthiness == 'dirty' ){
	echo "Yuk, Room is dirty : let's clean it up !";
// ...
} else {
	echo "<br>Nothing to do, room is neat.";
}

?><br /><?php

// 2. "Different greetings according to time" Exercise

// How to get the current time in PHP ? Google is your friend ;-)

date_default_timezone_set('Europe/Brussels');
$tz = date_default_timezone_get();

$now = date("H:i:s");
echo $now;

?><br /><?php

// Test the value of $now and display the right message according to the specifications.

$hour = date("H");
if ($hour < 10) {
    echo 'Good morning !';
} else if ($hour < 13) {
    echo 'Good day !';
} else if ($hour < 17) {
    echo 'Good afternoon !';
} else if ($hour < 22) {
    echo 'Good evening !';
} else {echo 'Good night !';}

?><br /><br /><?php

// 3, 4 & 5. "Different greetings according to age, gender and mothertongue" Exercise

if (isset($_GET['english'])) {
    if ($_GET['english'] == 'yes') {
        $greet = 'Hello';
    }
    if ($_GET['english'] == 'no') {
        $greet = 'Aloha';
    }
}

if (isset($_GET['age']) AND isset($_GET['gender'])){
    $a = $_GET['age'];
    $g = $_GET['gender'];
    switch($g) {
        case 'man':
            if ($a < 12) {
                $person = 'Boy';
            } else if ($a < 18) {
                $person = 'Young-man';
            } else if ($a < 115) {
                $person = 'Mister';
            } else {
                $person = 'Mr. Robot';
            }
        break;
        case 'woman':
            if ($a < 12) {
                $person = 'Girl';
            } else if ($a < 18) {
                $person = 'Miss';
            } else if ($a < 115) {
                $person = 'Madam';
            } else {
                $person = 'Mrs. Robot';
            }
        break;
    }
} else {$person = 'Complete the form if you want to be greeted properly';}

?>

<p>Greetings form:</p>
<form method="get" action="">
    <label for="english">Do you speak English ?</label>
    <input type="radio" name="english" value="yes">
    <label for="yes">Yes</label>
    <input type="radio" name="english" value="no">
    <label for="no">No</label>
    <br />
    <label for="gender">Man or Woman ?</label>
    <input type="radio" name="gender" value="man">
    <label for="man">Man</label>
    <input type="radio" name="gender" value="woman">
    <label for="woman">Woman</label>
    <br />
	<label for="age">How old are you ?</label>
	<input type="" name="age">
	<input type="submit" name="submit" value="Greet me now">
</form>

<p><?php echo $greet; ?> <?php echo $person; ?> !</p><br />

<?php

// 6 & 7. "The Girl Soccer team + without ELSE" Exercise

$gstMsg = "Sorry you don't fit the criteria";
if (isset($_GET['gstAge']) AND isset($_GET['gstGender'])) {
    if ($_GET['gstAge'] > 20 AND $_GET['gstAge'] < 41 AND $_GET['gstGender'] == 'woman') {
        $gstMsg = 'Welcome to the Team !';
    }
}

?>

<p>Girl Soccer Team form:</p>
<form method="get" action="">
    <label for="gstGender">Man or Woman ?</label>
    <input type="radio" name="gstGender" value="man">
    <label for="man">Man</label>
    <input type="radio" name="gstGender" value="woman">
    <label for="woman">Woman</label>
    <br />
	<label for="gstAge">How old are you ?</label>
	<input type="" name="gstAge">
	<input type="submit" name="submit" value="Can I play ?">
</form>
<p><?php echo $gstMsg; ?></p><br />

<?php

// 8. "School sucks !" Exercise

if (isset($_GET['grade'])) {
    $grade = $_GET['grade'];
    if ($grade < 4){
        $note = 'This work is really bad. What a dumb kid!';
    } else if ($grade < 10) {
        $note = 'This is not sufficient. More studying is required.';
    } else if ($grade == 10) {
        $note = 'Barely enough!';
    } else if ($grade < 15) {
        $note = 'Not bad!';
    } else if ($grade < 19) {
        $note = 'Bravo, bravissimo!';
    } else if ($grade < 21) {
        $note = 'Too good to be true : confront the cheater!';
    } else {$note = 'The grading is on 20 !';}
} else {$note = 'Enter a grade to evaluate';}

?>

<p>Grading form:</p>
<form method="get" action="">
    <input type="" name="grade">
	<input type="submit" name="submit" value="submit grade">
</form>
<p><?php echo $note; ?></p>
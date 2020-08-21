<?php

if (isset($_GET['grade'])) {
    $grade = $_GET['grade'];
    switch($grade) {
        case 0:
            $note = 'This work is really bad. What a dumb kid!';
        break;
        case 1:
            $note = 'This work is really bad. What a dumb kid!';
        break;
        case 2:
            $note = 'This work is really bad. What a dumb kid!';
        break;
        case 3:
            $note = 'This work is really bad. What a dumb kid!';
        break;
        case 4:
            $note = 'This work is really bad. What a dumb kid!';
        break;
        case 5:
            $note = 'This is not sufficient. More studying is required.';
        break;
        case 6:
            $note = 'This is not sufficient. More studying is required.';
        break;
        case 7:
            $note = 'This is not sufficient. More studying is required.';
        break;
        case 8:
            $note = 'This is not sufficient. More studying is required.';
        break;
        case 9:
            $note = 'This is not sufficient. More studying is required.';
        break;
        case 10:
            $note = 'Barely enough!';
        break;
        case 11:
            $note = 'Not bad!';
        break;
        case 12:
            $note = 'Not bad!';
        break;
        case 13:
            $note = 'Not bad!';
        break;
        case 14:
            $note = 'Not bad!';
        break;
        case 15:
            $note = 'Bravo, bravissimo!';
        break;
        case 16:
            $note = 'Bravo, bravissimo!';
        break;
        case 17:
            $note = 'Bravo, bravissimo!';
        break;
        case 18:
            $note = 'Bravo, bravissimo!';
        break;
        case 19:
            $note = 'Too good to be true : confront the cheater!';
        break;
        case 20:
            $note = 'Too good to be true : confront the cheater!';
        break;
        default: $note = 'The grading is on 20 !';
    }
} else {$note = 'Enter a grade to evaluate';}

?>

<p>Grading form:</p>
<form method="get" action="">
    <input type="" name="grade">
	<input type="submit" name="submit" value="submit grade">
</form>
<p><?php echo $note; ?></p>

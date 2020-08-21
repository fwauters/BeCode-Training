<?php

if (isset($_GET['gender'])) {
    $gender = $_GET['gender'];
    $hello = ($gender == 'F') ? 'Hello Miss !' : 'Hello Mister !';
}

?>

<form method="get" action="">
    <label for="gender">Man or Woman ?</label>
    <input type="radio" name="gender" value="M">
    <label for="M">Man</label>
    <input type="radio" name="gender" value="F">
    <label for="F">Woman</label>
    <input type="submit" name="submit" value="Greet me now">
</form>

<p><?php echo $hello; ?></p>
<?php

if (isset($_GET['gender'])) {
    $gender = $_GET['gender'];
    $gif = ($gender == 'H') ? 'https://media.giphy.com/media/26gsaafwvzDkN7wJ2/giphy.gif' :
        (($gender == 'C') ? 'https://media.giphy.com/media/ACVoiOEjbA6nC/giphy.gif' :
            'https://media.giphy.com/media/ZJlesIV8TnabS/giphy.gif');
}

?>

<form method="get" action="">
    <label for="gender">What the f*** are you ?!</label>
    <input type="radio" name="gender" value="H">
    <label for="H">Are you human ?</label>
    <input type="radio" name="gender" value="C">
    <label for="C">Are you a cat ?</label>
    <input type="radio" name="gender" value="U">
    <label for="U">Are you a unicorn ?</label>
    <input type="submit" name="submit" value="Submit">
</form>

<img src=<?php echo $gif; ?> alt="Gif of your choice dancing">
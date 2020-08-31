<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP forms</title>
</head>
<body>
    <?php
    echo "<pre>";
    print_r($_POST);
    ?>
    <form method="post" action="forms.php">
        <label for="fullname">What's your name ?</label>
        <input name="fullname" type="text">

        <label for="age">What's your age ?</label>
        <input name="age" type="number">

        <label for="artist">Do you prefer Warhol or Basquiat ?</label>       
        <label for="warhol">Warhol</label>
        <input name="artist" type="radio" value="warhol">
        <label for="basquiat">Basquiat</label>
        <input name="artist" type="radio" value="basquiat">
        
        <label for="life">Tell me about your life.</label>
        <textarea name="life" cols="30" rows="10"></textarea>

        <input type="submit" value="Submit">
    </form>
</body>
</html>
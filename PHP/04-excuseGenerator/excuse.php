<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap" rel="stylesheet"> 
    <link rel="stylesheet" href="./assets/css/style.css">

    <title>Fake Excuse Notes Generator</title>
</head>
<body>
    <header>
        <img src="./assets/img/fake-stamp.png" alt="FAKE stamp" class="fakeStamp" width="150px">
        <h1>Excuse Notes Generator</h1>
    </header>
    <main>

        <?php
            date_default_timezone_set('Europe/Brussels');
            $tz = date_default_timezone_get();
            $day = date("l");
            $date = date("jS F Y");

            $child = $_GET["child"];
            $gender = ($_GET["gender"] == "boy") ? $gender = "son" : $gender = "daughter";
            $pron = ($_GET["gender"] == "boy") ? $pron = "He" : $pron = "She";
            $poss = ($_GET["gender"] == "boy") ? $poss = "his" : $poss = "her";
            $teacher = $_GET["teacher"];

            $illExcuses = array(
                $pron . " has been diagnosed with halitosis.",
                $pron . " sprained " . $poss . " uterus.",
                $pron . " had temporary amnesia.");
            $deaEx = $pron . " had just lost " . $poss . " ";
            $deaExcuses = array(
                $deaEx . "cat.",
                $deaEx . "goldfish.",
                $deaEx . "pet panda."
            );
            $actExcuses = array(
                $pron . " had to do a favor for the pope.",
                $pron . " had a religious holiday, the feast of the Somnambulant intermission.",
                $pron . " had go climb the mount Everest."
            );
            $othExcuses = array(
                "Our dog ate " . $poss . " only pair of shoes.",
                $pron . " was abducted by aliens.",
                "I couldn't find my car keys so I couldn't drive " . $pron . "."
            );
            $n = rand(0,2);
            switch ($_GET["excuse"]) {
                case "illness": $excuse = $illExcuses[$n];
                break;
                case "death": $excuse = $deaExcuses[$n];
                break;
                case "activity": $excuse = $actExcuses[$n];
                break;
                case "other": $excuse = $othExcuses[$n];
                break;
            }

            $note = "Welcome in [FAKE] Excuse Notes Generator.<br />
            Complete the form and submit the informations to generate an appropriate excuse note.<br />
            The four questions must be answered for the program to work." . $rand;
            if (strlen($child) != 0 AND isset($_GET["gender"])
            AND strlen($teacher) != 0 AND isset($_GET["excuse"])) {
                $d = true;
                $note = "Dear professor " . $teacher . ",<br /> Please excuse my " . $gender . " " . $child
                . " for " . $poss . " absence of " . $day . ", the " . $date . ". " . $excuse;
            }
        ?>

        <article class="board">
            <img src="./assets/img/green-board.png" alt="School green board" width="600px">
            <p class="excuse">
                <?php echo $note; ?>
            </p>
        </article>

        <article class="form">
            <form method="get" action="">
                <section>
                    <label for="child">What's the full name of the child ?</label>
                    <input type="" name="child" class="input">
                </section>
                <section>
                    <label for="gender">What's the gender of the child ?</label>
                    <div class="radioRow">
                        <input type="radio" name="gender" value="boy">
                        <label for="boy">Boy</label>
                        <input type="radio" name="gender" value="girl">
                        <label for="girl">Girl</label>
                    </div>
                </section>
                <section>
                    <label for="teacher">What's the lastname of the teacher ?</label>
                    <input type="" name="teacher" class="input">
                </section>
                <section>
                    <label for="excuse">What's the reason of the absence ?</label>
                    <div class="radioCol">
                        <input type="radio" name="excuse" value="illness">
                        <label for="illness">Illness</label>
                        <input type="radio" name="excuse" value="death">
                        <label for="death">Death</label>
                        <input type="radio" name="excuse" value="activity">
                        <label for="activity">Activity</label>
                        <input type="radio" name="excuse" value="other">
                        <label for="other">Other</label>
                    </div>
                </section>
                <section>
                    <input type="submit" name="submit" value="Submit" class="btn">
                </section>
            </form>
        </article>

    </main>

</body>
</html>
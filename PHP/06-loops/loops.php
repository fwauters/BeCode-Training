<?php

$pronouns = array ('I', 'You', 'He/She','We', 'You', 'They');

foreach($pronouns as $pronoun) {
    $code = ($pronoun == 'He/She') ? $code = 'codes' : $code = 'code';
    echo $pronoun . " " . $code . '<br />';
}

?><br /><?php

$n = 1;
while($n < 121) {
    echo $n . " ";
    $n++;
}

?><br /><?php

for($m = 1; $m < 121; $m++) {
    echo $m . " ";
}

?><br /><?php

$startup = array("Jean", "Pierre", "Paul", "Jacques", "Georgette");
foreach($startup as $person) {
    echo $person . " ";
}

?><br /><?php

$countries = array(
    "BE" => "Belgium",
    "CZ" => "Czechia",
    "DK" => "Denmark",
    "FI" => "Finland",
    "FR" => "France",
    "DE" => "Germany",
    "IT" => "Italy",
    "LU" => "Luxembourg",
    "ES" => "Spain",
    "GB" => "United Kingdom"
);

?><select>
    <option value="">-- Select a Country --</option><?php

foreach($countries as $country) {
    $iso = key($country);
    echo "<option value=".$iso.">".$country."</option>";
}

?></select>
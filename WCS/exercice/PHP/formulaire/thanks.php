<?php
$error = [];

if (!filter_var($_POST['user_email'], FILTER_VALIDATE_EMAIL) ){
    $error['Error email'] = 'invalid email';
}

if (empty($_POST['user_name'])){
    $error['Error user_name'] = 'invalid user_name';
}

if (empty($_POST['user_lastname'])){
    $error['Error user_lastname'] = 'invalid user_lastname';
}

if (empty($_POST['test'])){
    $error['Error test'] = 'invalid thematic';
}

if (empty($_POST['user_phone_number'])){
    $error['Error user_phone_number'] = 'invalid user_phone_number';
}

if (empty($_POST['user_message'])){
    $error['Error user_message'] = 'invalid user_message';
}
if (empty($error)){
    echo 'Merci ' . $_POST['user_lastname'] . ' ' .  $_POST['user_name'] . ' de nous avoir contacté à propos du ' . $_POST['test']  . '.' . '<br>'
        . '<br>' .
        'Un de nos conseiller vous contactera soit à l\' adresse ' . $_POST['user_email'] . ' ou par téléphone au ' . $_POST['user_phone_number'] . ' dans les plus brefs délais pour traiter votre demande : ' . '<br>'
        . '<br>' .
        $_POST['user_message'];
}else{
    var_dump($error);
}

?>

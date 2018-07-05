<?php

$recepient = "klv91@i.ua";
$sitename = "kambio.ua";

//$email = trim($_POST["email"]);
$phone = trim($_POST["phone"]);
$text = trim($_POST["name"]);
//$message = "Email: $email";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $phone, $text, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
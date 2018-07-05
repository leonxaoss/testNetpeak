<?php

$name = $_POST['fname']; // собираем введенные данные и записываемв переменные
$phone = $_POST['phone'];
$mail = $_POST['mail'];
$text .= "Имя: $name \n";
$text .= "Телефон: $phone \n";
$text .= "Емайл: $mail \n";
if (!empty($name) && !empty($phone) && !empty($mail)) //если все переменные имеют значения выполняем запись в файл
{
    $file = fopen ("message.txt", "a+"); //открываем для перезаписи файл message.txt лежаший в одной папке с текущей страницей
    fwrite ($file,$text); // пишем в файл
    fclose ($file); // закрываем файл
}
<?php

/* https://api.telegram.org/bot5886449535:AAF5jGviPTCy6iMp3q46V5DHChMXLeX9D0Y/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

// поля из формы
$name = $_POST['name'];
$tel = $_POST['tel'];
// $email = $_POST['user_email'];
// $text = $_POST['user_text'];
// токен нашего бота из botFather
$token = "5886449535:AAF5jGviPTCy6iMp3q46V5DHChMXLeX9D0Y";
// $chat_id = "https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXXXXXX/getUpdates";
$chat_id = "6000714941";
$arr = array(
  'Імя користувача: ' => $name,
  'Телефон: ' => $tel,
  // 'Email' => $email,
  // 'text' => $text
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thank-you2.html');
} else {
  echo "Error";
}
?>

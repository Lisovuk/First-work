<?php

/* https://api.telegram.org/bot5856821202:AAGdhsxVipEjG4AA5w_vQ1Ktu_vRKWyl4S8/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

// поля из формы
$name = $_POST['name'];
$tel = $_POST['tel'];
// $email = $_POST['user_email'];
// $text = $_POST['user_text'];
// токен нашего бота из botFather
$token = "5856821202:AAGdhsxVipEjG4AA5w_vQ1Ktu_vRKWyl4S8";
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
  header('Location: thank-you.html');
} else {
  echo "Error";
}
?>

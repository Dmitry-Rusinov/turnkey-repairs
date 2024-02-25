<?php
// Подключение библиотеки
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Получение данных
$json = file_get_contents('php://input'); // Получение json строки
$data = json_decode($json, true); // Преобразование json

$name = $data['name'];
$about = $data['about'];
$phone = $data['phone'];
$email = $data['email'];

$title = 'Заявка с сайта'; // Название письма
$body = '<p>Имя: <strong>'.$name.'</strong></p>'.
'<p>Сообщение пользователя: <strong>'.$about.'</strong></p>'.
'<p>Телефон: <strong>'.$phone.'</strong></p>'.
'<p>Email: <strong>'.$email.'</strong></p>';

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
  $mail->isSMTP();
  $mail->CharSet = 'UTF-8';
  $mail->SMTPAuth   = true;

  // Настройки почты отправителя
  $mail->Host       = 'smtp.yandex.com'; // SMTP сервера вашей почты
  $mail->Username   = 'kachek96@yandex.ru'; // Логин на почте
  $mail->Password   = 'bmnkhdoiwqzhfrbs'; // Пароль на почте
  $mail->SMTPSecure = 'ssl';
  $mail->Port       = 465;

  $mail->setFrom('kachek96@yandex.ru', 'Заявка с сайта'); // Адрес самой почты и имя отправителя

  // Получатель письма
  $mail->addAddress('kachek96@yandex.ru');

  // Отправка сообщения
  $mail->isHTML(true);
  $mail->Subject = $title;
  $mail->Body = $body;

  $mail->send('d');

  // Сообщение об успешной отправке
  echo ('Сообщение успешно отправлено');

} catch (Exception $e) {
  header('HTTP/1.1 400 Bad Request');
  echo('Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}');
}

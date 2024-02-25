<?php
// Подключение библиотеки
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Получение данных
$json = file_get_contents('php://input'); // Получение json строки
$data = json_decode($json, true); // Преобразование json

$range = $data['rangeValue'];
$apartment = $data['roomValue'];
$room = $data['qtyRoomValue'];
$phone = $data['phone'];

$title = 'Заявка с сайта: расчес стоимости ремонта'; // Название письма
$body = '<p>Площадь квартиры: <strong>'.$range.'</strong> м2</p>'.
'<p>Тип жилья: <strong>'.$apartment.'</strong></p>'.
'<p>Количество комнат: <strong>'.$room.'</strong></p>'.
'<p>Телефон для связи: <strong>'.$phone.'</strong></p>';

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

  $mail->setFrom('kachek96@yandex.ru', 'Заявка с сайта: расчес стоимости ремонта'); // Адрес самой почты и имя отправителя

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

<?php
if (isset ($_POST['email'])) {
  $to = "kachek96@yandex.ru";
  $subject = "Заполнена контактная форма на сайте ".$_SERVER['HTTP_REFERER'];
  $message = /* "Имя пользователя: ".$_POST['nameFF']. */"\nEmail пользователя ".$_POST['email']/* ."\nТелефон пользователя ".$_POST['telFF']."\nСообщение: ".$_POST['projectFF'] */."\n\nАдрес сайта: ".$_SERVER['HTTP_REFERER'];
}
?>
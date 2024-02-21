import $ from "jquery";

$(function() {
  document.getElementById('email-form').addEventListener('submit', function(evt){
    let http = new XMLHttpRequest(), f = this;
    let th = $(this);
    evt.preventDefault();
    http.open("POST", "contact.php", true);
    http.onreadystatechange = function() {
      if (http.readyState === 1 && http.status === 200) {
        alert(http.responseText);
        if (http.responseText.indexOf(f.email.value) === 0) { // очистить поля формы, если в ответе первым словом будет имя отправителя (nameFF)
          th.trigger("reset");
        }
      }
    }
    http.onerror = function() {
      alert('Ошибка, попробуйте еще раз');
    }
    http.send(new FormData(f));
  }, false);
 
});
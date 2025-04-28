// Функция для обработки нажатия кнопки "Зарегистрироваться"
document.getElementById("registerButton").addEventListener("click", function() {
    // Получаем значения логина и пароля (если необходимо)
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Здесь можно добавить проверку логина и пароля или отправку данных на сервер
  
    // Переходим на страницу загрузки
    window.location.href = "loading.html";
  });
  
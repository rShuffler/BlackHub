window.onload = function() {
  // Имя пользователя, которое мы можем получить динамически (например, из локального хранилища или передать через параметры)
  let nickname = "Имя пользователя";  // Здесь можно динамически подставить ник
  
  // Показываем имя пользователя в элементе с id "nickname"
  document.getElementById("nickname").textContent = nickname;

  // Пример работы с загрузочной полосой
  let progress = document.querySelector(".progress");
  let loadingText = document.getElementById("loadingText");
  let checkingText = document.getElementById("checkingText");

  let loadProgress = 0;

  // Таймер для смены текстов
  let textSwitchInterval = 4000; // 4 секунды на смену текста
  let texts = ["Loading BlackHub", "Checking for Updates"];
  let currentTextIndex = 0;
  
  // Меняем тексты каждые 4 секунды
  setInterval(function() {
    currentTextIndex = (currentTextIndex + 1) % texts.length;
    loadingText.textContent = texts[currentTextIndex];
  }, textSwitchInterval);

  // Постепенно увеличиваем прогресс бар
  let interval = setInterval(function() {
    if (loadProgress < 100) {
      loadProgress += 2;
      progress.style.width = loadProgress + "%";
    }
  }, 100);

  // Через 8 секунд переходим на главную страницу
  setTimeout(function() {
    window.location.href = "home.html";  // Переход на главную страницу
  }, 8000); // 8 секунд
};

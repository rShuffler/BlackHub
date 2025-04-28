function showSection(section) {
    const sections = document.querySelectorAll('.settings-section');
    const links = document.querySelectorAll('.settings-sidebar ul li a');
  
    // Скрываем все разделы
    sections.forEach((sec) => sec.style.display = 'none');
    
    // Убираем активный класс у всех ссылок
    links.forEach((link) => link.classList.remove('active'));
  
    // Показываем выбранный раздел
    document.getElementById(section).style.display = 'block';
  
    // Добавляем активный класс на текущую вкладку
    event.target.classList.add('active');
  }
  
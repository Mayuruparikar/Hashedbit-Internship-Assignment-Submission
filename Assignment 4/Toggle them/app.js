function changeTheme() {
    var appElement = document.getElementById('app');
    var buttonElement = document.getElementById('swap');
  
    if (appElement.classList.contains('day')) {
      
      appElement.classList.remove('day');
      appElement.classList.add('night');
  
      buttonElement.classList.remove('button_day');
      buttonElement.classList.add('button_night');
  
      buttonElement.textContent = 'Toggle to day theme';
    } else {
      
      appElement.classList.remove('night');
      appElement.classList.add('day');
  
      buttonElement.classList.remove('button_night');
      buttonElement.classList.add('button_day');
  
      buttonElement.textContent = 'Toggle to night theme';
    }
  }
  
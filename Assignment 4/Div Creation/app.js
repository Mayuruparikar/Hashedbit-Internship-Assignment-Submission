function createDiv(width, height, text) {
    var newDiv = document.createElement('div');
    newDiv.style.width = width + 'px';
    newDiv.style.height = height + 'px';
    newDiv.style.color="white"
    newDiv.style.backgroundColor="blue"
    newDiv.textContent = text;
  
    // Append the new div to the #container div
    document.getElementById('container').appendChild(newDiv);
  }
  createDiv(200, 100, 'Hello, World!');
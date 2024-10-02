// Select the button and the text
const colorButton = document.getElementById('colorButton');
const body = document.body;

// Function to change background color randomly
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Add event listener to the button
colorButton.addEventListener('click', function() {
    body.style.backgroundColor = getRandomColor();
});


var textContainer = document.getElementById('text-container');
var colorBox = document.getElementById('colorbox');
var colorChangeBtn = document.getElementById('colorchange');
var fontSizeRange = document.getElementById('fontsize');
var italicBtn = document.getElementById('italic');
var underlineBtn = document.getElementById('underline');
var boldBtn = document.getElementById('bold');
var listDropdown = document.getElementById('list');
var getStyleBtn = document.getElementById('getstyle');
var cssPropsParagraph = document.getElementById('css-props');

// Event listener for color change
colorChangeBtn.addEventListener('click', function() {
    changeColor();
});

// Function to change text color
function changeColor() {
    var colorValue = colorBox.value;
    textContainer.style.color = colorValue;
}

// Event listener for font size change
fontSizeRange.addEventListener('input', function() {
    var fontSizeValue = fontSizeRange.value;
    textContainer.style.fontSize = fontSizeValue + 'px';
});

// Event listeners for style buttons (italic, underline, bold)
italicBtn.addEventListener('click', function() {
    toggleTextStyle('italic');
});

underlineBtn.addEventListener('click', function() {
    toggleTextStyle('underline');
});

boldBtn.addEventListener('click', function() {
    toggleTextStyle('bold');
});

// Function to toggle text style
function toggleTextStyle(style) {
    var currentStyle = textContainer.style.fontStyle;
    var isUnderline = textContainer.style.textDecoration === 'underline';
    var isItalic = textContainer.style.fontStyle === 'italic';
    var isBold = textContainer.style.fontWeight === 'bold';
    
    if (style === 'italic' && isItalic) {
        textContainer.style.fontStyle = 'normal';
    } else if (style === 'italic') {
        textContainer.style.fontStyle = 'italic';
    } else if (style === 'underline' && isUnderline) {
        textContainer.style.textDecoration = 'none';
    } else if (style === 'underline') {
        textContainer.style.textDecoration = 'underline';
    } else if (style === 'bold' && isBold) {
        textContainer.style.fontWeight = 'normal';
    } else if (style === 'bold') {
        textContainer.style.fontWeight = 'bold';
    }
}

// Event listener for font family change
listDropdown.addEventListener('change', function() {
    var selectedFont = listDropdown.value;
    textContainer.style.fontFamily = selectedFont;
});

// Event listener for get CSS button
getStyleBtn.addEventListener('click', function() {
    var cssText = '';
    if (textContainer.style.color) {
        cssText += 'color: ' + textContainer.style.color + '; ';
    }
    if (textContainer.style.fontSize) {
        cssText += 'font-size: ' + textContainer.style.fontSize + '; ';
    }
    if (textContainer.style.fontStyle) {
        cssText += 'font-style: ' + textContainer.style.fontStyle + '; ';
    }
    if (textContainer.style.fontWeight) {
        cssText += 'font-weight: ' + textContainer.style.fontWeight + '; ';
    }
    if (textContainer.style.fontFamily) {
        cssText += 'font-family: ' + textContainer.style.fontFamily + '; ';
    }

    cssPropsParagraph.textContent = cssText;
});
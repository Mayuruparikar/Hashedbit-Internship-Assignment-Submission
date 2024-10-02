// your js code goes here
function toggleVisibility() {
    var paragraph = document.getElementById('useless-paragraph');
   
   // Toggle visibility
   if (paragraph.style.display === 'none') {
       paragraph.style.display = 'block';
   } else {
       paragraph.style.display = 'none';
   }
  }
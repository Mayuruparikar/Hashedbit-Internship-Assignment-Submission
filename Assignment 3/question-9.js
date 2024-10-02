function countWords(paragraph) {
    return paragraph.trim().split(/\s+/).length;
}

let paragraph = "This is a simple paragraph to count the number of words present in it.";
console.log(countWords(paragraph)); 
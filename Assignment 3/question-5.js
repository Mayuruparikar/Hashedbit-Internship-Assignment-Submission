function correctfn(sentence, wrong, correct) {
    return sentence.replace(wrong, correct);
}

let sentence = "I love my contry";
let correctedSentence = correctfn(sentence, "contry", "country");
console.log(correctedSentence);  
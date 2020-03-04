var NumberOfWords = 30
var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:

words[1] = "https://stfly.io/IkAC"
words[2] = "https://stfly.io/tLIVoZ3"
words[3] = "https://stfly.io/60K5QykC"
words[4] = "https://stfly.io/vUmfk5Fu6"
words[5] = "https://stfly.io/4b97"
words[6] = "https://stfly.io/hKw7f97x3"
words[7] = "https://stfly.io/UYRTNM3"
words[8] = "https://stfly.io/01cqQ31"
words[9] = "https://stfly.io/79COQsr"
words[10] = "https://stfly.io/bIwR"
words[11] = "https://stfly.io/XmJJMs47L"
words[12] = "https://stfly.io/p4aAHc"
words[13] = "https://stfly.io/Oxq5rknH"
words[14] = "https://stfly.io/DAyYd0"
words[15] = "https://stfly.io/TtzM"
words[16] = "https://stfly.io/mT65aUJDf"
words[17] = "https://stfly.io/F3IunMHZg"
words[18] = "https://stfly.io/OHWZATEZM"
words[19] = "https://stfly.io/wHTNUXp"
words[20] = "https://stfly.io/4Nf1dQOOA"
words[21] = "https://stfly.io/RGp4"
words[22] = "https://stfly.io/5XKFzsF"
words[23] = "https://stfly.io/Y2BM5oM"
words[24] = "https://stfly.io/aKi5i6p3v"
words[25] = "https://stfly.io/eHPFowKXT"
words[26] = "https://stfly.io/osfVxiEy"
words[27] = "https://stfly.io/oBrEnq2"
words[28] = "https://stfly.io/PsEj"
words[29] = "https://stfly.io/wHTNUXp"
words[30] = "https://stfly.io/2654Yw"


function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}

function PickRandomWord(frm) {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfWords)

// Display the word inside the text box
frm.WordBox.value = words[rnd]
}

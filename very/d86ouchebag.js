var NumberOfWords = 50
var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:

words[1] = "https://enrt.eu/Mlcub"
words[2] = "https://enrt.eu/4z6e"
words[3] = "https://enrt.eu/eczzabX"
words[4] = "https://enrt.eu/stt0g"
words[5] = "https://enrt.eu/TDPtZKL"
words[6] = "https://enrt.eu/z8i1wWC"
words[7] = "https://enrt.eu/AYqcS"
words[8] = "https://enrt.eu/nIgfHgn"
words[9] = "https://enrt.eu/yvcD"
words[10] = "https://enrt.eu/rYB7"
words[11] = "https://enrt.eu/ezXkIqi"
words[12] = "https://enrt.eu/AbVu"
words[13] = "https://enrt.eu/80qE"
words[14] = "https://enrt.eu/HQNvij"
words[15] = "https://enrt.eu/BZgQQ"
words[16] = "https://enrt.eu/8K3RJEi"
words[17] = "https://enrt.eu/dkg0BS"
words[18] = "https://enrt.eu/TL8H"
words[19] = "https://enrt.eu/OyE6"
words[20] = "https://enrt.eu/hC8Syw9u"
words[21] = "https://enrt.eu/XhRQxZ"
words[22] = "https://enrt.eu/FsHX9fjt"
words[23] = "https://enrt.eu/G9Qr"
words[24] = "https://enrt.eu/jQAJoTT"
words[25] = "https://enrt.eu/5WeIrFUh"
words[26] = "https://enrt.eu/qlug"
words[27] = "https://enrt.eu/GgAiL"
words[28] = "https://enrt.eu/R1h8V"
words[29] = "https://enrt.eu/YO4f96"
words[30] = "https://enrt.eu/ud7F"
words[31] = "https://enrt.eu/kBFyaZeb"
words[32] = "https://enrt.eu/W6yW"
words[33] = "https://enrt.eu/PR1CL"
words[34] = "https://enrt.eu/hCnT"
words[35] = "https://enrt.eu/9nU4c4N4"
words[36] = "https://enrt.eu/skM5"
words[37] = "https://enrt.eu/MNHC"
words[38] = "https://enrt.eu/tNvAnT"
words[39] = "https://enrt.eu/gvLYTfZ0"
words[40] = "https://enrt.eu/IchQXn"
words[41] = "https://enrt.eu/e9Y3"
words[42] = "https://enrt.eu/UwhvrK"
words[43] = "https://enrt.eu/Zycyqwn"
words[44] = "https://enrt.eu/ASClYp"
words[45] = "https://enrt.eu/bf8cW6"
words[46] = "https://enrt.eu/InGz7"
words[47] = "https://enrt.eu/LwTg2"
words[48] = "https://enrt.eu/StVn"
words[49] = "https://enrt.eu/7U9CymRc"
words[50] = "https://enrt.eu/WLkJ7v9"

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
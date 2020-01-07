var NumberOfWords = 10
var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "https://enrt.eu/C1tLg"
words[2] = "https://enrt.eu/C1tLg"
words[3] = "https://enrt.eu/PYuLpE5"
words[4] = "https://enrt.eu/rfCEpnG4"
words[5] = "https://enrt.eu/yOOhp"
words[6] = "https://enrt.eu/BWmKh7"
words[8] = "https://enrt.eu/qjpr"
words[9] = "https://enrt.eu/AR6LanHR"
words[10] = "https://enrt.eu/GTBsT7"
words[11] = "https://enrt.eu/ZSF1O3ZO"
words[12] = "https://enrt.eu/rBHK"
words[13] = "https://enrt.eu/id146wy"
words[14] = "https://enrt.eu/RTnWR"
words[15] = "https://enrt.eu/bGEO"
words[16] = "https://enrt.eu/EPcTnxj"
words[17] = "https://enrt.eu/9O8X"
words[18] = "https://enrt.eu/NTQ3X"
words[19] = "https://enrt.eu/w76k"
words[20] = "https://enrt.eu/9FvL7g"
words[21] = "https://enrt.eu/WTuDieQo"
words[22] = "https://enrt.eu/rzYd"
words[23] = "https://enrt.eu/yDst"

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
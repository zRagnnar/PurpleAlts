var NumberOfWords = 33
var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:

words[1] = "https://enrt.eu/J3Zjf"
words[2] = "https://enrt.eu/CHUqW"
words[3] = "https://enrt.eu/okrBEklM"
words[4] = "https://enrt.eu/4Z742DA"
words[5] = "https://enrt.eu/shwaeuw"
words[6] = "https://enrt.eu/wkceNp"
words[7] = "https://enrt.eu/Q4UP"
words[8] = "https://enrt.eu/k08iwf"
words[9] = "https://enrt.eu/6Q6T3KK"
words[10] = "https://enrt.eu/HWEh"
words[11] = "https://enrt.eu/EeQloFI"
words[12] = "https://enrt.eu/QyZVU"
words[13] = "https://enrt.eu/cNhNNy"
words[14] = "https://enrt.eu/QXSZ"
words[15] = "https://enrt.eu/X7nP0XOC"
words[16] = "https://enrt.eu/wN9vc1"
words[17] = "https://enrt.eu/J3QzEff"
words[18] = "https://enrt.eu/yp8a1v2e"
words[19] = "https://enrt.eu/lkFNy"
words[20] = "https://enrt.eu/078hkK"
words[21] = "https://enrt.eu/IpVbsX"
words[22] = "https://enrt.eu/GfkY7"
words[23] = "https://enrt.eu/xUxC"
words[24] = "https://enrt.eu/EYQBLo"
words[25] = "https://enrt.eu/LqdZ"
words[26] = "https://enrt.eu/e8UyINL"
words[27] = "https://enrt.eu/zBS46xy"
words[28] = "https://enrt.eu/8x8imxv"
words[29] = "https://enrt.eu/Y36bJRQU"
words[30] = "https://enrt.eu/8vBQKck7"
words[31] = "https://enrt.eu/8ffk"
words[32] = "https://enrt.eu/YsT07lP"
words[33] = "https://enrt.eu/2DFIl"

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
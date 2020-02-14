var NumberOfWords = 34
var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:

words[1] = "hhttps://enrt.eu/qW9KED"
words[2] = "https://enrt.eu/mDLRrq3"
words[3] = "https://enrt.eu/nEux"
words[4] = "https://enrt.eu/PTq5NN"
words[5] = "https://enrt.eu/LHVFU7E"
words[6] = "https://enrt.eu/wXgic7h8"
words[7] = "https://enrt.eu/KULJa7r"
words[8] = "https://enrt.eu/oMtI4"
words[9] = "https://enrt.eu/MuS2zw"
words[10] = "https://enrt.eu/I8g2Q28"
words[11] = "https://enrt.eu/lAlgICp"
words[12] = "https://enrt.eu/x5EazZY3"
words[13] = "https://enrt.eu/zlDF"
words[14] = "https://enrt.eu/Y2nMBC2Z"
words[15] = "https://enrt.eu/eN2f5fwD"
words[16] = "https://enrt.eu/hKye19"
words[17] = "https://enrt.eu/4VeJB"
words[18] = "https://enrt.eu/e8Tqb"
words[19] = "https://enrt.eu/0yK6w0vG"
words[20] = "https://enrt.eu/Rzwt"
words[21] = "https://enrt.eu/AqiK"
words[22] = "https://enrt.eu/Id2l"
words[23] = "https://enrt.eu/PmYR0ew2"
words[24] = "https://enrt.eu/2iSUDb8v"
words[25] = "https://enrt.eu/a3ExyON"
words[26] = "https://enrt.eu/FfSBc"
words[27] = "https://enrt.eu/Xj68FrdM"
words[28] = "ttps://enrt.eu/nocfv"
words[29] = "https://enrt.eu/FrWKETcR"
words[30] = "https://enrt.eu/qKbrJ"
words[31] = "https://enrt.eu/gbh4c5"
words[32] = "https://enrt.eu/dJsl"
words[33] = "https://enrt.eu/dWiw2Rw"
words[34] = "https://enrt.eu/ILIpG3"

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
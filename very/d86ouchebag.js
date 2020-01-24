var NumberOfWords = 59
var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:

words[1] = "https://enrt.eu/cOpLKU"
words[2] = "https://enrt.eu/l7KLU"
words[3] = "https://enrt.eu/qAznQZ"
words[4] = "https://enrt.eu/GcME6"
words[5] = "https://enrt.eu/7RB0q"
words[6] = "https://enrt.eu/i6EnOYg"
words[7] = "https://enrt.eu/ZF2mT5DP"
words[8] = "https://enrt.eu/GSiI"
words[9] = "https://enrt.eu/u83zn"
words[10] = "https://enrt.eu/FnL5d"
words[11] = "https://enrt.eu/5VzY"
words[12] = "https://enrt.eu/MSxXy9l7"
words[13] = "https://enrt.eu/BBMkcVj"
words[14] = "https://enrt.eu/Wtzkzx"
words[15] = "https://enrt.eu/rhxP5E1d"
words[16] = "https://enrt.eu/g468"
words[17] = "https://enrt.eu/bnABh"
words[18] = "https://enrt.eu/2QZM"
words[19] = "https://enrt.eu/NbhZXekH"
words[20] = "https://enrt.eu/WF61Go"
words[21] = "https://enrt.eu/hwvsu6BK"
words[22] = "https://enrt.eu/fuTJ"
words[23] = "https://enrt.eu/xTToo"
words[24] = "https://enrt.eu/621j2kz"
words[25] = "https://enrt.eu/qeNSjoG"
words[26] = "https://enrt.eu/9XdAJYN4"
words[27] = "https://enrt.eu/9tfEqt"
words[28] = "https://enrt.eu/PacaaGM"
words[29] = "https://enrt.eu/UY9mb"
words[30] = "https://enrt.eu/BeX0v"
words[31] = "https://enrt.eu/iG69"
words[32] = "https://enrt.eu/iIMA5Z"
words[33] = "https://enrt.eu/2K0onpWT"
words[34] = "https://enrt.eu/BMJ29Z"
words[35] = "https://enrt.eu/fij3"
words[36] = "https://enrt.eu/Vf6vqH"
words[37] = "https://enrt.eu/2jdqzoB"
words[38] = "https://enrt.eu/EQR556"
words[39] = "https://enrt.eu/uN5I"
words[40] = "https://enrt.eu/N4SCWC"
words[41] = "https://enrt.eu/pqTYbMCV"
words[42] = "https://enrt.eu/EF9z4x"
words[43] = "https://enrt.eu/XIbUy7"
words[44] = "https://enrt.eu/2qyVC"
words[45] = "https://enrt.eu/UfXysHEr"
words[46] = "https://enrt.eu/Q1So"
words[47] = "https://enrt.eu/UjEa0s9"
words[48] = "https://enrt.eu/vQ5O"
words[49] = "https://enrt.eu/9IGnA7wE"
words[50] = "https://enrt.eu/YdpwgyEe"
words[51] = "https://enrt.eu/QgDKtr"
words[52] = "https://enrt.eu/MsidcF5N"
words[53] = "https://enrt.eu/lerPDAE"
words[54] = "https://enrt.eu/kLXw"
words[55] = "https://enrt.eu/U7m8"
words[56] = "https://enrt.eu/Tw2jbVcU"
words[57] = "https://enrt.eu/cN95eiL"
words[58] = "https://enrt.eu/YU596zsS"
words[59] = "https://enrt.eu/aQENqqR"

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
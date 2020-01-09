var NumberOfWords = 54
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
words[24] = "https://enrt.eu/HwK99"
words[25] = "https://enrt.eu/xRiYFbK"
words[26] = "https://enrt.eu/kogU"
words[27] = "https://enrt.eu/1EeJOQ"
words[28] = "https://enrt.eu/RCCJIf"
words[29] = "https://enrt.eu/YViFAXUo"
words[30] = "https://enrt.eu/AtEBA"
words[31] = "https://enrt.eu/M5FXU"
words[32] = "https://enrt.eu/1Bhw"
words[33] = "https://enrt.eu/MWqvN"
words[34] = "https://enrt.eu/WlS2RV9"
words[35] = "https://enrt.eu/qTRMTjvM"
words[36] = "https://enrt.eu/Ndql"
words[37] = "https://enrt.eu/Yjat"
words[38] = "https://enrt.eu/3HxUu5W"
words[39] = "https://enrt.eu/l2R362Ag"
words[40] = "https://enrt.eu/l2R362Ag"
words[41] = "https://enrt.eu/Xdgc7I"
words[42] = "https://enrt.eu/46ke"
words[43] = "https://enrt.eu/fr4fZ"
words[44] = "https://enrt.eu/gH6I"
words[45] = "https://enrt.eu/dNsmyWTW"
words[46] = "https://enrt.eu/7O6M8"
words[47] = "https://enrt.eu/4m0N"
words[48] = "https://enrt.eu/7OczN8T"
words[49] = "https://enrt.eu/nnav6"
words[50] = "https://enrt.eu/cF74W"
words[51] = "https://enrt.eu/cF74W"
words[52] = "https://enrt.eu/nvMJ43g"
words[53] = "https://enrt.eu/SnIY2Fw"
words[54] = "https://enrt.eu/vZOdf"

function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
this[i] = null}
return this
}

function PickRandomWord(frm) {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfWords)

// Display the word inside the text box
frm.WordBox.value = words[rnd]
}
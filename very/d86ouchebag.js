var NumberOfWords = 51
var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "https://enrt.eu/9P93nnc"
words[2] = "https://enrt.eu/itiSMqKZ"
words[3] = "https://enrt.eu/Q4IKZjhA"
words[4] = "https://enrt.eu/rkQz8byg"
words[5] = "https://enrt.eu/wczIP"
words[6] = "https://enrt.eu/R3FMEFw"
words[8] = "https://enrt.eu/sn0y4"
words[9] = "https://enrt.eu/hqLuSc"
words[10] = "https://enrt.eu/TqpDIE"
words[11] = "https://enrt.eu/15Bk"
words[12] = "https://enrt.eu/exoxupCX"
words[13] = "https://enrt.eu/SAG1"
words[14] = "https://enrt.eu/lPoC"
words[15] = "https://enrt.eu/nFnw2"
words[16] = "https://enrt.eu/vB1sJ"
words[17] = "https://enrt.eu/BYE5"
words[18] = "https://enrt.eu/F8Ips8w"
words[19] = "https://enrt.eu/SaZDJEo"
words[20] = "https://enrt.eu/Rdh8"
words[21] = "https://enrt.eu/CYPALp3"
words[22] = "https://enrt.eu/lltR3"
words[23] = "https://enrt.eu/BeBbkt3r"
words[24] = "https://enrt.eu/aVUsLBQ"
words[25] = "https://enrt.eu/0IVfT5z"
words[26] = "https://enrt.eu/iqOGKN"
words[27] = "https://enrt.eu/9beTSEd"
words[28] = "https://enrt.eu/xOVAEUv"
words[29] = "https://enrt.eu/Bj6J"
words[30] = "https://enrt.eu/LCLFl"
words[31] = "https://enrt.eu/UwJa2fS"
words[32] = "https://enrt.eu/cTUSCR5"
words[33] = "https://enrt.eu/VaP77"
words[34] = "https://enrt.eu/NMkHNNUM"
words[35] = "https://enrt.eu/x9Ppre"
words[36] = "https://enrt.eu/WqoibQ"
words[37] = "https://enrt.eu/iRNjv"
words[38] = "https://enrt.eu/kKhrD7"
words[39] = "https://enrt.eu/5W9ZBE1"
words[40] = "https://enrt.eu/PAtGDP"
words[41] = "https://enrt.eu/8uLM3"
words[42] = "https://enrt.eu/89Md"
words[43] = "https://enrt.eu/4gF2"
words[44] = "https://enrt.eu/jaSSR"
words[45] = "https://enrt.eu/D4qSuY"
words[46] = "https://enrt.eu/AWmd"
words[47] = "https://enrt.eu/I7UA"
words[48] = "https://enrt.eu/SS95ED"
words[49] = "https://enrt.eu/1JHhhL"
words[50] = "https://enrt.eu/oke7u"
words[51] = "https://enrt.eu/L79Q6Quf"

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
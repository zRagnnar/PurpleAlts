var NumberOfWords = 50
var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "https://enrt.eu/h9clrq"
words[2] = "https://enrt.eu/Lup4IC"
words[3] = "https://enrt.eu/eIjd6PU"
words[4] = "https://enrt.eu/7tgr30I"
words[5] = "https://enrt.eu/XMfS"
words[6] = "https://enrt.eu/VqNxF"
words[7] = "https://enrt.eu/7aMSj2"
words[8] = "https://enrt.eu/115q"
words[9] = "https://enrt.eu/JuJAd"
words[10] = "https://enrt.eu/Ravib2"
words[11] = "https://enrt.eu/0I5W"
words[12] = "https://enrt.eu/Dwj1Gn6r"
words[13] = "https://enrt.eu/65fs"
words[14] = "https://enrt.eu/PcO2Sy"
words[15] = "https://enrt.eu/h2ezLl"
words[16] = "https://enrt.eu/wwm8Hmo"
words[17] = "https://enrt.eu/DHQNq2hX"
words[18] = "https://enrt.eu/d0SaBjF"
words[19] = "https://enrt.eu/ObXhZdb"
words[20] = "https://enrt.eu/segAsdX9"
words[21] = "https://enrt.eu/u3Dcj2u"
words[22] = "https://enrt.eu/Qnxxx"
words[23] = "https://enrt.eu/xXw5vyE"
words[24] = "https://enrt.eu/6GVUxE"
words[25] = "https://enrt.eu/ocYfgs"
words[26] = "https://enrt.eu/JJMjNtB"
words[27] = "https://enrt.eu/jK6WG"
words[28] = "https://enrt.eu/QJgr"
words[29] = "https://enrt.eu/B3nSUG"
words[30] = "https://enrt.eu/1gNSJn"
words[31] = "https://enrt.eu/r1hGq"
words[32] = "https://enrt.eu/TlE4j"
words[33] = "https://enrt.eu/Kp29Goz"
words[34] = "https://enrt.eu/WV5TOPk"
words[35] = "https://enrt.eu/JXv01K4"
words[36] = "https://enrt.eu/iBXl8Dc"
words[37] = "https://enrt.eu/BCej0"
words[38] = "https://enrt.eu/PjcpZ6KU"
words[39] = "https://enrt.eu/V4yf8X"
words[40] = "https://enrt.eu/eS4zJd"
words[41] = "https://enrt.eu/jhZ3E"
words[42] = "https://enrt.eu/cwBadx7T"
words[43] = "https://enrt.eu/9OmrL88X"
words[44] = "https://enrt.eu/jM00IIHy"
words[45] = "https://enrt.eu/2x0ke6"
words[46] = "https://enrt.eu/jtFi7oR2"
words[47] = "https://enrt.eu/29eo"
words[48] = "https://enrt.eu/1HnW"
words[49] = "https://enrt.eu/OOVXj5Ic"
words[50] = "https://enrt.eu/fOzUKt8"

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
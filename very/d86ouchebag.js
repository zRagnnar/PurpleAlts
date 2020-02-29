var NumberOfWords = 31
var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:

words[1] = "https://shrinkurl.org/lZt4D
words[2] = "https://shrinkurl.org/fPVrlY9
words[3] = "https://shrinkurl.org/QtzXR
words[4] = "https://shrinkurl.org/ofXiPPtK
words[5] = "https://shrinkurl.org/bcTKY
words[6] = "https://shrinkurl.org/BOozXHS
words[7] = "https://shrinkurl.org/6UZp
words[8] = "https://shrinkurl.org/PHOJ
words[9] = "ttps://shrinkurl.org/0x9FU
words[10] = "https://shrinkurl.org/u31z2
words[11] = "https://shrinkurl.org/IOJKrO6
words[12] = "https://shrinkurl.org/bDDRs
words[13] = "https://shrinkurl.org/bzX9p13
words[14] = "https://shrinkurl.org/pcn9pDUB
words[15] = "https://shrinkurl.org/ySK2aYky
words[16] = "https://shrinkurl.org/0ZHfF
words[17] = "https://shrinkurl.org/4JXmy
words[18] = "https://shrinkurl.org/UCvZQ6Kl
words[19] = "ttps://shrinkurl.org/7sjLai3
words[20] = "https://shrinkurl.org/eWMmL
words[21] = "https://shrinkurl.org/37TCvso
words[22] = "https://shrinkurl.org/zuR29
words[23] = "https://shrinkurl.org/beY9
words[24] = "https://shrinkurl.org/B8yq0HgI
words[25] = "https://shrinkurl.org/GGXjN
words[26] = "https://shrinkurl.org/R2YJ3Uw
words[27] = "https://shrinkurl.org/DPZk
words[28] = "https://shrinkurl.org/6xKBas
words[29] = "https://shrinkurl.org/q5Oo46
words[30] = "https://shrinkurl.org/K9ME2R
words[31] = "https://shrinkurl.org/8obgi

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

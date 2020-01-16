var NumberOfWords = 50
var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "https://enrt.eu/5Ngb"
words[2] = "https://enrt.eu/whPDR"
words[3] = "https://enrt.eu/ur2k"
words[4] = "https://enrt.eu/pL2k77"
words[5] = "https://enrt.eu/YZf7Tv2"
words[6] = "https://enrt.eu/4TCeNR"
words[8] = "https://enrt.eu/KwACtm"
words[9] = "https://enrt.eu/fDQ0cPy"
words[10] = "https://enrt.eu/x6d2PKB"
words[11] = "https://enrt.eu/NT5WJJw"
words[12] = "https://enrt.eu/nSu69"
words[13] = "https://enrt.eu/2WLv3"
words[14] = "https://enrt.eu/oRfrECFk"
words[15] = "https://enrt.eu/CdYnNy1"
words[16] = "https://enrt.eu/94Pz1A"
words[17] = "https://enrt.eu/o50QJGOC"
words[18] = "https://enrt.eu/uXlGFP"
words[19] = "https://enrt.eu/KS3bt"
words[20] = "https://enrt.eu/AydJHDVO"
words[21] = "https://enrt.eu/iDzJ85kU"
words[22] = "https://enrt.eu/Lek3DswT"
words[23] = "https://enrt.eu/rEXcF2"
words[24] = "https://enrt.eu/LEmEfX"
words[25] = "https://enrt.eu/do3AQU"
words[26] = "https://enrt.eu/HXXTWO"
words[27] = "https://enrt.eu/Ac6Paf"
words[28] = "https://enrt.eu/KqXFrwgH"
words[29] = "https://enrt.eu/RKUwT9"
words[30] = "https://enrt.eu/Ou78"
words[31] = "https://enrt.eu/cFJRFI"
words[32] = "https://enrt.eu/IDk0p"
words[33] = "https://enrt.eu/JEVf"
words[34] = "https://enrt.eu/XB2TqZV"
words[35] = "https://enrt.eu/nfaA"
words[36] = "https://enrt.eu/FXBT"
words[37] = "https://enrt.eu/Z9dKG"
words[38] = "https://enrt.eu/hnRNR5"
words[39] = "https://enrt.eu/U50SgTxt"
words[40] = "https://enrt.eu/PeJ8Jt"
words[41] = "https://enrt.eu/hAp2R"
words[42] = "https://enrt.eu/jxhC"
words[43] = "https://enrt.eu/Of1Kz1wy"
words[44] = "https://enrt.eu/pstI"
words[45] = "https://enrt.eu/S57Bw"
words[46] = "https://enrt.eu/GsbweX3h"
words[47] = "https://enrt.eu/oEuNA"
words[48] = "https://enrt.eu/psBAdTyz"
words[49] = "https://enrt.eu/EOCLVqE"
words[50] = "https://enrt.eu/zOk3RGa"

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
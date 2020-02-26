var NumberOfWords = 12
var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:

words[1] = "https://enrt.eu/NCEWHuI"
words[2] = "https://enrt.eu/QoxILT"
words[3] = "https://enrt.eu/p087j"
words[4] = "https://enrt.eu/H76i"
words[5] = "https://enrt.eu/fRikpcL"
words[6] = "https://enrt.eu/zpniaGT"
words[7] = "https://enrt.eu/0JrKBgmb"
words[8] = "https://enrt.eu/GkpRph5"
words[9] = "https://enrt.eu/NWQvr"
words[10] = "https://enrt.eu/64UyI4"
words[11] = "https://enrt.eu/Y4UMcav1"
words[12] = "https://enrt.eu/4mrna4CO"

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

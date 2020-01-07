var NumberOfWords = 10
var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "g.lesadeaxa@gmail.com:Gerald1968" 
words[2] = "ced752@yahoo.com:Cindy1969" 
words[3] = "cshawnburns@gmail.com:critter1" 
words[4] = "deannaimmel@gmail.com:10swords" 
words[5] = "hhgs83@hotmail.com:Hector83" 
words[6] = "g.lesadeaxa@gmail.com:Gerald1968" 
words[7] = "lily_mikova@yahoo.com:loveacs1_1" 
words[8] = "g.lesadeaxa@gmail.com:Gerald1968" 
words[9] = "felipsyfera@yahoo.com.br:flp55555" 
words[10] = "g.lesadeaxa@gmail.com:Gerald1968" 

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
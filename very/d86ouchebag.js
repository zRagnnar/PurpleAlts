var NumberOfWords = 59
var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:

words[1] = "https://enrt.eu/29Kjd
words[2] = "https://enrt.eu/jUvib
words[3] = "https://enrt.eu/d0GS
words[4] = "https://enrt.eu/12Zu
words[5] = "https://enrt.eu/ra901oa
words[6] = "https://enrt.eu/vdckqaW4
words[7] = "https://enrt.eu/wqOP3XE
words[8] = "https://enrt.eu/42ngVShc
words[9] = "https://enrt.eu/YavJZ
words[10] = "https://enrt.eu/DFjvuQ
words[11] = "https://enrt.eu/h7ckB7
words[12] = "https://enrt.eu/SS6OV
words[13] = "https://enrt.eu/CQ5Py935
words[14] = "https://enrt.eu/kPHXR9Hk
words[15] = "https://enrt.eu/KBd3K
words[16] = "https://enrt.eu/Gxx9pAqU
words[17] = "https://enrt.eu/7AnZ
words[18] = "https://enrt.eu/1l5po1fq
words[19] = "https://enrt.eu/9HR9
words[20] = "https://enrt.eu/Sn5MoXjH
words[21] = "https://enrt.eu/0tgW2Jh
words[22] = "https://enrt.eu/wAkQhFy
words[23] = "https://enrt.eu/NamX
words[24] = "https://enrt.eu/7AricB3U
words[25] = "https://enrt.eu/QASk4AxS
words[26] = "https://enrt.eu/8zVpyGr
words[27] = "https://enrt.eu/zgAl
words[28] = "https://enrt.eu/Y029
words[29] = "https://enrt.eu/GGAbB
words[30] = "https://enrt.eu/yS4QyAJi
words[31] = "https://enrt.eu/lnNNPy8t
words[32] = "https://enrt.eu/vd8faCPX
words[33] = "https://enrt.eu/qj4b
words[34] = "https://enrt.eu/FpVdU
words[35] = "https://enrt.eu/WSsWDE
words[36] = "https://enrt.eu/029LN
words[37] = "https://enrt.eu/btV3c
words[38] = "https://enrt.eu/b8GK0kRT
words[39] = "https://enrt.eu/umwQqxE
words[40] = "https://enrt.eu/O3Rbpq
words[41] = "https://enrt.eu/o4SUSuc9
words[42] = "https://enrt.eu/xEjz4f9
words[43] = "https://enrt.eu/ZUu4LJvD
words[44] = "https://enrt.eu/qj4b
words[45] = "https://enrt.eu/J10cH
words[46] = "https://enrt.eu/dRzxc
words[47] = "https://enrt.eu/KVMLWwZ8
words[48] = "https://enrt.eu/Ncya
words[49] = "https://enrt.eu/HF9b
words[50] = "https://enrt.eu/H3PJdg
words[51] = "https://enrt.eu/EVjA
words[52] = "https://enrt.eu/9PwrI6l
words[53] = "https://enrt.eu/0juWMX
words[54] = "https://enrt.eu/00VgoxC
words[55] = "https://enrt.eu/P25V
words[56] = "https://enrt.eu/j4Fv
words[57] = "https://enrt.eu/wI0c7
words[58] = "https://enrt.eu/HF9b
words[59]=  "https://enrt.eu/6KFhL

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
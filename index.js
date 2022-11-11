const slider = document.getElementById("myRange") 
const val=document.getElementById("val") 
const out=document.getElementById("output") 
const txt=document.getElementById("txt")
let val1=5 
function caesar(line, shift = 1) {
   let result = "";
   for (let i = 0; i < line.length; i++) {
       let code = line.charCodeAt(i); 
       let sym=code+shift
       let char = code==32?' ':(code<=90&&code>=65)||(code<=122&&code>=97)?(sym<=90&&sym>=65)||(sym<=122&&sym>=97)?String.fromCharCode(sym):String.fromCharCode(sym-26):String.fromCharCode(code)
       result += char;
   }
   return result.length<290?result:'Your text is too big. Maximum length is 290 characters.';
}
slider.oninput = function() {
    val.innerHTML = `Value of shift:${this.value}`  
    val1=parseInt(this.value) 
    out.innerHTML=caesar(txt.value, val1)
} 
txt.oninput=function(){
    out.innerHTML=caesar(this.value, val1)
}
// defs
jumble = "A1BLMN4OpP4QqRr0Kk4TUuVvWS2C3D4E5F6G7H8I98JXYZ";
tittles = [
"Pixurge"
]
function randden(){
   document.title = tittles[Math.floor(Math.random()*tittles.length)]
}
// ID
genId = function(){
let id = ""
if(localStorage.getItem('userId') == null){
for(i = 0; i < 8; i++){id+=`${jumble.charAt(Math.floor(Math.random()*jumble.length))}`}
localStorage.setItem('userId',id)
return id
}else{
let id = localStorage.getItem('userId')
return id
}}


if (navigator.userAgent.includes('Android') || navigator.userAgent.includes('iOS')){$('game').remove()}
// chat stuff



// declerations
randden()

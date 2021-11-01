function render(){
for(let i = 0; i < game.blocks.length; i++){
for(let p = 0; p < game.blocks[i].length; p++){

if(typeof game.blocks[i][p] == "string"){
	if( game.blocks[i][p].substr(0,8) == "texture:"){
 
let textaddress = game.blocks[i][p].substr(8,Infinity)
let img = new Image()
img.src = textaddress
img.style.maxWidth = "120px"
img.style.maxHeight = "120px"
console.log(img.width)
img.onerror = function(){game.blocks[i][p] = ""}
img.onload = function(){
game.blocks[i]["texture"] = img
game.blocks[i][p] = ""
}

}
	if(game.blocks[i][p].substr(0,5) == "type:"){
  
}
}
}
}}


setInterval(render,2000)
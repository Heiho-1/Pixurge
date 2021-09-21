function render(){
for(let i = 0; i < game.blocks.length; i++){
for(let p = 0; p < game.blocks[i].length; p++){

if(typeof game.blocks[i][p] == "string"){
	if( game.blocks[i][p].substr(0,8) == "texture:"){
let textaddress = game.blocks[i][p].substr(8,Infinity)
let img = new Image(game.blocks[i][2],game.blocks[i][2])
img.src = textaddress
game.blocks[i]["texture"] = img
game.blocks[i][p] = ""
}
	if(game.blocks[i][p].substr(0,5) == "type:"){
   switch(game.blocks[i][p].substr(5,Infinity)){
   case 'sanic':
   game.blocks[i][0] += game.magicnum
   game.blocks[i][1] += game.magicnum
   game.blocks[i][p] = 'type:sanic1'
   break;   
   case 'sanic1':
   game.blocks[i][0] -= game.magicnum
   game.blocks[i][1] -= game.magicnum
       game.blocks[i][p] = 'type:sanic'

   break;

   }
}
}
}
}}


setInterval(render,2000)
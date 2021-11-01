function setStuff(color){
game.context.fillStyle = `${color}`;
game.context.textBaseline = 'middle';
game.context.textAlign = "center"
}
playerSprite = new Image('images/player.png')

function draw(){ 

// start of draw func

game.context.save();

game.context.fillStyle = `rgba(${Math.floor(Math.random() * 2)},0,0,0.9)`;
game.context.fillRect(0,-10,game.canvas.height * 3, game.canvas.width * 3);
//
if(game.player.pos.x % 1 == 0){
game.currentX = game.player.pos.x - game.player.pos.x * 2 + 700
game.context.translate(game.currentX, 0);

}else{
game.context.translate(game.currentX, 0);
} 
if(game.player.pos.y % 1 == 0){
game.currentY = Math.round(game.player.pos.y - game.player.pos.y * 2) + 300
game.context.translate(0,game.currentY);
}else{
game.context.translate(0, game.currentY);
}
// draw blocks
for(let i = 0; i < game.blocks.length; i++){
if(typeof game.blocks[i]["texture"] == "undefined"){
if(typeof game.blocks[i][3] == "undefined" || game.blocks[i][3] == ""){
game.context.fillStyle = '#4a3f42';
}else{
game.context.fillStyle = game.blocks[i][3]    
}
game.context.fillRect(game.blocks[i][0],game.blocks[i][1],game.blocks[i][2],game.blocks[i][2])
}else{
game.context.fillStyle = 'rgb(0,200,200,0.2)'
if(game.blocks[i]["texture"].width >= 300 || game.blocks[i]["texture"].height <= 300){
let a = Math.floor(game.blocks[i]["texture"].width - 250* Math.floor(game.blocks[i]["texture"].width / 300))
let b = Math.floor(game.blocks[i]["texture"].height - 250* Math.floor(game.blocks[i]["texture"].height / 300))
game.context.drawImage(game.blocks[i]["texture"],game.blocks[i][0],game.blocks[i][1],a,b)
}else{
game.context.drawImage(game.blocks[i]["texture"],game.blocks[i][0],game.blocks[i][1])
game.context.fillRect(game.blocks[i][0],game.blocks[i][1],game.blocks[i][2],game.blocks[i][2])
}
}

}
// player draw
game.context.fillStyle = '#4a6349';
// game.context.drawImage(playerSprite,game.player.pos.x,game.player.pos.y,game.magicnum,game.magicnum)
game.context.fillRect(game.player.pos.x,game.player.pos.y,game.magicnum,game.magicnum)

setStuff('#7d518c')
game.context.fillText(`${window.userId}`,game.player.pos.x + 12,game.player.pos.y - 10)

// draw players
for(let i in game.players){
if(typeof game.players[i] !== "undefined"){
setStuff('#afb34f')
game.context.fillText(`${game.players[i][2]}`,game.players[i][0] + 12,game.players[i][1] - 10)
// game.context.drawImage(playerSprite,game.players[i][0],game.players[i][1],game.magicnum,game.magicnum)
setStuff('#537851')

game.context.fillRect(game.players[i][0],game.players[i][1],game.magicnum,game.magicnum)

}
} 


           // end draw

}
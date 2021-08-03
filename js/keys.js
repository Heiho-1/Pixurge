function keycheck(){

    if(game.keymap['ArrowUp'] == true){
    	if(checkcol(game.player.pos.x,game.player.pos.y - game.magicnum)){
	if(checkcol(game.player.pos.x,game.player.pos.y-game.stride)){
setTimeout(function(){
	grounded = false

},50)
game.player.pos.y -= game.stride
gravity = 0; 
setTimeout(function(){
if(checkcol(game.player.pos.x,game.player.pos.y-game.stride) && checkcol(game.player.pos.x,game.player.pos.y-game.stride*2) && grounded == true){
game.player.pos.y-=game.stride

}
game.gravity = game.stride
},10)
}}
    }
        if(game.keymap['ArrowDown'] == true){if(checkcol(game.player.pos.x,game.player.pos.y + game.magicnum)){game.player.pos.y += game.stride}
}

        if(game.keymap['ArrowRight'] == true){if(checkcol(game.player.pos.x + game.stride, game.player.pos.y)){game.player.pos.x += game.stride}
}

        if(game.keymap['ArrowLeft'] == true){if(checkcol(game.player.pos.x - game.magicnum,game.player.pos.y)){game.player.pos.x -= game.stride}
}

}
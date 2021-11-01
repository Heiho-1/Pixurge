function keycheck(){
   if(game.playersopen == true && game.keymap["`"] == false){
          game.playersopen = false
     if(typeof $('div#tempdiv')[0] !== "undefined"){
     $('div#tempdiv')[0].remove()
     }
     }
  if( game.keymap['`'] == true){
      if(typeof $('div#tempdiv')[0] !== "undefined"){
     $('div#tempdiv')[0].remove()
     }
    showplayers()
}




  
  
   if(game.keymap["Control"] == true && game.keymap["y"] == true){
 
   game.keymap["Control"] = false
   game.keymap["y"] = false
   let a = prompt('Texture link?')
   if(a == 'none' || a == '' || a == ' ' || a == null){
   localStorage.texture = "none"
   }else{
    localStorage.texture = `texture:${a}`
   }
   }




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
function stabilizeInt(a,b){
return Math.floor(a / b) * b
}
// collision checking
checkcol = function(posx,posy){
 for(i = 0; i < game.blocks.length; i++){
if(game.blocks[i][0] == posx && game.blocks[i][1] == posy){
return false
break;
}}
return true
}

dBlock = function(e){

   rect = game.canvas.getBoundingClientRect();
      game.mouse.x = e.clientX - game.currentX + game.magicnum
      game.mouse.y = e.clientY - game.currentY + 3
       blockx = Math.round(game.mouse.x)
       blocky = Math.round(game.mouse.y)
      blockx = stabilizeInt(blockx-2,game.magicnum);blocky = stabilizeInt(blocky,game.magicnum)
      for(let i = 0; i < game.blocks.length; i++){
        if(game.blocks[i][0] == blockx && game.blocks[i][1] == blocky){
          socket.emit('destroy',game.blocks[i][game.blocks[i].length-1])
        }
      }
    }

pBlock = function(e){


   rect = game.canvas.getBoundingClientRect();
      game.mouse.x = e.clientX - game.currentX + game.magicnum + 2
      game.mouse.y = e.clientY - game.currentY + 4
       blockx = Math.round(game.mouse.x)
       blocky = Math.round(game.mouse.y)
      blockx = stabilizeInt(blockx-2,game.magicnum);blocky = stabilizeInt(blocky,game.magicnum)
    if(checkcol(blockx,blocky)){
      let blockinfo = game.blockinfo
      let bpos = [stabilizeInt(blockx,game.magicnum),stabilizeInt(blocky,game.magicnum),game.magicnum,game.blockColor,`${localStorage.texture}`,"type:none"]
    socket.emit('bp',bpos,blockinfo)
  }else{

  }

    }


    cpick = function(e){

   rect = game.canvas.getBoundingClientRect();
      game.mouse.x = e.clientX - game.currentX + game.magicnum
      game.mouse.y = e.clientY - game.currentY + 3
       blockx = Math.round(game.mouse.x)
       blocky = Math.round(game.mouse.y)
      blockx = stabilizeInt(blockx-2,game.magicnum);blocky = stabilizeInt(blocky,game.magicnum)
      for(let i = 0; i < game.blocks.length; i++){
        if(game.blocks[i][0] == blockx && game.blocks[i][1] == blocky && typeof game.blocks[i][3] !== "undefined"){
           if(typeof document.getElementById('setbutton') !== "undefined" && typeof document.getElementById('setbutton') !== "null"){
document.getElementById('setbutton').value = game.blocks[i][3]
} else{
game.blockColor = game.blocks[i][3]
}

        }
      }
    }
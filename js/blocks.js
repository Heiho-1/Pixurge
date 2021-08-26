// stabilizing

function stabilizeInt(num,cap){
intt = Math.floor(num / cap) * cap
return intt
}



// collision checking
checkcol = function(posx,posy){
 for(i = 0; i < game.blocks.length; i++){
if(game.blocks[i][0] == posx && game.blocks[i][1] == posy){
return false
break;
}
}
return true
 }



// blockshit
pBlock = function(e){

   rect = game.canvas.getBoundingClientRect();
      game.mouse.x = e.clientX - game.currentX + game.magicnum + 2
      game.mouse.y = e.clientY - game.currentY + 4
       blockx = Math.round(game.mouse.x)
       blocky = Math.round(game.mouse.y)
      blockx = stabilizeInt(blockx-2,game.magicnum);blocky = stabilizeInt(blocky,game.magicnum)
    if(checkcol(blockx,blocky)){
      let blockinfo = game.blockinfo
      let bpos = [stabilizeInt(blockx,game.magicnum),stabilizeInt(blocky,game.magicnum),game.magicnum,game.blockColor]
    socket.emit('bp',bpos,blockinfo)
  }else{

  }

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
cpick = function(e){

   rect = game.canvas.getBoundingClientRect();
      game.mouse.x = e.clientX - game.currentX + game.magicnum
      game.mouse.y = e.clientY - game.currentY + 3
       blockx = Math.round(game.mouse.x)
       blocky = Math.round(game.mouse.y)
      blockx = stabilizeInt(blockx-2,game.magicnum);blocky = stabilizeInt(blocky,game.magicnum)
      for(let i = 0; i < game.blocks.length; i++){
        if(game.blocks[i][0] == blockx && game.blocks[i][1] == blocky && typeof game.blocks[i][3] !== "undefined"){
        game.blockColor = game.blocks[i][3]
            document.getElementById('colorcontainer').style.backgroundColor = game.blockColor

        }
      }
    }


// delete block

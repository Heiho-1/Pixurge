
(async function(){
herokuServ = "https://mlwebsocket.herokuapp.com"
localServ = "http://localhost:3000"
// load
socketAddr = herokuServ
  await $.getScript('js/dependencies/socketio.js');
  await $.getScript('js/socket.js')
  await $.getScript('js/main.js')
  await $.getScript('js/blocks.js') 
  await $.getScript('js/draw.js')
  await $.getScript('js/chat.js')
  await $.getScript('js/keys.js')
// load

// update
 update = function(){
    game.context.textAlign = "center";
game.canvas.style.width=game.canvas.width; game.canvas.style.height = game.canvas.height;
     game.canvas.height = window.innerHeight + 20;game.canvas.width = window.innerWidth + 64;game.context.font = '17px gameover';
game.player.pos.x = Math.floor(game.player.pos.x / game.stride) * game.stride
game.player.pos.y = Math.floor(game.player.pos.y / game.stride) * game.stride

if(game.lastpos.x !== game.player.pos.x || game.lastpos.y !== game.player.pos.y){
  let posx = game.player.pos.x 
let posy = game.player.pos.y
  socket.emit('move',posx,posy,userId)
}


game.lastpos.x = game.player.pos.x
game.lastpos.y = game.player.pos.y



draw()

window.requestAnimationFrame(update);


}
setInterval(function(){
  keycheck()
},50)
// defs
game = {
  blocks:[],
  magicnum: 23,
  stride:23,
  mouse:{},
  gravity:0,
  players: [],
  player: {pos:{x:934,y:334}},
  lastpos: {x:934,y:334},
  blockColor: '#4a3f42',
  blockinfo: {},
  canvas: document.getElementById('canv'),
  allowJavascriptEmbeddingInChatYesIKnowWhatImDoingPleaseJustAllowThisThanks: false,}
// funcs
game.context = game.canvas.getContext('2d')
window.requestAnimationFrame(update);
gravloop = setInterval(gravity,150)
main()
game.currentX = game.player.pos.x - game.player.pos.x * 2 + 700
})();
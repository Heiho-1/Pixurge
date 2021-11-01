document.addEventListener('contextmenu', event => event.preventDefault());


function main(){
game.screen = {}
	if(typeof localStorage.texture == "undefined"){
    localStorage.texture = `texture:texture:http://localhost/Pixurge/images/wood.png`
	}


	game.keymap = []
grounded = false

// get id
userId = genId()

// Join
let px = game.player.pos.x
let py = game.player.pos.y
socket.emit('join',px,py,userId)


// keypresses
keyp = function(event){
	let posx = game.player.pos.x
	let posy = game.player.pos.y
    game.keymap[event.key] = event.type == 'keydown';
    game.keymap['e'] = event


}
// evtlist
document.addEventListener('keydown',keyp)
document.addEventListener('keyup',keyp)
document.addEventListener('mousemove',function(e){
        game.screen.x = e.clientX
      game.screen.y = e.clientY
  })

game.canvas.addEventListener('mousedown',function(event){
switch(event.which){
case 3:
dBlock(event,"destroy")
break;
case 1:
pBlock(event,"place")
break;

}

if(event.which == 2){
cpick(event)
}

})


/*end*/}

gravity = function(){

if(checkcol(game.player.pos.x, game.player.pos.y + game.magicnum)){
grounded = false
game.player.pos.y+=game.gravity
}else{
grounded = true
}

}
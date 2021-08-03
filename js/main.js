document.addEventListener('contextmenu', event => event.preventDefault());


function main(){
	game.keymap = []
grounded = false
	colorPick = function(){
    game.blockColor = prompt('Choose a color ( name/hex/rgb(r,g,b,o) ):')
    document.getElementById('colorcontainer').style.backgroundColor = game.blockColor
	}
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


}
// evtlist
document.addEventListener('keydown',keyp)
document.addEventListener('keyup',keyp)

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
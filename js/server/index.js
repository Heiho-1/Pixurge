const express = require('express')
const path = require('path')
const app = express();
const PORT = process.env.PORT || 3000
const http = require('http')
const fs = require('fs')
const server = http.createServer(app);
const io = require('socket.io')(server,{
  transports: ['websocket'],
 cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  }
});

//  vars
function genid(){
let id = ''
charset = "㡄ࡄ茢蕃馗茢焣̢ृ−㈑࠲茣{}!@#%^&*()_+1234567890ABCDEFGHIJKLMNOPQRSTUVģࡃ茡猢ሒ⌵╘╘█⡔▄▁"
for(i = 0; i < 6; i++){
id = id.concat(charset.charAt(Math.floor(Math.random()*charset.length)))
}
return id
}

var rplayers = []
var players = []
blocks = JSON.parse(fs.readFileSync('main.map'))
server.listen(PORT)
setInterval(function(){
fs.writeFileSync('main.map',JSON.stringify(blocks))

},99999)
// Connection
 io.on('connection', socket => {

 sockid = socket.id
  console.log('joined')
console.log(sockid)

socket.on('join',(posx,posy,userId) =>{
 for(let i = 0; i < players.length; i++){
 if(players[i][3] == socket.id){
  players.splice(i,1)
 }}

players.push([posx,posy,userId,sockid])
io.sockets.emit('sj',posx,posy,userId,players,blocks,sockid)
})
socket.on('bp',(bpos,bin) =>{

if(Array.isArray(bpos)){
bpos.push(genid())
blocks.push(bpos)
io.sockets.emit('place',bpos,bin)
}else{
    socket.emit('x','Block has to be an array')
}
})
socket.on('disconnect',function(){
    let sockid =  socket.id
    console.log(sockid)
    io.sockets.emit('discon',sockid)
    for(let i = 0; i < players.length; i++){
    if(players[i][3] == sockid){
        players.splice(i,1)
    }

    }
})
socket.on('destroy',(id) =>{
for(let i = 0; i < blocks.length; i++){
if(blocks[i][blocks[i].length-1] == id){
blocks.splice(i,1)
io.sockets.emit('destroy',id)
}}
})
socket.on('move',(posx,posy,sockid) =>{
for(let i = 0; i < players.length; i++){
if(players[i][3] == sockid){
players[i][0] = posx
players[i][1] = posy
}
}
io.sockets.emit('plmv',posx,posy,sockid)
})
socket.on('msg',(chatmsg,userId)=>{
io.sockets.emit('msg',chatmsg,userId)
})

})
// Conncetion
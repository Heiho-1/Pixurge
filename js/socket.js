 cstyle = 'font-family:monospace; font-size:30px; font-color: black; letter-spacing:4px; background-color:rgb(0,0,0,0.4); border:3px solid #404040; border-radius:3px;'

 var connectionOptions =  {
            "force new connection" : true,
            "reconnectionAttempts": "Infinity", 
            "timeout" : 10000,                  
            "transports" : ["websocket"]
      }
    this.socket = io.connect(`${socketAddr}`,connectionOptions);   




// hi
    socket.on('sj',(px,py,userId,players,blocks,sockid) => {

        if(typeof game.players[`${sockid}`] == "undefined" || game.players[`${sockid}`] == null){
   game.blocks = blocks
   if(socket.id == sockid){game.sockid = sockid; game.gravity = game.magicnum}
for(let i = 0; i < players.length;i++){
    if(players[i][3] !== game.sockid){
 game.players[`${players[i][3]}`] = players[i]
    }}
}
}) // On-joined/on-join

socket.on('plmv',(posx,posy,sockid) => {
    if(sockid !== window.sockid){
        if(typeof  game.players[`${sockid}`] !== "undefined"){
 game.players[`${sockid}`][0] = posx

 game.players[`${sockid}`][1] = posy
   } }
}) // Player-pos update


socket.on('x',(r)=>{
console.log(`%c${r}`,cstyle)
})

socket.on('place',(bpos)=>{

game.blocks.push(bpos)
}) // Place block
 
socket.on('destroy',(id)=>{
for(let i = 0; i < game.blocks.length; i++){
if(game.blocks[i][game.blocks[i].length-1] == id){
    game.blocks.splice(i,1)
}}
}) // Destroy block

socket.on("discon",(sockid)=>{
for(i in game.players){
    if(typeof game.players[i] !== "undefined"){
if(game.players[i][3] == sockid){
game.players[i] = undefined

}}}}) // Disconnect

socket.on('msg',(chatmsg,userId)=>{
    if(game.allowJavascriptEmbeddingInChatYesIKnowWhatImDoingPleaseJustAllowThisThanks == true){ // line by Conker#7086 (The variable name)
$('chat').append(`<div style="size:3px;">${userId}: ${chatmsg}</div>`)

    }else{
$('chat').append(`<div style="size:3px; padding:3.40px;">${userId}: ${chatmsg}</div>`.replaceAll('<script>','[BLOCKED]')
         .replaceAll('onload','lmao')
         .replaceAll('</script>','[BLOCKED]')
         .replaceAll('link','lonk')
         .replaceAll('iframe','lol')
         .replaceAll('sex','[HARAM]'))
}
let container = document.getElementById('chatcontainer')
container.scrollTop = container.scrollHeight;

})
chatBar = document.getElementById('chatform')



chatBar.addEventListener('keydown',function(event){
if(event.key == "Enter"){
let chatmsg = `${chatBar.value}` 
chatBar.value = ""
socket.emit('msg',chatmsg,userId)
}})
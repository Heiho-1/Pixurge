function test(){
  document.getElementById("tempform").addEventListener('keydown',function(){
  if(event.key == "Enter"){
    let a = document.getElementById('tempdiv').value
    $('div#tempdiv')[0].remove()
    return a
    
    }
  })
  }


function calert(text){

$("body").append(`
<div style="width:500px; height:200px; position:absolute; text-align: center; top:25%; font-family:pixelmix; left:29%; background-color: rgb(12, 12, 12,0.9); border:2px solid black;" onclick="$('div#tempdiv')[0].remove()" id="tempdiv">
<div style="font-size:40px; position:absolute; top:25px; left:25%; color:white;">${text}</div>
<input type="form" style="width:400px; height:50px; position:absolute; bottom:25%; left:10%; background-color:rgb(180, 180, 180,0.9); outline:none; border:2px solid black; font-family:pixelmix; font-color:white; padding:2px; font-size:24px;" id="tempform" autofocus>
</div>
`)

return test()

}


function showplayers(){
 game.playersopen = true
$("body").append(`
<div style="width:90px; height:200px; position:absolute; top:10%; font-family:pixelmix; left:2%; background-color: rgb(12, 12, 12,0.9); border:2px solid black;" onclick="$('div#tempdiv')[0].remove()" id="tempdiv">
<div style="font-size:9px; position:absolute; top:25px; color:purple;" id="putnameshere">

</div>
</div>
`)
for(i in game.players){
  if(typeof game.players[i] !== "undefined"){
    $('div#putnameshere').append(`> ${game.players[i][2]}<br><br>`)
    console.log('a')
    }
  }
  }
  
  

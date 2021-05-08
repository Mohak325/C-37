class Game{
constructor(){


}
getState(){
    var stateRef = database.ref('gameState');
    stateRef.on("value",function(data){
        gameState = data.val();
    })

}
update(state){
    database.ref('/').update({
        gameState : state
    })

}
start(){
    if(gameState==0){
        player = new Player();
        player.getCount();
        form = new Form();
        form.display();
    }
}
play(){
    form.hide();
    textSize(30);
    text("gameStart",120,100);

    Player.playerInfo();
    
    if(allPlayers !== undefined){
        var displayPosition = 130;
        displayPosition+=20;
        textSize(15);
        text(allPlayers[plr].name + ":" + allPlayers[plr].distance,120,displayPosition);
        for(var plr in allPlayers){
        if(plr==="player"+player.index){
            fill("red")
        }
        else{
            fill("black")
        }
    }
    }
if(keyDown(UP_ARROW)&&player.index !== null){
    player.distance+=50;
    player.update();
}
}
}
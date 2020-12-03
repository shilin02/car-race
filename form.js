class Form{
    constructor(){
        this.input = createInput("name")
        this.button  = createButton("PLAY")
        this.greeting = createElement("h2")
    }
    hide(){
        this.greeting.hide();
        this.input.hide();
        this.button.hide();
    }
    display(){
        var title = createElement('h1')
        title.html("CAR RACING MULTIPLAYER GAME")
        title.position(130,0)
        this.input.position(130,150)
        
       this.button.position(200,200)
        
        this.button.mousePressed(function(){
            this.input.hide();
            this.button.hide();
             player.name = this.input.value();
            playerCount = playerCount+1
            player.index = playerCount
            player.update(name)
            player.updateCount(playerCount)
            this.greeting.html("hello"+name)
            this.greeting.position(130,150)
        })
    }
}

import * as PIXI from "pixi.js"
import background from "./images/earthreal.jpeg"
import buttonPicture from "./images/croppedbutton2.png"
import buttonOnClick from "./images/croppedbuttonDown2.png"
import { Game } from "./game"

class Lobby {

    pixi: PIXI.Application
    loader: PIXI.Loader
    backgroundImage: PIXI.Sprite
    button: PIXI.Sprite
    button2: PIXI.Sprite

    constructor() {
       
    

        
        this.pixi = new PIXI.Application({ width: 900, height: 500 })
        document.body.appendChild(this.pixi.view)

        this.loader = new PIXI.Loader()
        this.loader
        .add("backgroundImage", background)
        .add("buttonImage", buttonPicture)
        .add("buttonImageOnDown", buttonOnClick)    
        this.loader.load(() => this.doneLoading())

    }

    doneLoading(){
        this.backgroundImage= new PIXI.Sprite(this.loader.resources["backgroundImage"].texture!)
        this.pixi.stage.addChild(this.backgroundImage)
        this.backgroundImage.width = 900
        this.backgroundImage.height= 500

      
        this.button = new PIXI.Sprite(this.loader.resources["buttonImage"].texture!)
        this.button.anchor.set(0.5) 
        this.button.x = 420
        this.button.y = 225 
        this.pixi.stage.addChild(this.button)
        this.button.scale.y = 3
        this.button.scale.x = 3
        
        this.button.interactive = true;
        this.button.buttonMode = true;

        this.button.on('mousedown', () => this.onButtonDown())
        this.button.on('mouseup', () => this.onButtonUp())
        
        
    }

    onButtonDown() {
        //this.button = new PIXI.Sprite(this.loader.resources["buttonImageOnDown"].texture!)
        this.button.texture = this.loader.resources["buttonImageOnDown"].texture!
        console.log("working")
        
        
    }

    onButtonUp() {
        //this.button = new PIXI.Sprite(this.loader.resources["buttonImageOnDown"].texture!)
        this.button.texture = this.loader.resources["buttonImage"].texture!
        console.log("working")
        
    }

     
    

}

new Lobby()
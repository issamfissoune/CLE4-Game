import * as PIXI from "pixi.js"
import { Application } from "pixi.js"
import { Assets } from './asset'

export class StartScreen {

    private _pixi: PIXI.Application
    buttonDownSprite : PIXI.Texture = PIXI.Texture.from("croppedbuttonDown2")

    background : PIXI.Texture
    texture: PIXI.Texture<PIXI.Resource>

    constructor() {
        PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

        this._pixi = new PIXI.Application({ width: window.innerWidth, height: window.innerHeight })

        document.body.appendChild(this._pixi.view)

        
        
        let asset = new Assets(this)

        asset
    }

    public loadCompleted() {
        let background : PIXI.Texture = PIXI.Texture.from("startScreenBG")
        let backgroundSprite =  new PIXI.Sprite(background)
        backgroundSprite.scale.set(1)
    
        this._pixi.stage.addChild(backgroundSprite)

        let playButton : PIXI.Texture = PIXI.Texture.from("croppedbutton2");
        let playButtonDown : PIXI.Texture = PIXI.Texture.from("croppedbuttonDown2");

        let playButtonSprite = new PIXI.Sprite(playButton)
        playButtonSprite.anchor.set(0.5)
        playButtonSprite.x = backgroundSprite.width * 0.5
        playButtonSprite.y = backgroundSprite.height * 0.5
        playButtonSprite.scale.set(5);
        
        
        playButtonSprite.on('pointerdown', this.onButtonDown);

        this._pixi.stage.addChild(playButtonSprite)
    }

    private onButtonDown() {    
        
        this.texture
        this.texture = this.buttonDownSprite;

        // this.playButtonSprite.texture = this.loader.resources["buttonImageOnDown"].texture!
        console.log("working")

        window.location.href = "game.html"
    }



}


import * as PIXI from "pixi.js"
// import { Assets } from './asset'

export class StartScreen {

    private _pixi: PIXI.Application

    background : PIXI.Texture

    constructor() {
        PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

        this._pixi = new PIXI.Application({ width: window.innerWidth, height: window.innerHeight })

        document.body.appendChild(this._pixi.view)
        
        let asset = new Assets(this)

        asset
    }

    public loadCompleted() {
        let background : PIXI.Texture = PIXI.Texture.from("backgroundImage")
        let backgroundSprite =  new PIXI.Sprite(background)
        backgroundSprite.scale.set(1)
        this._pixi.stage.addChild(backgroundSprite)

        let startButton : PIXI.Texture = PIXI.Texture.from("startButton")
        let startButtonSprite =  new PIXI.Sprite(startButton)
        startButtonSprite.scale.set(0.5)
        startButtonSprite.anchor.set(0.5)
        startButtonSprite.x = window.innerWidth * 0.5
        startButtonSprite.y = window.innerHeight * 0.5
        this._pixi.stage.addChild(startButtonSprite)

    }



}
import { destroyTextureCache } from "@pixi/utils"
import * as PIXI from "pixi.js"
import { Assets } from './asset'
// import { FinnIdle } from './finnIdle'
// import { FinnRun } from "./finnRun"
// import { FinnDamage } from "./finnDamage"
// import { FinnAttack } from "./FinnAttack"
import { FinnTheHuman } from "./FinnTheHuman"

export class Game {
    private finnTheHuman: FinnTheHuman
    // private finnIdle: FinnIdle
    private _pixi: PIXI.Application
    // private finnRun: FinnRun
    // private finnDamage: FinnDamage
    // private finnAttack: FinnAttack
    background: PIXI.Texture
    
    // loader: PIXI.Loader

    

    // Properties
    
    public get pixi(): PIXI.Application { return this._pixi }

    constructor() {
        PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
        console.log("hoi")
        // this._pixi = new PIXI.Application({ width: 1440, height: 900, backgroundColor: 0x1099bb })
        this._pixi = new PIXI.Application({ width: window.innerWidth, height: window.innerHeight })
        // this._pixi = new PIXI.Application({ 
        //     width: window.innerWidth, 
        //     height: window.innerHeight, 
        //     resolution: devicePixelRatio  })
        document.body.appendChild(this._pixi.view)

    


        let asset = new Assets(this)
        // this.loader = asset
        console.log(asset)
         
    }

    public loadCompleted() {
        let background : PIXI.Texture = PIXI.Texture.from("backgroundImage")
        let backgroundSprite =  new PIXI.Sprite(background)
        backgroundSprite.scale.set(0.75)
        this._pixi.stage.addChild(backgroundSprite)

        let frames: PIXI.Texture [][] = this.createFinnFrames()
        this.finnTheHuman = new FinnTheHuman(this, frames, 50, 50)

        // let frames = this.createFinnFrames()
        // this.finnIdle = new FinnIdle(this, frames, 100, 100)
        // let run = this.createFinnFrames2()
        // this.finnRun = new FinnRun(this, run, 100, 100)
        // let damage = this.createFinnFrames3()
        // this.finnDamage = new FinnDamage(this, damage, 100, 100)
        // let attack = this.createFinnFrames4()
        // this.finnAttack = new FinnAttack(this, attack, 100, 100)
        
        this._pixi.ticker.add((delta: number) => this.update(delta))
       
    }

    private update(delta: number) {
        // this.finnIdle.update(delta)
        // this.finnRun.update(delta)
        // this.finnDamage.update(delta)
        // this.finnAttack.update(delta)
        this.finnTheHuman.update(delta)
    }

    private createFinnFrames(): PIXI.Texture[][] {
        // create an array of textures from an image path
        let idle: PIXI.Texture[] = [];
        let run : PIXI.Texture[] = [];
        let damage: PIXI.Texture[]= [];
        let attack : PIXI.Texture[] = [];
        let death: PIXI.Texture[] = [];
        for (let i = 1; i <= 9; i++) {
            // magically works since the spritesheet was loaded with the pixi loader
            
            idle.push(PIXI.Texture.from(`FinnIdle${i}.png`));
        }

        for(let i = 1; i<=7; i++){
            run.push(PIXI.Texture.from(`FinnSpriteRun${i}.png`))
        }
        
        for(let i = 1; i<=3; i++){
            damage.push(PIXI.Texture.from(`FinnDamage${i}.png`))
        }

       
        for(let i = 1; i<=5; i++){
            attack.push(PIXI.Texture.from(`FinnAttack${i}.png`))
        }

        for(let i= 1; i<= 5; i++){
            death.push(PIXI.Texture.from(`FinnDead${i}.png`))
        }


        return [idle, run, damage, attack, death];
        
        
        
    }

    // private createFinnFrames2(): PIXI.Texture[]{
    //     let run : PIXI.Texture[] = []
    //     for(let i = 1; i<=7; i++){
    //         run.push(PIXI.Texture.from(`FinnSpriteRun${i}.png`))
    //     }
    //     return run 
    // }
    
    

    // private createFinnFrames3(): PIXI.Texture[]{
    //     let damage : PIXI.Texture[] = []

    //     for(let i = 1; i<=3; i++){
    //         damage.push(PIXI.Texture.from(`FinnDamage${i}.png`))
    //     }
    //     return damage
    // }

    // private createFinnFrames4(): PIXI.Texture[]{
    //     let attack : PIXI.Texture[] = []
    //     for(let i = 1; i<=5; i++){
    //         attack.push(PIXI.Texture.from(`FinnAttack${i}.png`))
    //     }
    //     return attack
    // }
}


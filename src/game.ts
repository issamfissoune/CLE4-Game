import * as PIXI from "pixi.js"
import { Assets } from './asset'
import { FinnTheHuman } from "./FinnTheHuman"
import { HealthBar } from "./healthbar"
import { Worm } from "./worm"
import { Question} from "./question"


export class Game {
    private finnTheHuman: FinnTheHuman
    private _pixi: PIXI.Application
    background: PIXI.Texture
    private worm: Worm
    qBox: PIXI.Texture
    healthbar: HealthBar
    loader: Assets

    // Properties
    
    public get pixi(): PIXI.Application { return this._pixi }

    constructor(pixi: PIXI.Application) {
        PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
        this._pixi = pixi

        this.loader = new Assets(this)
    }

    public loadCompleted() {
        let background : PIXI.Texture = PIXI.Texture.from("city2")
        let backgroundSprite =  new PIXI.Sprite(background)
        backgroundSprite.scale.set(0.75)
        this._pixi.stage.addChild(backgroundSprite)

        


        let wormFrames: PIXI.Texture [] [] = this.createWormFrames()
        this.worm = new Worm(this, wormFrames, 50, 50)
        
<<<<<<< HEAD
        let question = new Question(750,300,"Wat is een divergente bewegin")
        this._pixi.stage.addChild(question)

        let heart = PIXI.Texture.from("heart")
        let heartSprite = new PIXI.Sprite(heart)
        this._pixi.stage.addChild(heartSprite)
        heartSprite.scale.set(0.2)
        heartSprite.x = 80
        heartSprite.y = 10

        let heart2 = PIXI.Texture.from("heart")
        let heart2Sprite = new PIXI.Sprite(heart2)
        this._pixi.stage.addChild(heart2Sprite)
        heart2Sprite.scale.set(0.2)
        heart2Sprite.x = 1080
        heart2Sprite.y = 10

       

        let OpponentImage = PIXI.Texture.from("FinnIdle1.png")
        let OpponentImageSprite = new PIXI.Sprite(OpponentImage)
        this._pixi.stage.addChild(OpponentImageSprite)
        OpponentImageSprite.scale.set(6)
        OpponentImageSprite.y = 70
        OpponentImageSprite.x = 35
        OpponentImageSprite.anchor.set(0.5)

        let OpponentImage2 = PIXI.Texture.from("wormDie1.png")
        let OpponentImageSprite2 = new PIXI.Sprite(OpponentImage2)
        this._pixi.stage.addChild(OpponentImageSprite2)
        OpponentImageSprite2.scale.set(7)
        OpponentImageSprite2.y = 50
        OpponentImageSprite2.x = 1410
        OpponentImageSprite2.anchor.set(0.5)
      
=======
        
        // let question2 = new Question(300, 300, "YOLO XD")
        // this._pixi.stage.addChild(question2)
        
        // let question3 = new Question(800, 200, "hoe heet je")
        // this._pixi.stage.addChild(question3)
        // let qBox: PIXI.Texture = PIXI.Texture.from("textBox")
        // let qBoxSprite = new PIXI.Sprite(qBox)
        // this._pixi.stage.addChild(qBoxSprite)
        // qBoxSprite.x = 700
        // qBoxSprite.y = 100
        // qBoxSprite.scale.set(2)
        // qBoxSprite.anchor.set(0.5)

        // let style = new PIXI.TextStyle({
        //     fontFamily: "Arial",
        //     fontSize: 12,
        //     fontWeight: 'bold',
        //     fill: '#00ff99',
        //     align: "center"

        
        // })

         // this.healthbar = new HealthBar(300, 325, 100, 0xff0000, 0xff0000)
        // this._pixi.stage.addChild(this.healthbar)
        // this.healthbar.scale.set(20)

        // this.healthbar = new HealthBar(1100, 325, 100, 0xff0000, 0xff0000)
        // this._pixi.stage.addChild(this.healthbar)
        // this.healthbar.scale.set(20)

        // let vraag1 = new PIXI.Text('Wat is een divergente beweging', style);
        // vraag1.x = 0
        // vraag1.anchor.set(0.5)
        // // vraag1.y = 100
        // qBoxSprite.addChild(vraag1)

>>>>>>> 05a12d278b095ade9edc6db06f753127ed476df1
        let frames: PIXI.Texture [][] = this.createFinnFrames()
        let sound = this.loader.resources["swordSlash"].data!
        this.finnTheHuman = new FinnTheHuman(this, frames, 50, 50, sound)
        
        this._pixi.ticker.add((delta: number) => this.update(delta))
       
    }

    private update(delta: number) {
        if(this.collision(this.finnTheHuman, this.worm)){
            console.log("player touches enemy 💀")
            this.finnTheHuman.x = 600
            let question = new Question(750,300,"Wat is een divergente bewegin")
        this._pixi.stage.addChild(question)
       

        let heart = PIXI.Texture.from("heart")
        let heartSprite = new PIXI.Sprite(heart)
        this._pixi.stage.addChild(heartSprite)
        heartSprite.scale.set(0.2)
        heartSprite.x = 80
        heartSprite.y = 10

        let heart2 = PIXI.Texture.from("heart")
        let heart2Sprite = new PIXI.Sprite(heart2)
        this._pixi.stage.addChild(heart2Sprite)
        heart2Sprite.scale.set(0.2)
        heart2Sprite.x = 1080
        heart2Sprite.y = 10

       

        let OpponentImage = PIXI.Texture.from("FinnIdle1.png")
        let OpponentImageSprite = new PIXI.Sprite(OpponentImage)
        this._pixi.stage.addChild(OpponentImageSprite)
        OpponentImageSprite.scale.set(6)
        OpponentImageSprite.y = 70
        OpponentImageSprite.x = 35
        OpponentImageSprite.anchor.set(0.5)

        let OpponentImage2 = PIXI.Texture.from("wormDie1.png")
        let OpponentImageSprite2 = new PIXI.Sprite(OpponentImage2)
        this._pixi.stage.addChild(OpponentImageSprite2)
        OpponentImageSprite2.scale.set(7)
        OpponentImageSprite2.y = 50
        OpponentImageSprite2.x = 1410
        OpponentImageSprite2.anchor.set(0.5)
        }
        
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

    private createWormFrames (): PIXI.Texture[][]{
        let idleWorm: PIXI.Texture[] = [];
        let damageWorm: PIXI.Texture[]= [];
        let jumpWorm : PIXI.Texture[] = [];
        let deathWorm: PIXI.Texture[] = [];
        for (let i = 1; i <= 8; i++) {
            // magically works since the spritesheet was loaded with the pixi loader
            
            idleWorm.push(PIXI.Texture.from(`WormIdle${i}.png`));
        }

        for(let i = 1; i<=4; i++){
            damageWorm.push(PIXI.Texture.from(`wormDamage${i}.png`))
        }
        
        for(let i = 1; i<=8; i++){
            jumpWorm.push(PIXI.Texture.from(`wormJump${i}.png`))
        }

       
        for(let i = 1; i<=6; i++){
            deathWorm.push(PIXI.Texture.from(`wormDie${i}.png`))
        }

        


        return [idleWorm, damageWorm, jumpWorm, deathWorm];
        
        
        
    }

    collision(sprite1:PIXI.Sprite, sprite2:PIXI.Sprite) {
        const bounds1 = sprite1.getBounds()
        const bounds2 = sprite2.getBounds()

        return bounds1.x < bounds2.x + bounds2.width
            && bounds1.x + bounds1.width > bounds2.x
            && bounds1.y < bounds2.y + bounds2.height
            && bounds1.y + bounds1.height > bounds2.y;
    }

}
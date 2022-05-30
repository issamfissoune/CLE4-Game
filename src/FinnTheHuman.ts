import * as PIXI from 'pixi.js'
import { Game } from './game'

export class FinnTheHuman extends PIXI.AnimatedSprite {

    // private readonly gravity: number = 0.0981
    // private readonly bounce: number = 0.985
    // idle : PIXI.Texture[]
    // run : PIXI.Texture[]
    private game: Game
    private speedX: number = 0
    // private speedY: number = 0
    private frames: PIXI.Texture[][] = []
    private previousFrame: number = -1

    constructor(game: Game, textures: PIXI.Texture[][], x: number, y: number,) {
        super(textures[0])
        this.game = game
        this.frames = textures
        /*
         * An AnimatedSprite inherits all the properties of a PIXI sprite
         * so you can change its position, its anchor, mask it, etc
         */

        this.x = x
        this.y = 550
        this.scale.set(6)
        this.animationSpeed = 0.05;
        this.loop = true
        this.anchor.set(0.5)
        this.play();

        this.game.pixi.stage.addChild(this);
        // this.onComplete = () => this.destroy()
        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))

        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))
        
        

    }

    public update(delta: number): void {
        super.update(delta)
        this.x += this.speedX * delta

        // this.fall(delta)
        // this.keepInScreen()
    }

    // private fall(delta): void {
    //     this.x += this.speedX * delta
    //     this.y += this.speedY * delta
    //     this.speedY += this.gravity
    // }

    // private keepInScreen() {
    //     if (this.getBounds().left < 0) {
    //         this.speedX *= -1
    //         this.x = this.game.pixi.screen.left
    //     }
    //     if (this.getBounds().right > this.game.pixi.screen.right) {
    //         this.speedX *= -1
    //         this.x = this.game.pixi.screen.right - this.width
    //     }
    //     if (this.getBounds().bottom > this.game.pixi.screen.bottom) {
    //         this.y =this.game.pixi.screen.bottom - this.height
    //     }
    // }

    onKeyDown(e: KeyboardEvent): any {

        switch (e.key.toUpperCase()) {
            case "A":
            case "ARROWLEFT":
                this.speedX = -3
                this.scale.set(-6, 6)
                this.setFrames(1)
                break
            case "D":
            case "ARROWRIGHT":
                this.speedX = 3
                this.scale.set(6)
                this.setFrames(1)
                break
            case "Q":
                this.scale.set(6)
                this.setFrames(3)
                // if(this.y > 0){
                //    this.scale.set(-1, 4)
                // } else{
                //     this.scale.set(4,4)
                // }
        }
    }

    onKeyUp(e: KeyboardEvent): any {
        switch (e.key.toUpperCase()) {
            case " ":
                break;
            case "A":
            case "D":
            case "Q":    
            case "ARROWLEFT":
            case "ARROWRIGHT":
                this.speedX = 0
                this.setFrames(0)
                break
        }
    }

    private setFrames(frame: number) {
        if(this.previousFrame != frame) {
            console.log("set frames");
            this.textures = this.frames[frame]
            this.loop = true
            this.play()
            this.previousFrame = frame
        }
    }

    onButtonDown() {
        //this.button = new PIXI.Sprite(this.loader.resources["buttonImageOnDown"].texture!)
        this.setFrames(3)
        console.log("working")
        }

    onButtonUp() {
            //this.button = new PIXI.Sprite(this.loader.resources["buttonImageOnDown"].texture!)
        this.setFrames(0)    
            
        }        
}
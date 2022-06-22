import * as PIXI from "pixi.js"
import { Game } from "./game"


export class BossWorm extends PIXI.AnimatedSprite {

   
    private game: Game
    private frames: PIXI.Texture[][] = []
    private previousFrame: number = -1
   

    constructor(game: Game, textures: PIXI.Texture[][], x: number, y: number,) {
        super(textures[0])
        this.game = game
        this.frames = textures
        
        this.x = x
        this.y = y
        this.scale.set(10)
        this.animationSpeed = 0.06;
        this.loop = true
        this.anchor.set(0.5)
        this.play();

        console.log(this);

        this.game.pixi.stage.addChild(this);
   
        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))

        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))


    }

    public update(delta: number): void {

        super.update(delta)

    }

    onKeyDown(e: KeyboardEvent): any {

        switch (e.key.toUpperCase()) {
            
            case "Q":
                this.scale.set(5)
                this.setFrames(2)
                
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
}

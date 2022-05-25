import * as PIXI from 'pixi.js'
import { Game } from './game'

export class FinnTheHuman extends PIXI.AnimatedSprite {

    // private readonly gravity: number = 0.0981
    // private readonly bounce: number = 0.985
    idle : PIXI.Texture[]
    run : PIXI.Texture[]
    private game: Game
    private speedX: number = 1
    private speedY: number = 5
    private frames: PIXI.Texture[][] = []

    constructor(game: Game, textures: PIXI.Texture[][], x: number, y: number, ) {
        super(textures[1])
        this.game = game
        this.frames = textures
        /*
         * An AnimatedSprite inherits all the properties of a PIXI sprite
         * so you can change its position, its anchor, mask it, etc
         */

        this.x = 300
        this.y = 300
        this.scale.set(4)
        this.animationSpeed = 0.05;
        this.loop = true
        this.anchor.set(0.5)
        this.play();

        this.game.pixi.stage.addChild(this);
        // this.onComplete = () => this.destroy()

    }

    public update(delta: number): void {
        super.update(delta)


        // this.fall(delta)
        this.keepInScreen()
    }

    // private fall(delta): void {
    //     this.x += this.speedX * delta
    //     this.y += this.speedY * delta
    //     this.speedY += this.gravity
    // }

    private keepInScreen() {
        if (this.getBounds().left < 0) {
            this.speedX *= -1
            this.x = this.game.pixi.screen.left
        }
        if (this.getBounds().right > this.game.pixi.screen.right) {
            this.speedX *= -1
            this.x = this.game.pixi.screen.right - this.width
        }
        if (this.getBounds().bottom > this.game.pixi.screen.bottom) {
            this.y =this.game.pixi.screen.bottom - this.height
        }
    }


}
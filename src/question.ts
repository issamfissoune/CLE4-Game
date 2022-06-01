import * as PIXI from 'pixi.js'
import { Game} from './game'

export class VraagBox extends PIXI.Sprite{

    
    
    constructor( texture: PIXI.Texture, x: number, y:number, vraag: string){
        super(texture)
       

        this.x = x
        this.y = y

    }
}
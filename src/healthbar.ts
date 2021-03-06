import * as PIXI from "pixi.js"

export class HealthBar extends PIXI.Graphics {
    
    healthValue: number;
    maxHealth: number;
    color: number;
    borderColor : number;
    filter : number
        

    constructor(x: number, y: number , maxHealth: number, color: number, borderColor : number){
        super()

        let filter = new PIXI.filters.ColorMatrixFilter()
        this.filters = [filter];
        filter.hue(maxHealth, false);

        this.x = x;
        this.y = y;
        this.color = color;
        this.borderColor = borderColor;
        // this.pivot.set(0.5)
        this.show()
    }

    show() {
        this.lineStyle(1, this.borderColor)
        this.beginFill(0xff0000)
        this.drawRect(-13, -12, window.innerWidth * 0.02, 2);
        this.endFill()
    }
}
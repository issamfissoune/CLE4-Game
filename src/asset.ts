import * as PIXI from 'pixi.js'


// import { Game } from './game'
import backgroundImage2 from './images/City2.png'



import { Game } from './game'
import backgroundImage from './images/City1.png'
import { StartScreen } from './startScreen'
import startScreenBG from './images/startScreenBG.png'
import croppedbutton2 from './images/croppedbutton2.png'
import croppedbuttonDown2 from './images/croppedbuttonDown2.png'
import textBox from './images/textBox.png'
import swordSlash from 'url:./sounds/swordSlash.mp3'
import dirt from './images/dirt.png'
import versus from './images/vs2.png'
import heart from "./images/heartHealth.png"


// json bestand moet in de static map omdat de pixi loader de json inleest en interpreteert
// spritesheet png moet in de static map omdat de pixi loader niet de dynamische bestandsnaam kan gebruiken
// bestanden die niet in de static map staan kan je als volgt importeren
// import catImage from "./images/cat_39.png"

type AssetFile = { name: string, url: string }

export class Assets extends PIXI.Loader {

    // private game: Game
    private assets: AssetFile[] = []

    constructor(game: Game) {
        super()
        // this.game = game
        console.log("hi")
        this.assets = [
            // {name: "finn_idle", url: "finnIdle.json" },
            // {name: "finn_run", url:"finnRun.json"},
            // {name: "finn_damage", url: "FinnDamage.json"},
            // {name: "finn_attack", url: "FinnAttack.json"},
            {name : "swordSlash", url : swordSlash },
            {name : "croppedbutton2", url: croppedbutton2 },
            {name : "croppedbuttonDown2", url: croppedbuttonDown2 },
            {name: "backgroundImage", url: backgroundImage},
            {name: "All_Moves", url: "FinnCompleteSheet.json"},
            {name: "city2", url: backgroundImage2},
            {name: "startScreenBG", url: startScreenBG},
            {name: "worm", url: "wormSpritesheet.json"},
            {name: "textBox", url:textBox},
            {name: "dirt", url: dirt},
            {name: "versus", url: versus},
            {name: "heart", url: heart},
            
        ]

        this.assets.forEach(asset => {
            this.add(asset.name, asset.url)
        })

        this.onError.add((arg) => { console.error(arg) })
        this.onProgress.add((loader) => this.showProgress(loader))
        this.load(() => game.loadCompleted())
    }

    private showProgress(loader) {
        console.log(`Loading ${loader.progress}%`)
    }
}
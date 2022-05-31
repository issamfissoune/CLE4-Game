import * as PIXI from 'pixi.js'
// import { Game } from './game'
import backgroundImage from './images/City1.png'
import { StartScreen } from './startScreen'
import startButton from './images/newGameButton.png'

// json bestand moet in de static map omdat de pixi loader de json inleest en interpreteert
// spritesheet png moet in de static map omdat de pixi loader niet de dynamische bestandsnaam kan gebruiken
// bestanden die niet in de static map staan kan je als volgt importeren
// import catImage from "./images/cat_39.png"

type AssetFile = { name: string, url: string }

export class Assets extends PIXI.Loader {

    // private game: Game
    private assets: AssetFile[] = []

    constructor(game: StartScreen) {
        super()
        // this.game = game
        console.log("hi")
        this.assets = [
            // {name: "finn_idle", url: "finnIdle.json" },
            // {name: "finn_run", url:"finnRun.json"},
            // {name: "finn_damage", url: "FinnDamage.json"},
            // {name: "finn_attack", url: "FinnAttack.json"},
            {name : "startButton", url: startButton},
            {name: "backgroundImage", url: backgroundImage},
            {name: "All_Moves", url: "FinnCompleteSheet.json"}
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
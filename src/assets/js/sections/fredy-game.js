import SpriteAnim from '../sections/sprite-anim.js'
import Controles from '../sections/controles.js'

class FredyGame {
    constructor() {

        this.init()

    }

    init() {
        //TweenMax.to('.element1', 3, {y:'100', onUpdate:this.reviewTest.bind(this)})
        const playerAnim = new SpriteAnim({
            animWidth: 108,
            animHeight: 100,
            imageSource: './assets/img/player-run.png',
            canvasID: 'player',
            animSpeed: 20,
            totalFrames: 2,
            canvasBGcolor: 'rgba(200,50,200,0)'
        })

		const controles = new Controles()


        playerAnim.init()

    }

    reviewTest() {
        // if(Draggable.hitTest('.element1', '.element2', '50%')){
        // 	console.log('hit puto!')
        // }

        //https://lh6.googleusercontent.com/YEZOr538ER-JlKeYG3iMVxChswAmLaj3mf9O1ttHE9U2oBEwRiNEMWwVuIkt1B0BoT087j6hd071CKlThpW7c6mPi2nNcnIdw6l05qvjMdrYzEhfuZQ7bUdz4CYxOz7RLtmGz5gz


    }
}

export default FredyGame;

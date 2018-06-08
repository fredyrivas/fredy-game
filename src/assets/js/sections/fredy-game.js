import SpriteAnim from '../sections/sprite-anim.js'
import Controles from '../sections/controles.js'
import EnemiesGenerator from '../sections/enemies-generator.js'



class FredyGame {
    constructor() {

        this.init()
    }

    init() {
        const playerAnim = new SpriteAnim({
            animWidth: 108,
            animHeight: 100,
            imageSource: './assets/img/player-run.png',
            canvasID: 'player',
            animSpeed: 20,
            totalFrames: 2,
            canvasBGcolor: 'rgba(200,50,200,0)'
        })
        playerAnim.init()

		const controles = new Controles({
            playerSpeed: 10,
            jumpPower: -160,
            shootingRepetitionSpeed: .4,
            bulletSpeed: 3.5,
            bulletImage: 'assets/img/bullet.png',
            gameContainer: '.gameContainer',
            playerContainer: '#player'
        })

        const enemiesGenerator = new EnemiesGenerator({
            groundEnemyInterval: [1,2],
            enemyGroundImage: 'assets/img/enemy-ground.png',
            enemyGroundSpeed: 5,
            airEnemyInterval: [.5,2],
            enemyAirImage: 'assets/img/bird.png',
            enemyAirSpeed: 2,
            playerContainer: '#player'
        })
    }
}

export default FredyGame;

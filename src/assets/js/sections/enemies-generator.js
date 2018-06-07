import EnemyGround from '../sections/enemy-ground.js'
import EnemyAir from '../sections/enemy-air.js'


class EnemiesGenerator{
    constructor(options){

        this.groundEnemyInterval = options.groundEnemyInterval
        this.enemyGroundImage = options.enemyGroundImage
        this.enemyGroundSpeed = options.enemyGroundSpeed || 5

        this.airEnemyInterval = options.airEnemyInterval
        this.enemyAirImage = options.enemyAirImage
        this.enemyAirSpeed = options.enemyAirSpeed || 2

        this.playerContainer = options.playerContainer

        this.init()
    }

    init(){
        this.runEnemiesGroundGenerator()
        this.runEnemiesAirGenerator()
    }

    getNewEnemyGround(){
        TweenMax.delayedCall(Math.random() * (this.groundEnemyInterval[1] - this.groundEnemyInterval[0]) + this.groundEnemyInterval[0], function () {
            const enemyGround = new EnemyGround({
                speed: this.enemyGroundSpeed,
                enemyImage: this.enemyGroundImage,
                playerContainer: this.playerContainer
            })
            this.runEnemiesGroundGenerator()
        }.bind(this))
    }


    getNewEnemyAir(){
        TweenMax.delayedCall(Math.random() * (this.airEnemyInterval[1] - this.airEnemyInterval[0]) + this.airEnemyInterval[0], function () {
            const enemyAir = new EnemyAir({
                speed: this.enemyAirSpeed,
                enemyImage: this.enemyAirImage,
                playerContainer: this.playerContainer
            })
            this.runEnemiesAirGenerator()
        }.bind(this))
    }

    runEnemiesGroundGenerator(){
        this.getNewEnemyGround()
    }

    runEnemiesAirGenerator(){
        this.getNewEnemyAir()
    }


}

export default EnemiesGenerator

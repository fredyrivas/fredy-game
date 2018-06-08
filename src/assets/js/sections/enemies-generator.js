import EnemyGround from '../sections/enemy-ground.js'
import EnemyAir from '../sections/enemy-air.js'
import LifeController from '../sections/life-controller.js'

const lifeController = new LifeController()


class EnemiesGenerator{
    constructor(options){

        this.groundEnemyInterval = options.groundEnemyInterval
        this.enemyGroundImage = options.enemyGroundImage
        this.enemyGroundSpeed = options.enemyGroundSpeed || 5

        this.airEnemyInterval = options.airEnemyInterval
        this.enemyAirImage = options.enemyAirImage
        this.enemyAirSpeed = options.enemyAirSpeed || 2

        this.playerContainer = options.playerContainer

        this.keepGenerating = true

        this.init()
    }

    init(){
        this.runEnemiesGroundGenerator()
        this.runEnemiesAirGenerator()
    }

    getNewEnemyGround(){
        if(this.keepGenerating){
            TweenMax.delayedCall(Math.random() * (this.groundEnemyInterval[1] - this.groundEnemyInterval[0]) + this.groundEnemyInterval[0], function () {
                const enemyGround = new EnemyGround({
                    speed: this.enemyGroundSpeed,
                    enemyImage: this.enemyGroundImage,
                    playerContainer: this.playerContainer,
                    lifeController: lifeController,
                    enemiesGenerator: this
                })
                this.runEnemiesGroundGenerator()
            }.bind(this))
        }
    }


    getNewEnemyAir(){
        if(this.keepGenerating){
            TweenMax.delayedCall(Math.random() * (this.airEnemyInterval[1] - this.airEnemyInterval[0]) + this.airEnemyInterval[0], function () {
                const enemyAir = new EnemyAir({
                    speed: this.enemyAirSpeed,
                    enemyImage: this.enemyAirImage,
                    playerContainer: this.playerContainer,
                    lifeController: lifeController,
                    enemiesGenerator: this
                })
                this.runEnemiesAirGenerator()
            }.bind(this))
        }
    }

    runEnemiesGroundGenerator(){
        this.getNewEnemyGround()
    }

    runEnemiesAirGenerator(){
        this.getNewEnemyAir()
    }


    stopAllGenerators(){
        this.keepGenerating = false
    }


}

export default EnemiesGenerator

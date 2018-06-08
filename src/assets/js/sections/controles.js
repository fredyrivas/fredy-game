import Shotgun from '../sections/shotgun.js'
import PointsController from '../sections/points-controller.js'

const pointsController = new PointsController()

class Controles {
    constructor(options) {

        this.playerSpeed = options.speed || 10
        this.jumpPower = options.jumpPower || -130
        this.gameContainer = options.gameContainer
        this.playerContainer = options.playerContainer

        this.shootingRepetitionSpeed = options.shootingRepetitionSpeed || 1
        this.bulletSpeed = options.bulletSpeed || 3.5
        this.shotLimit = 0
        this.bulletImage = options.bulletImage

        this.playerX = 0
        this.isJumping = false
        this.keys = {}

        this.setEvents()
    }

    setEvents() {
        $(document).keydown(function(e) {
            this.keys[e.which] = true;
        }.bind(this))

        $(document).keyup(function(e) {
            delete this.keys[e.which]
        }.bind(this))

        this.activateMoves()
    }

    activateMoves() {

        if (this.keys[39] != undefined) {
            this.moveRight()
        }
        if (this.keys[37] != undefined) {
            this.moveLeft()
        }
        if (this.keys[38] != undefined) {
            this.jump()
        }
        if (this.keys[32] != undefined) {
            this.shot()
        }

        requestAnimationFrame(this.activateMoves.bind(this))
    }

    moveRight() {
        if(this.playerX < $(this.gameContainer).width()-($(this.playerContainer).width()+this.playerSpeed)){
            this.playerX += this.playerSpeed
            TweenMax.set(this.playerContainer, { x: this.playerX })
        }
    }
    moveLeft() {
        if(this.playerX > 0){
            this.playerX -= this.playerSpeed
            TweenMax.set(this.playerContainer, { x: this.playerX })
        }
    }
    jump() {
        if (!this.isJumping) {
            this.isJumping = true
            TweenMax.to(this.playerContainer, .23, {
                y: this.jumpPower,
                yoyo: true,
                repeat: 1,
                onComplete: function() {
                    this.isJumping = false
                }.bind(this)
            })
        }
    }
    shot(){
        if(this.shotLimit < 1){
            this.shotLimit++
            const shotgun = new Shotgun({
                gameContainer: this.gameContainer,
                playerContainer: this.playerContainer,
                speed: this.bulletSpeed,
                bulletImage: this.bulletImage,
                pointsController: pointsController
            })
            TweenMax.delayedCall(this.shootingRepetitionSpeed, function () {
                this.shotLimit = 0
            }.bind(this))
        }
    }
}

export default Controles

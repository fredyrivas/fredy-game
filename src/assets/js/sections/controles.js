class Controles {
    constructor() {

        this.playerX = 0
        this.speed = 10
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

        requestAnimationFrame(this.activateMoves.bind(this))
    }

    moveRight() {
        this.playerX += this.speed
        TweenMax.set('#player', { x: this.playerX })
    }
    moveLeft() {
        this.playerX -= this.speed
        TweenMax.set('#player', { x: this.playerX })
    }
    jump() {
        if (!this.isJumping) {
            this.isJumping = true
            TweenMax.to('#player', .2, {
                y: '-130',
                yoyo: true,
                repeat: 1,
                onComplete: function() {
                    this.isJumping = false
                }.bind(this)
            })
        }
    }
}

export default Controles

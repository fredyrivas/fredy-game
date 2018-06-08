import Explosions from '../sections/explosions.js'

class Shotgun{
    constructor(options){

        this.gameContainer = options.gameContainer
        this.playerContainer = options.playerContainer
        this.speed = options.speed
        this.bulletImage = options.bulletImage

        this.pointsController = options.pointsController

        this.init()
    }

    init(){
        this.addBullet()
    }

    getNewBullet(){
        return '<img class="bullet" src="'+this.bulletImage+'">'
    }

    addBullet(){
        const newBullet = $(this.getNewBullet())
        $(this.gameContainer).append(newBullet)
        this.animBullet(newBullet)
    }

    animBullet(_bullet){
        var playerr = document.getElementById(this.playerContainer.substr(1,this.playerContainer.length))
        TweenMax.fromTo(_bullet, this.speed, {x:playerr._gsTransform.x+$(this.playerContainer).width(), y:playerr._gsTransform.y},
            {x:$(window).width()+500, y:playerr._gsTransform.y, ease:Power1.easeOut, onUpdate:function () {
                this.hitTesting(_bullet)
            }.bind(this),
                onComplete:function () {
            $(_bullet).remove()
        }})
    }

    hitTesting(_bllt) {

        let i = $('.enemy-ground').length

        if(i > 0){
            while(--i > -1){
                if(Draggable.hitTest(_bllt, $('.enemy-ground')[i], 0)){

                    const explosions = new Explosions({
                        explosionImage: 'assets/img/explosion.png',
                        explosionX: _bllt[0]._gsTransform.x,
                        explosionY: _bllt[0]._gsTransform.y-10
                    })

                    $('.enemy-ground')[i].remove()
                    $(_bllt).remove()

                    this.pointsController.mainPoints += 2
                    this.pointsController.updatePoints()
                }
            }
        }

        let j = $('.enemy-air').length

        if(j > 0){
            while(--j > -1){
                if(Draggable.hitTest(_bllt, $('.enemy-air')[j], 0)){

                    const explosions = new Explosions({
                        explosionImage: 'assets/img/explosion.png',
                        explosionX: _bllt[0]._gsTransform.x,
                        explosionY: _bllt[0]._gsTransform.y-10
                    })

                    $('.enemy-air')[j].remove()
                    $(_bllt).remove()


                    this.pointsController.mainPoints += 5
                    this.pointsController.updatePoints()
                }
            }
        }
    }
}

export default Shotgun

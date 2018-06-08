
class EnemyAir{
    constructor(options){

        this.speed = options.speed
        this.enemyImage = options.enemyImage
        this.playerContainer = options.playerContainer

        this.hitLimit = 0

        this.lifeController = options.lifeController

        this.enemiesGenerator = options.enemiesGenerator

        this.init()
    }

    init(){
        this.addEnemy()
    }

    getNewEnemy(){
        return '<img class="enemy-air" src="'+this.enemyImage+'">'
    }

    addEnemy(){
        const newEnemy = $(this.getNewEnemy())
        $('.gameContainer').append(newEnemy)
        this.animEnemy(newEnemy)
    }

    animEnemy(_enemy){
        TweenMax.fromTo(_enemy, this.speed, {x:$(window).width()+100},
            {x:-300, ease:Linear.easeNone, onUpdate:function () {
                this.hitTesting(_enemy)
            }.bind(this),
                onComplete:function () {
            $(_enemy).remove()
        }})


        TweenMax.fromTo(_enemy, this.speed/2, {y:Math.random()*($('.gameContainer').height()-0)+0}, {y:Math.random()*($('.gameContainer').height()-0)+0, yoyo:true, repeat:1})
    }

    hitTesting(_nmy) {
        if(Draggable.hitTest(_nmy, this.playerContainer, '20%')){
            if(this.hitLimit < 1){
                this.hitLimit++
                TweenMax.fromTo(this.playerContainer, .05, {scale:1}, {scale:.4, yoyo:true, repeat:1, onComplete:function () {
                    this.hitLimit = 0
                }.bind(this)})


                if(this.lifeController.lifePower > 0){
                    this.lifeController.lifePower -= 5
                    this.lifeController.updateLife()
                }else{
                    $('.resultsContainer').css('display', 'block')
                    $('.finalPoints').html($('.pointsDisplay').html())
                    this.enemiesGenerator.stopAllGenerators()
                }

            }
        }
    }
}

export default EnemyAir

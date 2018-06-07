class EnemyGround{
    constructor(options){

        this.speed = options.speed
        this.enemyImage = options.enemyImage
        this.playerContainer = options.playerContainer

        this.hitLimit = 0

        this.init()
    }

    init(){
        this.addEnemy()
    }

    getNewEnemy(){
        return '<img class="enemy-ground" src="'+this.enemyImage+'">'
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
    }

    hitTesting(_nmy) {
        if(Draggable.hitTest(_nmy, this.playerContainer, '90%')){
            if(this.hitLimit < 1){
                this.hitLimit++
                console.log('hit enemigo con player!')
                TweenMax.fromTo(this.playerContainer, .05, {alpha:1}, {alpha:.2, yoyo:true, repeat:1, onComplete:function () {
                    this.hitLimit = 0
                }.bind(this)})
            }
        }
    }
}

export default EnemyGround

class Explosions{
    constructor(options){

        //this.speed = options.speed
        this.explosionImage = options.explosionImage
        this.explosionX = options.explosionX
        this.explosionY = options.explosionY
        //this.playerContainer = options.playerContainer

        this.init()
    }

    init(){
        this.addExplosion()
    }

    getNewExplosion(){
        return '<img class="explosion" src="'+this.explosionImage+'">'
    }

    addExplosion(){
        const newExplosion = $(this.getNewExplosion())
        $('.gameContainer').append(newExplosion)
        this.animExplosion(newExplosion)
    }

    animExplosion(_explosion){
        TweenMax.set(_explosion, {x:this.explosionX, y:this.explosionY})

        TweenMax.fromTo(_explosion, .2, {scale:0},
            {scale:1, onComplete:function () {
            $(_explosion).remove()
        }})
    }


}

export default Explosions

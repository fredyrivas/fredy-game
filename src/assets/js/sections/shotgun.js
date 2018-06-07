class Shotgun{
    constructor(){

        this.init()
    }

    init(){
        this.addBullet()
    }

    getNewBullet(){
        return '<img class="bullet" src="assets/img/bullet.png">'
    }

    addBullet(){
        const newBullet = $(this.getNewBullet())
        $('.gameContainer').append(newBullet)
        this.animBullet(newBullet)
    }

    animBullet(_bullet){
        var playerr = document.getElementById('player')
        TweenMax.fromTo(_bullet, 2.5, {x:playerr._gsTransform.x+$('#player').width(), y:playerr._gsTransform.y},
            {x:$(window).width()+500, y:playerr._gsTransform.y, ease:Power1.easeOut,
                onComplete:function () {
            $(_bullet).remove()
        }})
    }
}

export default Shotgun

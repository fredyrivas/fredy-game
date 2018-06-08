class LifeController{
    constructor(){

        this.lifeForGround = 50
    }

    damageFromGroundenemy(){
        this.lifeForGround -= 5
        console.log(this.lifeForGround)
    }

    lifeWastedFromGround(){
        console.log('se acabo la vida de ground')
    }


}

export default LifeController

class LifeController{
    constructor(){

        this.lifePower = 100
    }


    updateLife(){
        $('.vidaDisplay').html(this.lifePower + '%')
    }

}

export default LifeController

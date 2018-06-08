class PointsController{
    constructor(){

        this.mainPoints = 0
    }


    updatePoints(){
        $('.pointsDisplay').html('+ ' + this.mainPoints)
    }

}

export default PointsController

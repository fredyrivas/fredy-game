class TimeController{
    constructor(options){

        this.mainTime = 60

        this.enemiesGenerator = options.enemiesGenerator

        this.renderTime()
    }


    renderTime(){
        if(this.mainTime > 0){
            this.mainTime--
            $('.timesDisplay').html(' '+this.mainTime + ' sec')
            this.initTimer()
        }else{
            $('.resultsContainer').css('display', 'block')
            $('.finalPoints').html($('.pointsDisplay').html())
            this.enemiesGenerator.stopAllGenerators()
        }

    }

    initTimer(){
        TweenMax.delayedCall(1, function () {
            this.renderTime()
        }.bind(this))
    }

}

export default TimeController

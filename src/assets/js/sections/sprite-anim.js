class SpriteAnim{
    constructor(options){
        // Cross-browser support for requestAnimationFrame
        this.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.mozRequestAnimationFrame

        // Set-up the canvas
        this.canvasWidth = options.animWidth
        this.canvasHeight = options.animHeight
        this.previewCanvas = document.getElementById(options.canvasID)
        this.c = this.previewCanvas.getContext('2d')

        // Timer - working at 60FPS
        this.interval = options.animSpeed
        this.timer = this.interval

        //Big Sprites

        this.newImage = new Image()
        this.newImage.src = options.imageSource
        this.imageWidth = options.animWidth
        this.imageHeight = options.animHeight
        this.imageState = 0

        this.bgcolor = options.canvasBGcolor

        this.c.fillStyle = this.bgcolor
        this.c.fillRect(0, 0, this.canvasWidth, this.canvasHeight)

        this.totalFrames = options.totalFrames
    }

    init(){
        this.startAnim()
    }

    renderPreview() {
        if (this.timer >= this.interval) {

            this.c.clearRect(0, 0, 300, 215)

            this.c.fillStyle = this.bgcolor
            this.c.fillRect(0, 0, this.canvasWidth, this.canvasHeight)

            this.imageState++
            if (this.imageState == this.totalFrames) {
                this.imageState = 0
            }
            const sy = 0 // clip x
            const sx = this.imageWidth * this.imageState // clip x
            const x = (this.canvasWidth / 2) - (this.imageWidth / 2) // x center
            const y = (this.canvasHeight / 2) - (this.imageHeight / 2) // y centre
            this.c.drawImage(this.newImage, sx, sy, this.imageWidth, (this.imageHeight - 1), x, y, this.imageWidth, this.imageHeight)
            this.timer = 0
        }
        this.timer++
    }

    startAnim() {
        this.renderPreview()
        requestAnimationFrame(this.startAnim.bind(this))
    }
}

export default SpriteAnim

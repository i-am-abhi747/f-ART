// board setup

var isDown = false;
var X,Y;
var pathlib = [] // all prv completed path librery
var path    = [] // current path

var linewidth   = 1.0
var strokeStyle = "#fff"

var bound_rect = canvas.getBoundingClientRect()

var width_ratio  = canvas.width  / bound_rect.width
var height_ratio = canvas.height / bound_rect.height



// mouse magic

$(canvas).mousedown(
    function(e) {

        // start drawing 

        isDown        = true
        ctx.lineWidth = linewidth
        ctx.beginPath()
        ctx.lineWidth = linewidth

        X = e.clientX * width_ratio
		Y = e.clientY * height_ratio
		ctx.moveTo(X, Y);

        path = [[X,Y]]

    }
)

$(canvas).mousemove(
    function(e) {

        if (isDown) {

            // draw

            X = e.clientX * width_ratio
		    Y = e.clientY * height_ratio

            ctx.lineCap     = 'round'
            ctx.lineJoin    = 'round'

            ctx.lineTo(X, Y)
            ctx.strokeStyle = strokeStyle
			ctx.stroke();

            path.push([X, Y])

        }
    }
)

$(canvas).mouseup(
    function(e) {

        // stop drawing

        isDown = false
        ctx.closePath();
        pathlib.push(path)
        console.log(path)

    }
)
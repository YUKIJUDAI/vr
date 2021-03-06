import homeBg from "@/assets/img/home-bg.png";

const getImagePortion = (imgObj, newWidth, newHeight, startX, startY) => {
    var tnCanvas = document.createElement('canvas');
    var tnCanvasContext = tnCanvas.getContext('2d');
    tnCanvas.width = newWidth; tnCanvas.height = newHeight;

    var bufferCanvas = document.createElement('canvas');
    var bufferContext = bufferCanvas.getContext('2d');
    bufferCanvas.width = imgObj.width;
    bufferCanvas.height = imgObj.height;
    bufferContext.drawImage(imgObj, 0, 0);

    tnCanvasContext.drawImage(bufferCanvas, startX, startY, newWidth, newHeight, 0, 0, newWidth, newHeight);
    return tnCanvas;
}


const waves = () => {
    var img = new Image();
    img.src = homeBg;
    var tnCanvas = null;
    let c = document.createElement("canvas").getContext("2d");
    let postctx = document.querySelector(".home").appendChild(document.createElement("canvas")).getContext("2d");
    let canvas = c.canvas;
    let vertices = [];

    // Effect Properties
    let vertexCount = 7000;
    let vertexSize = 4;
    let oceanWidth = 204;
    let oceanHeight = -150;
    let gridSize = 32;
    let waveSize = 8;
    let perspective = 100;

    // Common variables
    let depth = (vertexCount / oceanWidth) * gridSize;
    let frame = 0;
    let { sin, cos, tan, PI } = Math;

    // Render loop
    let loop = () => {
        let rad = (sin(frame / 100) * PI) / 20;
        let rad2 = (sin(frame / 50) * PI) / 10;
        frame++;
        if (postctx.canvas.width !== postctx.canvas.offsetWidth || postctx.canvas.height !== postctx.canvas.offsetHeight) {
            postctx.canvas.width = canvas.width = postctx.canvas.offsetWidth;
            postctx.canvas.height = canvas.height = postctx.canvas.offsetHeight;
        }

        var bg = c.createPattern(tnCanvas, "no-repeat");
        c.fillStyle = bg;
        c.fillRect(0, 0, canvas.width, canvas.height);
        c.save();
        c.translate(canvas.width / 2, canvas.height / 2);

        c.beginPath();
        vertices.forEach((vertex, i) => {
            let ni = i + oceanWidth;
            let x = vertex[0] - (frame % (gridSize * 2));
            let z = vertex[2] - ((frame * 2) % gridSize) + (i % 2 === 0 ? gridSize / 2 : 0);
            let wave = cos(frame / 45 + x / 50) - sin(frame / 20 + z / 50) + sin(frame / 30 + (z * x) / 10000);
            let y = vertex[1] + wave * waveSize;
            let a = Math.max(0, 1 - Math.sqrt(x ** 2 + z ** 2) / depth);
            let tx, ty, tz;

            y -= oceanHeight;

            // Transformation variables
            tx = x;
            ty = y;
            tz = z;

            // Rotation Y
            tx = x * cos(rad) + z * sin(rad);
            tz = -x * sin(rad) + z * cos(rad);

            x = tx;
            y = ty;
            z = tz;

            // Rotation Z
            tx = x * cos(rad) - y * sin(rad);
            ty = x * sin(rad) + y * cos(rad);

            x = tx;
            y = ty;
            z = tz;

            // Rotation X

            ty = y * cos(rad2) - z * sin(rad2);
            tz = y * sin(rad2) + z * cos(rad2);

            x = tx;
            y = ty;
            z = tz;

            x /= z / perspective;
            y /= z / perspective;

            if (a < 0.01) return;
            if (z < 0) return;

            c.globalAlpha = a;
            c.fillStyle = `rgb(245,245,245)`;
            c.fillRect(x - (a * vertexSize) / 2, y - (a * vertexSize) / 2, a * vertexSize, a * vertexSize);
            c.globalAlpha = 1;
        });
        c.restore();

        // Post-processing
        postctx.drawImage(canvas, 0, 0);

        postctx.drawImage(canvas, 0, 0);
        postctx.globalCompositeOperation = "source-over";

        requestAnimationFrame(loop);
    };

    // Generating dots
    for (let i = 0; i < vertexCount; i++) {
        let x = i % oceanWidth;
        let y = 0;
        let z = (i / oceanWidth) >> 0;
        let offset = oceanWidth / 2;
        vertices.push([(-offset + x) * gridSize, y * gridSize, z * gridSize]);
    }

    img.onload = function () {
        var h = document.querySelector("canvas").offsetTop;
        console.log((1920 - window.innerWidth) / 2)
        tnCanvas = getImagePortion(img, window.innerWidth, 200, (1920 - window.innerWidth) / 2, h);
        loop();
    };
};

export default waves;

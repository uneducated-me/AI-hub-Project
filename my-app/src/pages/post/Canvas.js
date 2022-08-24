
import { useRef, useState, useEffect} from "react";

const Canvas = ({url}) => {
    let img = new Image();
    let _width, _height = 0;
    img.src = url
    _width = img.width;
    _height = img.height;
    console.log(_width)
    
    // cosnt [src, setSrc] = useState([])

    let canvasStyle = {
        backgroundImage : `url(${url})`,
    }
    const canvasRef = useRef(null);
    const contextRef = useRef(null);
    const [ ctx, setCtx ] = useState();
    // console.log(file)
    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = _width;
        canvas.height = _height;
        
        const context = canvas.getContext('2d');
        context.strokeStyle = 'white';
        context.lineWidth = 2.5;
        contextRef.current = context;

        // setCanvasTag(canvas);
        setCtx(context);
        
    },[]);
    
    let startX = 0;
    let startY = 0;

    const startRecting = ({ nativeEvent }) => {
        startX = nativeEvent.offsetX;
        startY = nativeEvent.offsetY;
        ctx.beginPath();

    }

    const onMouseMoveR = ({ nativeEvent }) => {
        // console.log(url)
        const x = nativeEvent.offsetX;
        const y = nativeEvent.offsetY;

        const width = x-startX;
        const height = y-startY;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.rect(startX, startY, width, height);
    } 

    const stopRecting = () => {
        ctx.stroke(); 
        ctx.closePath();
        ctx.fillStyle = "white";
        ctx.fill(); 

    }


    return(
        <>
        <div className="center">
        <canvas id="jsCanvas" className="canvas" ref={canvasRef}
        style={canvasStyle}
        onMouseMove={onMouseMoveR}
        onMouseDown={startRecting}
        onMouseUp={stopRecting}
        ></canvas>

        </div>
        </>
    )
}

export default Canvas
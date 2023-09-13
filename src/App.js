import React, { useEffect, useRef } from 'react';
import * as fabric from 'fabric';

function App() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      backgroundColor: 'white',
      width: 1920,
      height: 1080,
    });

    const textbox = new fabric.Textbox('Enter your text', {
      left: 100,
      top: 100,
      width: 800,
      fontSize: 120,
      borderColor: 'black',
      cornerColor: 'black',
      cornerSize: 6,
      transparentCorners: false,
      stroke: 'red',
      strokeWidth: 3,
      fill: 'yellow',
    });

    canvas.add(textbox);
    canvas.renderAll();

    return () => {
      canvas.dispose();
    };
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} />
    </div>
  );
}

export default App;

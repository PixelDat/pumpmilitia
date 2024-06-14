"use client";
import React, { useEffect } from 'react';
import SpriteAnimation from '../components/animationComponent/spriteSheet';

const Sprite: React.FC = () => {



    useEffect(() => {
        const canvas = document.getElementById('canvas1') as HTMLCanvasElement;

        const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

        console.log(ctx);
        const spriteSheet = '/telegram/frens/spritesheet.jpg';

        const CANVAS_WIDTH = canvas.width = 600;
        const CANVAS_HEIGHT = canvas.height = 600;


        const shooterImage = new Image();
        shooterImage.src = spriteSheet;

        function animate() {
            ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            ctx.drawImage(shooterImage, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            // x++
            requestAnimationFrame(animate);
        }

        animate();
    })

    return (
        <div className="App flex flex-row h-screen justify-center items-center">
            <canvas className='border-4 border-black w-[600px] h-[600px] ' id='canvas1'></canvas>
        </div>
    );
};

export default Sprite;

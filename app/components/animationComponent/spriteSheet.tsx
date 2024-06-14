"use client";
import React, { useEffect } from 'react';

interface SpriteProps {
    animationState: string;
}

const SpriteAnim: React.FC<SpriteProps> = ({ animationState }) => {

    useEffect(() => {
        const canvas = document.getElementById('canvas1') as HTMLCanvasElement;

        console.log(animationState);
        const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

        const spriteSheet = '/telegram/frens/spritesheet.png';


        const CANVAS_WIDTH = canvas.width = 380;
        const CANVAS_HEIGHT = canvas.height = 480;

        const spriteWidth = 608 / 4;
        const spriteHeight = 410 / 2;

        const shooterImage = new Image();
        shooterImage.src = spriteSheet;


        const spriteAnimation = [] as any;
        const animationStates = [
            {
                name: 'walking',
                frames: 4
            },
            {
                name: 'shooting',
                frames: 2,
            }
        ]

        animationStates.forEach((state, index) => {
            let frames = {
                loc: [] as { x: number, y: number }[],
            }
            for (let j = 0; j < state.frames; j++) {
                let positionX = j * spriteWidth;
                let positionY = index * spriteHeight;
                frames.loc.push({ x: positionX, y: positionY });
            }
            spriteAnimation[state.name] = frames;
        })


        let gameFrame = 0;

        const staggerFrame = 12;

        function animate() {
            ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            let position = Math.floor(gameFrame / staggerFrame) % spriteAnimation[animationState].loc.length;
            let frameX = spriteWidth * position;
            let frameY = spriteAnimation[animationState].loc[position].y;
            ctx.drawImage(
                shooterImage,
                frameX,
                frameY,
                spriteWidth,
                spriteHeight,
                0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            // x++
            if (gameFrame % staggerFrame == 0) {
                if (frameX < 3) frameX++;
                else frameX = 0;
            }
            gameFrame++;
            requestAnimationFrame(animate);
        }

        animate();
    }, [animationState])

    return (
        <div className="flex border flex-col h-[270px] justify-center items-center">
            <canvas className='w-[220px] h-[270px]' id='canvas1'></canvas>
        </div>
    );
};

export default SpriteAnim;

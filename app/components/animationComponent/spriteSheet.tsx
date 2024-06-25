"use client";
import React, { useEffect } from 'react';

interface SpriteProps {
    animationState: string;
}

const SpriteAnim: React.FC<SpriteProps> = ({ animationState }) => {

    useEffect(() => {
        const canvas = document.getElementById('canvas1') as HTMLCanvasElement;

        const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

        const spriteSheet = '/telegram/frens/newsprite1.png';

        const CANVAS_WIDTH = canvas.width = 1868 / 4;
        const CANVAS_HEIGHT = canvas.height = 997 / 2;

        const spriteWidth = 470;
        const spriteHeight = 500;

        // const spriteWidth = 200;
        // const spriteHeight = 238;

        const shooterImage = new Image();
        shooterImage.src = spriteSheet;

        const spriteAnimation = [] as any;
        const animationStates = [
            {
                name: 'shooting',
                frames: 2,
            },
            {
                name: 'walking',
                frames: 4
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
        <div style={{ filter: "brightness(150%)" }} className="flex  flex-col justify-center items-center">
            <canvas className='w-[240px] h-[300px]' id='canvas1'></canvas>
        </div>
    );
};

export default SpriteAnim;

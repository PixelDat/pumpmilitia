"use client";
import React, { useEffect } from 'react';

interface SpriteProps {
    animationState: string;
}

const SpriteAnim: React.FC<SpriteProps> = ({ animationState }) => {

    useEffect(() => {
        const canvas = document.getElementById('canvas1') as HTMLCanvasElement;

        const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

        const spriteSheet = '/telegram/frens/sprite3.png';

        const CANVAS_WIDTH = canvas.width = 2151 / 6;
        const CANVAS_HEIGHT = canvas.height = 567;

        const spriteWidth = 408;
        const spriteHeight = 525;

        const shooterImage = new Image();
        shooterImage.src = spriteSheet;


        const spriteAnimation = [] as any;
        const animationStates = [
            {
                name: 'walking',
                frames: 4,
            },
            {
                name: 'shooting',
                frames: 50
            },
            {
                name: 'moving',
                frames: 15
            },

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
        // To adjust the speed of the tapping 
        const staggerFrame = 1;

        // function animate() {
        //     ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        //     let position = Math.floor(gameFrame / staggerFrame) % spriteAnimation[animationState].loc.length;
        //     let frameX = spriteWidth * position;
        //     let frameY = spriteAnimation[animationState].loc[position].y;

        //     ctx.drawImage(
        //         shooterImage,
        //         frameX,
        //         frameY,
        //         spriteWidth,
        //         spriteHeight,
        //         0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        //     // x++
        //     if (gameFrame % staggerFrame == 0) {
        //         if (frameX < 3) frameX++;
        //         else frameX = 0;
        //     }
        //     gameFrame++;
        //     requestAnimationFrame(animate);
        // }

        function animate() {
            ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            // let position = Math.floor(gameFrame / staggerFrame) % spriteAnimation[animationState].loc.length;
            let position = 1;
            let frameX = spriteWidth * position;
            let frameY = spriteAnimation[animationState].loc[position].y;

            ctx.drawImage(
                shooterImage,
                spriteWidth * 0,
                0,
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
        <div style={{ filter: "brightness(150%)" }} className="flex  flex-col justify-center items-center">
            <canvas className='w-[240px] h-[300px] border' id='canvas1'></canvas>
        </div>
    );
};

export default SpriteAnim;

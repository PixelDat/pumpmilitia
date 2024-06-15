"use client";
import React, { useEffect } from 'react';
import SpriteAnimation from '../components/animationComponent/spriteSheet';

const Sprite: React.FC = () => {
    const [animationType, setAnimationType] = React.useState("walking");
    useEffect(() => {
        const canvas = document.getElementById('canvas1') as HTMLCanvasElement;

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
            let position = Math.floor(gameFrame / staggerFrame) % spriteAnimation[animationType].loc.length;
            let frameX = spriteWidth * position;
            let frameY = spriteAnimation[animationType].loc[position].y;
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
    }, [animationType])

    return (
        <div className="App flex flex-col h-screen justify-center items-center">
            <select className='' onChange={(e) => setAnimationType(e.target.value)}>
                <option value="walking">Walking</option>
                <option value="shooting">Shooting</option>

            </select>
            <canvas className='border-4 border-black w-[380px] h-[480px] ' id='canvas1'></canvas>
        </div>
    );
};

export default Sprite;

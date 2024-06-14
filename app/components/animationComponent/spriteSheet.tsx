import React, { useEffect, useRef } from 'react';

interface SpriteAnimationProps {
    spriteSheet: string;
    frameWidth: number;
    frameHeight: number;
    frameCount: number;
    fps: number;
}

const SpriteAnimation: React.FC<SpriteAnimationProps> = ({
    spriteSheet,
    frameWidth,
    frameHeight,
    frameCount,
    fps
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const frameDuration = 1000 / fps;

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');
        if (!context) return;

        const image = new Image();
        image.src = spriteSheet;

        let currentFrame = 0;
        let lastFrameTime = 0;
        let animationId: number;

        const updateFrame = (time: number) => {
            if (!lastFrameTime) lastFrameTime = time;
            const delta = time - lastFrameTime;

            if (delta >= frameDuration) {
                currentFrame = (currentFrame + 1) % frameCount;
                lastFrameTime = time;
            }

            context.clearRect(0, 0, frameWidth, frameHeight);
            context.drawImage(
                image,
                currentFrame * frameWidth,
                0,
                frameWidth,
                frameHeight,
                0,
                0,
                frameWidth,
                frameHeight
            );

            animationId = requestAnimationFrame(updateFrame);
        };

        image.onload = () => {
            animationId = requestAnimationFrame(updateFrame);
        };

        return () => cancelAnimationFrame(animationId);
    }, [spriteSheet, frameWidth, frameHeight, frameCount, frameDuration]);

    return <canvas ref={canvasRef} width={frameWidth} height={frameHeight} />;
};

export default SpriteAnimation;

const canvas = document.getElementById('canvas1') as HTMLCanvasElement;

const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

const spriteSheet = '/telegram/frens/spritesheet.jpg';

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;


const shooterImage = new Image();
shooterImage.src = spriteSheet;

let x = 0
function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.fillRect(50, 50, 100, 100);
    // ctx.drawImage(shooterImage, 0, 0,);
    // x++
    requestAnimationFrame(animate);
}

animate();
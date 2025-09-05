import { useEffect, useRef } from 'react';
import { useTheme } from '@/hooks/useTheme';

interface CodeRainProps {
  density?: number;
  speed?: number;
  opacity?: number;
}

const CodeRain = ({ density = 50, speed = 1, opacity = 0.4 }: CodeRainProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Characters to use in the rain
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789{}[]()<>/\\|=+-*&^%$#@!?';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);

    // Array to store drop positions
    const drops: number[] = [];
    
    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    const draw = () => {
      // Theme-based background clearing
      const bgColor = theme === 'dark' 
        ? 'rgba(15, 23, 42, 0.1)' // Dark slate background
        : 'rgba(248, 250, 252, 0.05)'; // Light slate background
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Theme-based character color - using specific RGB values
      const charColor = theme === 'dark' 
        ? '#22c55e' // Solid green for dark mode
        : '#3b82f6'; // Solid blue for light mode
      ctx.fillStyle = charColor;
      ctx.globalAlpha = opacity;
      ctx.font = `${fontSize}px monospace`;

      // Draw characters
      for (let i = 0; i < drops.length; i++) {
        // Random character
        const char = characters[Math.floor(Math.random() * characters.length)];
        
        // Draw character
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        // Move drop down
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += speed;
      }
      
      // Reset alpha
      ctx.globalAlpha = 1;
    };

    const interval = setInterval(draw, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [density, speed, opacity, theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};

export default CodeRain;
import React, { useEffect, useRef, useState } from 'react';

const MatrixBackground = ({ onComplete }) => {
    const canvasRef = useRef(null);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let intervalId;

        // Function to initialize drops
        let drops = [];
        const fontSize = 14;

        const initDrops = () => {
            if (!canvas) return;
            const columns = Math.ceil(window.innerWidth / fontSize);
            drops = [];
            for (let i = 0; i < columns; i++) {
                drops[i] = 1;
            }
        };

        // Set canvas size and initialize drops
        const handleResize = () => {
            if (canvas) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                initDrops();
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial setup

        // Matrix characters
        const chars = '0101010101ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const charArray = chars.split('');

        const draw = () => {
            // Semi-transparent black to create trail effect
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#0F0'; // Green text
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = charArray[Math.floor(Math.random() * charArray.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    // Reset point reached
                }
                drops[i]++;
            }
        };

        // Run animation
        intervalId = setInterval(draw, 40); // Slightly faster

        // Stop and fade out
        const timeoutId = setTimeout(() => {
            setIsVisible(false); // Trigger fade out class (opacity 0)

            // Wait for the CSS transition (1000ms) to complete before notifying parent
            setTimeout(() => {
                clearInterval(intervalId); // Stop the draw loop
                if (onComplete) onComplete();
            }, 1000);
        }, 2200); // Run for 2.2 seconds before fading out

        return () => {
            clearInterval(intervalId);
            clearTimeout(timeoutId);
            window.removeEventListener('resize', handleResize);
        };
    }, [onComplete]);

    return (
        <canvas
            ref={canvasRef}
            className={`fixed top-0 left-0 w-full h-full pointer-events-none -z-10 transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-30' : 'opacity-0'
                }`}
        />
    );
};

export default MatrixBackground;

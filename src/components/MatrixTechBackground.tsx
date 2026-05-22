import React, { useEffect, useRef } from "react";

interface MatrixTechBackgroundProps {
  theme?: "light" | "dark";
}

export default function MatrixTechBackground({ theme = "light" }: MatrixTechBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      charge: number;
    }> = [];

    // Responsive sizing
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    // Populate particles based on canvas size
    const particleCount = Math.min(65, Math.floor((width * height) / 11000));
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2.5 + 1.2,
        charge: Math.random() * 0.5 + 0.5,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle grids background
      const gridSpacing = 50;
      ctx.strokeStyle = theme === "dark" ? "rgba(30, 41, 59, 0.4)" : "rgba(148, 163, 184, 0.12)";
      ctx.lineWidth = 0.8;
      
      for (let x = 0; x < width; x += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw active network relationships
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        
        // Update physics positions
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        // Draw node points
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        
        if (theme === "dark") {
          ctx.fillStyle = `rgba(59, 130, 246, ${0.35 + p1.charge * 0.45})`; // Cyber blue glow
        } else {
          ctx.fillStyle = `rgba(79, 70, 229, ${0.4 + p1.charge * 0.45})`; // Indigo secure glow
        }
        ctx.fill();

        // Connect nearby points
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Threshold connection distance
          if (distance < 110) {
            const alpha = (1 - distance / 110) * 0.22;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            
            if (theme === "dark") {
              ctx.strokeStyle = `rgba(96, 165, 250, ${alpha})`;
            } else {
              ctx.strokeStyle = `rgba(99, 102, 241, ${alpha * 0.8})`;
            }
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}

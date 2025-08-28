import { useEffect, useRef } from "react";

const AnimatedTechBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Tech lines configuration
    const lines: Array<{
      x: number;
      y: number;
      length: number;
      angle: number;
      speed: number;
      opacity: number;
    }> = [];

    // Create random tech lines
    for (let i = 0; i < 15; i++) {
      lines.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 200 + 50,
        angle: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.5 + 0.1,
        opacity: Math.random() * 0.3 + 0.1,
      });
    }

    // Animation particles
    const particles: Array<{
      x: number;
      y: number;
      targetX: number;
      targetY: number;
      speed: number;
      size: number;
    }> = [];

    // Create particles that flow along paths
    for (let i = 0; i < 30; i++) {
      const startX = Math.random() * canvas.width;
      const startY = Math.random() * canvas.height;
      particles.push({
        x: startX,
        y: startY,
        targetX: Math.random() * canvas.width,
        targetY: Math.random() * canvas.height,
        speed: Math.random() * 0.5 + 0.5,
        size: Math.random() * 2 + 1,
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw tech lines
      lines.forEach((line) => {
        ctx.strokeStyle = `rgba(0, 255, 255, ${line.opacity})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(line.x, line.y);
        ctx.lineTo(
          line.x + Math.cos(line.angle) * line.length,
          line.y + Math.sin(line.angle) * line.length
        );
        ctx.stroke();

        // Draw connection nodes
        ctx.fillStyle = `rgba(0, 255, 255, ${line.opacity * 2})`;
        ctx.beginPath();
        ctx.arc(line.x, line.y, 2, 0, Math.PI * 2);
        ctx.fill();

        // Update line position
        line.x += Math.cos(line.angle) * line.speed;
        line.y += Math.sin(line.angle) * line.speed;

        // Wrap around screen
        if (line.x < -line.length) line.x = canvas.width + line.length;
        if (line.x > canvas.width + line.length) line.x = -line.length;
        if (line.y < -line.length) line.y = canvas.height + line.length;
        if (line.y > canvas.height + line.length) line.y = -line.length;

        // Occasionally change direction
        if (Math.random() < 0.001) {
          line.angle += (Math.random() - 0.5) * Math.PI * 0.5;
        }
      });

      // Draw and update particles
      particles.forEach((particle) => {
        // Draw particle with glow
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 3
        );
        gradient.addColorStop(0, "rgba(0, 255, 255, 0.8)");
        gradient.addColorStop(1, "rgba(0, 255, 255, 0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
        ctx.fill();

        // Move particle towards target
        const dx = particle.targetX - particle.x;
        const dy = particle.targetY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > 5) {
          particle.x += (dx / distance) * particle.speed;
          particle.y += (dy / distance) * particle.speed;
        } else {
          // Set new target
          particle.targetX = Math.random() * canvas.width;
          particle.targetY = Math.random() * canvas.height;
        }
      });

      // Draw grid pattern
      ctx.strokeStyle = "rgba(0, 255, 255, 0.03)";
      ctx.lineWidth = 0.5;
      const gridSize = 50;
      
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-30"
      style={{ zIndex: 0 }}
    />
  );
};

export default AnimatedTechBackground;
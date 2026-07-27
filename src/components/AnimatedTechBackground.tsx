import { useEffect, useRef } from "react";

// Deluxe constellation background — ported from the Aegean Tutoring site,
// tuned for density/speed per feedback (denser links, faster drift).
const AnimatedTechBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;

    const resizeCanvas = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const COLORS = ["34,211,238", "59,130,246", "168,85,247"]; // cyan, blue, purple

    type Node = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      color: string;
    };

    let nodes: Node[] = [];

    const initNodes = () => {
      const count = Math.min(170, Math.round((width * height) / 11000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        r: Math.random() * 1.6 + 1,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      }));
    };
    initNodes();

    const linkDist = 200;
    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // links
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < linkDist) {
            const alpha = 0.28 * (1 - dist / linkDist);
            ctx.strokeStyle = `rgba(190,210,255,${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // nodes
      nodes.forEach((n) => {
        ctx.save();
        ctx.shadowColor = `rgba(${n.color},0.9)`;
        ctx.shadowBlur = 8;
        ctx.fillStyle = `rgba(${n.color},0.95)`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
        n.x = Math.max(0, Math.min(width, n.x));
        n.y = Math.max(0, Math.min(height, n.y));
      });

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
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0, opacity: 0.95 }}
    />
  );
};

export default AnimatedTechBackground;

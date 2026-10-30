import React, { useEffect, useRef } from 'react';

/**
 * MatrixDotGrid - Interactive Canvas Background
 * Cyber-emerald themed responsive dot matrix that dynamically warps/ripples
 * with mouse velocity, distance, and gentle ambient sine waves.
 */
export default function MatrixDotGrid() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse tracking with smooth decay
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      radius: 170, // Interaction radius
      active: false
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
      mouse.active = false;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    const SPACING = 34; // Distance between dots
    let time = 0;

    const render = () => {
      time += 0.025;
      
      // Linear interpolation for silky mouse trailing
      mouse.x += (mouse.targetX - mouse.x) * 0.12;
      mouse.y += (mouse.targetY - mouse.y) * 0.12;

      ctx.clearRect(0, 0, width, height);

      const cols = Math.ceil(width / SPACING) + 1;
      const rows = Math.ceil(height / SPACING) + 1;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const originX = i * SPACING;
          const originY = j * SPACING;

          // Ambient idle wave pattern
          const idleWave = Math.sin(time + originX * 0.008 + originY * 0.008);

          // Distance to mouse pointer
          const dx = mouse.x - originX;
          const dy = mouse.y - originY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          let posX = originX;
          let posY = originY;
          let dotRadius = 1.2;
          let alpha = 0.18 + idleWave * 0.06;
          let isHovered = false;

          if (dist < mouse.radius && mouse.active) {
            isHovered = true;
            const factor = (1 - dist / mouse.radius);
            
            // Push dots slightly away with a perspective ripple effect
            const force = factor * 14;
            const angle = Math.atan2(dy, dx);
            posX -= Math.cos(angle) * force;
            posY -= Math.sin(angle) * force;

            // Expand dot and brighten upon hover
            dotRadius = 1.3 + factor * 2.8;
            alpha = Math.min(0.9, 0.2 + factor * 0.75);
          }

          ctx.beginPath();
          ctx.arc(posX, posY, dotRadius, 0, Math.PI * 2);

          if (isHovered && dist < mouse.radius * 0.45) {
            // Hotspot: Neon lime accent center
            ctx.fillStyle = `rgba(163, 230, 53, ${alpha})`;
            ctx.shadowColor = '#a3e635';
            ctx.shadowBlur = 8;
          } else if (isHovered) {
            // Active ripple zone: Crisp neon emerald
            ctx.fillStyle = `rgba(16, 185, 129, ${alpha})`;
            ctx.shadowColor = '#10b981';
            ctx.shadowBlur = 5;
          } else {
            // Calm cyber matrix: Dim emerald / carbon slate
            ctx.fillStyle = `rgba(16, 185, 129, ${Math.max(0.08, alpha)})`;
            ctx.shadowBlur = 0;
          }

          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-70"
    />
  );
}

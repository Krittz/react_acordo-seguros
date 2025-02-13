import { useEffect, useRef } from "react";
import "./style.css";

const BgMov = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let w,
      h,
      particles = [],
      animationFrameId;

    const opts = {
      particleColor: "rgb(200,200,200)",
      lineColor: "rgb(200,200,200)",
      particleAmount: 30,
      defaultSpeed: 0.1,
      variantSpeed: 1,
      defaultRadius: 2,
      variantRadius: 2,
      linkRadius: 200,
    };

    const rgb = opts.lineColor.match(/\d+/g);

    const resizeCanvas = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    class Particle {
      constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.speed = opts.defaultSpeed + Math.random() * opts.variantSpeed;
        this.directionAngle = Math.random() * 2 * Math.PI;
        this.color = opts.particleColor;
        this.radius = opts.defaultRadius + Math.random() * opts.variantRadius;
        this.vector = {
          x: Math.cos(this.directionAngle) * this.speed,
          y: Math.sin(this.directionAngle) * this.speed,
        };
      }

      update() {
        this.border();
        this.x += this.vector.x;
        this.y += this.vector.y;
      }

      border() {
        if (this.x >= w || this.x <= 0) this.vector.x *= -1;
        if (this.y >= h || this.y <= 0) this.vector.y *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    const checkDistance = (x1, y1, x2, y2) => {
      return Math.hypot(x2 - x1, y2 - y1);
    };

    const linkPoints = (particle, others) => {
      others.forEach((other) => {
        const distance = checkDistance(
          particle.x,
          particle.y,
          other.x,
          other.y
        );
        if (distance < opts.linkRadius) {
          const opacity = 1 - distance / opts.linkRadius;
          ctx.strokeStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(other.x, other.y);
          ctx.stroke();
        }
      });
    };

    const setupParticles = () => {
      particles = [];
      resizeCanvas();
      for (let i = 0; i < opts.particleAmount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      particles.forEach((p) => linkPoints(p, particles));
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resizeCanvas);

    setupParticles();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="canvas-bg"></canvas>;
};

export default BgMov;

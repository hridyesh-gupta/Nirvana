'use client';

import { useEffect, useState } from 'react';

interface Petal {
  id: number;
  x: number;
  y: number;
  rotation: number;
  speed: number;
  opacity: number;
}

export default function SakuraPetals() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const createPetal = () => ({
      id: Math.random(),
      x: Math.random() * window.innerWidth,
      y: -20,
      rotation: Math.random() * 360,
      speed: Math.random() * 2 + 1,
      opacity: Math.random() * 0.6 + 0.2
    });

    const initialPetals = Array.from({ length: 8 }, createPetal);
    setPetals(initialPetals);

    const interval = setInterval(() => {
      setPetals(prev => {
        const updated = prev.map(petal => ({
          ...petal,
          y: petal.y + petal.speed,
          rotation: petal.rotation + 1,
          x: petal.x + Math.sin(petal.y * 0.01) * 0.5
        })).filter(petal => petal.y < window.innerHeight + 20);

        if (Math.random() < 0.1 && updated.length < 12) {
          updated.push(createPetal());
        }

        return updated;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {petals.map(petal => (
        <div
          key={petal.id}
          className="absolute w-3 h-3 text-red-300"
          style={{
            left: `${petal.x}px`,
            top: `${petal.y}px`,
            transform: `rotate(${petal.rotation}deg)`,
            opacity: petal.opacity,
            transition: 'all 0.1s linear'
          }}
        >
          <i className="ri-leaf-line"></i>
        </div>
      ))}
    </div>
  );
}
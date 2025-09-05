import { useEffect, useState } from 'react';

interface Petal {
  id: number;
  left: number;
  animationDuration: number;
  animationDelay: number;
  size: number;
}

const SakuraPetals = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    // Create initial petals
    const initialPetals: Petal[] = [];
    const petalCount = 15; // Reduced for better performance

    for (let i = 0; i < petalCount; i++) {
      initialPetals.push({
        id: i,
        left: Math.random() * 100,
        animationDuration: Math.random() * 10 + 8, // 8-18 seconds
        animationDelay: Math.random() * 10, // 0-10 seconds delay
        size: Math.random() * 6 + 8, // 8-14px
      });
    }

    setPetals(initialPetals);

    // Continuously add new petals
    const interval = setInterval(() => {
      setPetals(prev => {
        // Remove old petals and add new ones
        const newPetals = [...prev];
        
        // Add a new petal occasionally
        if (Math.random() < 0.3) {
          newPetals.push({
            id: Date.now() + Math.random(),
            left: Math.random() * 100,
            animationDuration: Math.random() * 10 + 8,
            animationDelay: 0,
            size: Math.random() * 6 + 8,
          });
        }

        // Keep only recent petals (limit to prevent memory issues)
        return newPetals.slice(-20);
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Sakura Background */}
      <div className="sakura-bg" />
      
      {/* Falling Petals */}
      <div className="sakura-container">
        {petals.map((petal) => (
          <div
            key={petal.id}
            className="sakura-petal"
            style={{
              left: `${petal.left}%`,
              width: `${petal.size}px`,
              height: `${petal.size}px`,
              animationDuration: `${petal.animationDuration}s`,
              animationDelay: `${petal.animationDelay}s`,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default SakuraPetals;

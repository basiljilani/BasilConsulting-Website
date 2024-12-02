import { motion } from 'framer-motion';

export function AnimatedBackground() {
  // Generate random positions for initial placement
  const generateElements = () => {
    return [...Array(25)].map(() => ({
      size: Math.random() * 150 + 100,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 8 + 7,
      delay: Math.random() * 2,
    }));
  };

  const elements = generateElements();

  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-blue-900/20 via-blue-800/20 to-blue-900/20">
      {/* Animated shapes */}
      {elements.map((element, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-br from-blue-400/30 to-blue-600/30 backdrop-blur-sm"
          style={{
            width: element.size,
            height: element.size,
            left: `${element.left}%`,
            top: `${element.top}%`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, 30, 0],
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Additional decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-transparent to-blue-900/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(59,130,246,0.1)_100%)]" />
      </div>

      {/* Final overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-blue-800/60 to-blue-900/60 backdrop-blur-[2px]" />
    </div>
  );
}
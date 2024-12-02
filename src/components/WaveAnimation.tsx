import { motion } from 'framer-motion';

export function WaveAnimation() {
  return (
    <div className="absolute inset-0">
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute inset-x-0 h-40"
          style={{
            background: `rgba(0, 0, 0, ${0.8 - index * 0.2})`,
            maskImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 1200 120\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z\'/%3E%3C/svg%3E")',
            maskSize: '100% 100%',
            WebkitMaskImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 1200 120\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z\'/%3E%3C/svg%3E")',
            WebkitMaskSize: '100% 100%',
            top: `-${40 - index * 15}px`,
          }}
          animate={{
            x: [0, -100, 0],
          }}
          transition={{
            duration: 15 + index * 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
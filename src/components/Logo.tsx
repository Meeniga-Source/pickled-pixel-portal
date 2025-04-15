
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
      className="text-4xl font-bold text-[#718F2A] flex items-center gap-2"
    >
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 10, -10, 0] 
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        className="w-12 h-12"
      >
        🥒
      </motion.div>
      Pickle Paradise
    </motion.div>
  );
};

export default Logo;

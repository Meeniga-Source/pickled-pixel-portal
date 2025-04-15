
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="text-4xl font-bold text-[#718F2A] flex items-center gap-2"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="w-12 h-12"
      >
        🥒
      </motion.div>
      Pickle Paradise
    </motion.div>
  );
};

export default Logo;

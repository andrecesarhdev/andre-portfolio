import { motion, useScroll, useTransform } from "framer-motion";

function BackgroundGrid() {
  const { scrollY } = useScroll();
  const translateY = useTransform(scrollY, [0, 3000], [0, 150]);

  return (
    <motion.div
      style={{ y: translateY }}
      className="fixed inset-0 -z-10 pointer-events-none"
    >
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
    </motion.div>
  );
}

export default BackgroundGrid;
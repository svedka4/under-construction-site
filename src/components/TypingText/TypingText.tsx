import { motion } from "framer-motion";

type TerminalTypeProps = {
  lines: string[];
  charDelay?: number;
  lineDelay?: number;
};

export default function TypingText({
  lines,
  charDelay = 0.055,
  lineDelay = 2.505,
}: TerminalTypeProps) {
  return (
    <div>
      {lines.map((line, lineIndex) => (
        <motion.div
          key={lineIndex}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: charDelay,
                delayChildren: lineIndex * lineDelay,
              },
            },
          }}
          style={{ whiteSpace: "pre" }}
        >
          {line.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      ))}
    </div>
  );
}

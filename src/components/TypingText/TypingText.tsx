import { motion } from "framer-motion";
import { useEffect } from "react";

type TerminalTypeProps = {
  lines: string[];
  charDelay?: number;
  lineDelay?: number;
  onComplete?: () => void;
};

export default function TypingText({
  lines,
  charDelay = 0.055,
  lineDelay = 2.505,
  onComplete,
}: TerminalTypeProps) {

  useEffect(() => {
    if (!onComplete) return;

    const totalChars = lines.reduce((acc, line) => acc + line.length, 0);
    const totalTime =
      totalChars * charDelay * 1000 +
      (lines.length - 1) * lineDelay * 1000;

    const timeout = setTimeout(onComplete, totalTime);
    return () => clearTimeout(timeout);
  }, [lines, charDelay, lineDelay, onComplete]);

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

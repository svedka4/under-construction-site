import { motion } from "framer-motion";

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
  const lastLineIndex = lines.length - 1;

  return (
    <div>
      {lines.map((line, lineIndex) => {
        const isLastLine = lineIndex === lastLineIndex;

        return (
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
            {line.split("").map((char, charIndex) => {
              const isLastChar =
                isLastLine && charIndex === line.length - 1;

              return (
                <motion.span
                  key={charIndex}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                  }}
                  onAnimationComplete={isLastChar ? onComplete : undefined}
                >
                  {char}
                </motion.span>
              );
            })}
          </motion.div>
        );
      })}
    </div>
  );
}

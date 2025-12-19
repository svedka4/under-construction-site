import { useState } from "react";
import { motion } from "framer-motion";

import useTabTitle from './hooks/useTabTitle';
import Layout from './components/LayoutComponent/Layout';
import MusicPlayer from './components/MusicPlayer/MusicPlayer';
import TypingText from './components/TypingText/TypingText';
import styles from './components/TypingText/TypingText.module.css';

function App() {
  const [typingDone, setTypingDone] = useState(false);
  
  useTabTitle('Under Construction', 'Gabija Svedkauskaite');

  return (
    <Layout>
      <div className={styles.terminalBlock}>
        <div className={styles.terminal}>
          <TypingText
            lines={[
              "> Initialising portfolio...",
              "> Loading creativity...",
              "> Compiling skills...",
            ]}
            onComplete={() => setTypingDone(true)}
          />

          {typingDone && (
            <motion.div
              className={styles.status}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              [Status: Under Construction]
            </motion.div>
          )}
        
          {typingDone && (
            <motion.div
              className={styles.meta}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 0.55, y: 0 }}
              transition={{
                delay: 0.6,
                duration: 0.8,
                ease: "easeOut",
              }}
            >
              <a href="/">notify me</a>
              {" ✫ "}
              <a href="https://github.com/svedka4">follow my journey → </a>
            </motion.div>
          )}

        </div>
      </div>
    
      <div className="player">
        <MusicPlayer></MusicPlayer>
      </div>
    </Layout>
  );
}

export default App;
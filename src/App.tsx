// src/App.tsx
import useTabTitle from './hooks/useTabTitle';
import Layout from './components/LayoutComponent/Layout';
import MusicPlayer from './components/MusicPlayer/MusicPlayer';
import TypingText from './components/TypingText/TypingText';
import styles from './components/TypingText/TypingText.module.css';

function App() {
  useTabTitle('Under Construction', 'Gabija Svedkauskaite');

  return (
    <Layout>
      <div className={styles.terminalBlock}>
        <div className={styles.terminal}>
          <TypingText lines={[
              "> Initialising portfolio...",
              "> Loading creativity...",
              "> Compiling skills...",
          ]}
          />

          <div className={styles.status}>
            [Status: Under Construction]
          </div>

          <div className={styles.meta}>
            <a href="/">notify me</a>
            {" · "}
            <a href="/">follow my journey</a>
          </div>
        </div>
      </div>
    
      <div className="player">
        <MusicPlayer></MusicPlayer>
      </div>
    </Layout>
  );
}

export default App;
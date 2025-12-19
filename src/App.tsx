// src/App.tsx
import useTabTitle from './hooks/useTabTitle';
import Layout from './components/LayoutComponent/Layout';
import MusicPlayer from './components/MusicPlayer/MusicPlayer';
import TypingText from './components/TypingText/TypingText'

function App() {
  useTabTitle('Under Construction', 'Gabija Svedkauskaite');

  return (
    <Layout>
      <div>
        <TypingText></TypingText>
      </div>
      <div>
        <MusicPlayer></MusicPlayer>
      </div>
    </Layout>
  );
}

export default App;
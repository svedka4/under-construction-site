// src/App.tsx
import useTabTitle from './hooks/useTabTitle';
import Layout from './components/LayoutComponent/Layout';
import MusicPlayer from './components/MusicPlayer/MusicPlayer';

function App() {
  useTabTitle('Software Developer & DJ', 'Gabija Svedkauskaite');

  return (
    <Layout>
      <div>
        <MusicPlayer></MusicPlayer>
      </div>
    </Layout>
  );
}

export default App;
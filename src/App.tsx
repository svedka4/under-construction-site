// src/App.tsx
import useTabTitle from './hooks/useTabTitle';
import Layout from './components/LayoutComponent/Layout';

function App() {
  useTabTitle('Software Developer & DJ', 'Gabija Svedkauskaite');

  return (
    <Layout>
      <div>
      </div>
    </Layout>
  );
}

export default App;
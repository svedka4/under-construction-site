// src/App.tsx
import useTabTitle from './hooks/useTabTitle';

function App() {
  useTabTitle('Software Developer & DJ', 'Gabija Svedkauskaite');

  return (
    <div>
      <p>© 2025 švedka. All rights reserved.</p>
      <h1 className="text-3x1 font-bold underline">Under Construction</h1>{/* Your content here */}
    </div>
  );
}

export default App;
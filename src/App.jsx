import { Routes } from 'react-router-dom';
import './App.css'

function App() {
  return <div>
      <Routes>
          <Route  path="/" element={<Home />}/>
          <Route  path="/room/:roomId" element={<Room />}/>
      </Routes>
    </div>;
}

export default App;

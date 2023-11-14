import './css/home.css';
import './css/reset.css';
import SortPage from './pages/sort';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SortPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;

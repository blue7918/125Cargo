import './css/home.css';
import './css/reset.css';
import SortPage from './pages/sort';
import { Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<SortPage />}></Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;

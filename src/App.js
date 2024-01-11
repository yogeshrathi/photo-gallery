import { Route, Routes } from 'react-router-dom';
import './App.css';
import Gallery from './pages/gallery';

function App() {
  return (
    <Routes>
      <Route path='' Component={Gallery}></Route>
    </Routes>
  );
}

export default App;

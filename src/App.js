import './App.css';
import AppHeader from './components/AppHeader/AppHeader';
import Home from './pages/Home/Home';
import { Route, Routes } from 'react-router';
import AutoPlanner from './pages/AutoPlanner/AutoPlanner';

function App() {

  return (
    <>
      <AppHeader/>
      <div className="outlet">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/auto-planner" element={<AutoPlanner />}/>
        </Routes>
      </div>
    </>

);
}



export default App;

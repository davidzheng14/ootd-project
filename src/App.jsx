import { useState } from 'react';
import { Routes, Route } from 'react-router';
import { HomePage } from './pages/HomePage.jsx';
import { ClosetPage } from './pages/ClosetPage.jsx';
import { CategoryPage } from './pages/CategoryPage.jsx';
import { OutfitPage } from './pages/OutfitPage.jsx';
import { CalendarPage } from './pages/CalendarPage.jsx';
import { AddPage } from './pages/AddPage.jsx';
import './App.css';
import { Sidebar } from './components/Sidebar.jsx';

function App() {
  
  const [closet,setCloset] = useState([]);
  const [outfitList, setOutfitList] = useState([]);

  return (
    <div className="app">
      <Sidebar />
      
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage closet={closet} outfitList={outfitList}/>} />
          <Route path="closet" element={<ClosetPage closet={closet} setCloset={setCloset} outfitList={outfitList} setOutfitList={setOutfitList} />} />
          <Route path="closet/:category" element={<CategoryPage />} />
          <Route path="outfit" element={<OutfitPage outfitList={outfitList} />} />
          <Route path="calendar" element={<CalendarPage />} />
          <Route path="add" element={<AddPage closet={closet} setCloset={setCloset}/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App

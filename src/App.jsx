import { useState } from 'react'
import { Routes, Route } from 'react-router'
import './App.css'
import { HomePage } from './pages/HomePage.jsx'
import { ClosetPage } from './pages/ClosetPage.jsx'
import { OutfitPage } from './pages/OutfitPage.jsx'
import { CalendarPage } from './pages/CalendarPage.jsx'
import { AddPage } from './pages/AddPage.jsx'

function App() {
  
  const [closet,setCloset] = useState([]);
  const [outfitList, setOutfitList] = useState([]);

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage closet={closet}/>} />
      <Route path="closet" element={<ClosetPage closet={closet} setCloset={setCloset} outfitList={outfitList} setOutfitList={setOutfitList} />} />
      <Route path="outfit" element={<OutfitPage outfitList={outfitList} />} />
      <Route path="calendar" element={<CalendarPage />} />
      <Route path="add" element={<AddPage closet={closet} setCloset={setCloset}/>} />
    </Routes>
      
    </>
  )
}

export default App

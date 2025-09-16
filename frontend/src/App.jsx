import Dashboard from './pages/dashboard'
import PanchakarmaWebsite from './pages/landingpage'
import Nutritionist from './pages/Nutritionist'
import { Routes, Route } from 'react-router-dom'



function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='w-screen h-screen mt-0'>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/nutrionist" element={<Nutritionist />} />
        <Route path="/" element={<PanchakarmaWebsite />} />
      </Routes>
    </div>

  )
}

export default App

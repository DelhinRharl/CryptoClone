import { BrowserRouter, Routes,  Route } from 'react-router-dom';
import Cryptocurrencies from './pages/Cryptocurrencies';
import Dashboard from './components/Dashboard';
import Homepage from './pages/Homepage';

function App() {
    return (
   <div className="flex bg-slate-200">
    <BrowserRouter>
    <Dashboard/>
    <Routes>
    <Route  path='/' element={<Homepage/>}/>
    <Route  path='crypto' element={<Cryptocurrencies/>}/>
    {/* <Route  path='news' element={<News/>}/> */}
    </Routes>
    </BrowserRouter>

   </div>
    );
}

export default App;

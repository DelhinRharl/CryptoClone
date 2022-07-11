import { BrowserRouter } from 'react-router-dom';
import Cryptocurrencies from './pages/Cryptocurrencies';
import Dashboard from './components/Dashboard';
import Homepage from './pages/Homepage';

function App() {
    return (
   <div className="flex bg-slate-200">
    <BrowserRouter>
     <Dashboard/>
     <Homepage/>
    </BrowserRouter>
   </div>
    );
}

export default App;

import { BrowserRouter } from 'react-router-dom';
import Cryptocurrencies from './components/Cryptocurrencies';
import Dashboard from './components/Dashboard';
import Homepage from './components/Homepage';

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

import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Homepage from './components/Homepage';

function App() {
    return (
   <div className="flex  bg-slate-200 gap-8">
    <BrowserRouter>
     <Dashboard/>
     <Homepage/>
    </BrowserRouter>
   </div>
    );
}

export default App;

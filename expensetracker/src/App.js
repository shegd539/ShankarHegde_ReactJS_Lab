import logo from './logo.svg';
import './App.css';

import { BrowserRouter } from 'react-router-dom'
import {Routes,Route} from 'react-router';
import ExpenseTracker from './components/ExpenseTracker';
import ShowData from './components/ShowData';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
       <h1>Expense Tracker</h1>
      
      
      <Home/>

     </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import { Link, Router } from 'react-router-dom';
import AppRouter from './routes';


function App() {

  
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div className='df'><h1>NBN Payroll System</h1></div>
      <nav >
      <ul className='df'>
        <li className={Router.pathname === "http://localhost:3000/login" ? "active" : ""}>
          <Link className={Router.pathname === "/login" ? "active" : ""} to="/login">Login</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/new-entry">New Entry</Link>
        </li>
        <li>
          <Link to="/daily-report">Daily Report</Link>
        </li>
        <li>
          <Link to="/monthly-report">Monthly Report</Link>
        </li>
        <li>
          <Link to="/employee-report">Employee Report</Link>
        </li>
        <li>
          <Link to="/employee">Employee</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
    </nav>
      <div>

      </div>
     {/* { <Login />} */}
      
       {/* <Dashboard /> */}
       <AppRouter />
    </div>
  );
}

export default App;
